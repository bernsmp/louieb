import { NextResponse } from 'next/server'

// OpenRouter API configuration
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'
const VISION_MODEL = 'google/gemini-2.0-flash-001'
const TEXT_MODEL = 'anthropic/claude-3-5-haiku-20241022'

// System prompts for different actions
const PROMPTS = {
  'alt-text': `Generate a concise, descriptive alt text for this image that is accessibility-focused.
The alt text should:
- Be descriptive but concise (under 125 characters ideally)
- Focus on what's important for understanding the page content
- Avoid phrases like "image of" or "picture of"
- Be objective and factual
Return ONLY the alt text, nothing else.`,

  'rewrite-headline': `Rewrite this headline to be more punchy, engaging, and compelling.
Keep a similar length to the original. Make it attention-grabbing while maintaining professionalism.
Return ONLY the rewritten headline, nothing else.`,

  'generate-seo': `Generate a compelling SEO meta description for this page.
Requirements:
- Exactly 150-160 characters
- Include relevant keywords naturally
- Make it compelling and clickable
- Accurately represent the page content
Return ONLY the meta description, nothing else.`,
}

interface SuggestRequest {
  action: 'alt-text' | 'rewrite-headline' | 'generate-seo'
  imageUrl?: string
  text?: string
  context?: string
  title?: string
  pageContent?: string
}

export async function POST(request: Request) {
  // Check for API key
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    console.error('[AI API] OPENROUTER_API_KEY not configured')
    return NextResponse.json(
      { error: 'AI service not configured' },
      { status: 503 }
    )
  }

  try {
    const body: SuggestRequest = await request.json()
    const { action, imageUrl, text, context, title, pageContent } = body

    // Validate action
    if (!action || !PROMPTS[action]) {
      return NextResponse.json(
        { error: 'Invalid action. Must be: alt-text, rewrite-headline, or generate-seo' },
        { status: 400 }
      )
    }

    // Validate required fields per action
    if (action === 'alt-text' && !imageUrl) {
      return NextResponse.json(
        { error: 'imageUrl is required for alt-text action' },
        { status: 400 }
      )
    }

    if (action === 'rewrite-headline' && !text) {
      return NextResponse.json(
        { error: 'text is required for rewrite-headline action' },
        { status: 400 }
      )
    }

    if (action === 'generate-seo' && !title && !pageContent) {
      return NextResponse.json(
        { error: 'title or pageContent is required for generate-seo action' },
        { status: 400 }
      )
    }

    // Build the API request based on action
    let messages: any[]
    let model: string

    if (action === 'alt-text') {
      // Vision model for image analysis
      model = VISION_MODEL
      messages = [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: PROMPTS[action],
            },
            {
              type: 'image_url',
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ]
    } else if (action === 'rewrite-headline') {
      // Text model for headline rewriting
      model = TEXT_MODEL
      const userPrompt = context
        ? `Headline to rewrite: "${text}"\n\nContext: ${context}`
        : `Headline to rewrite: "${text}"`

      messages = [
        {
          role: 'system',
          content: PROMPTS[action],
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ]
    } else {
      // generate-seo
      model = TEXT_MODEL
      let userPrompt = ''
      if (title && pageContent) {
        userPrompt = `Page title: ${title}\n\nPage content:\n${pageContent}`
      } else if (title) {
        userPrompt = `Page title: ${title}`
      } else {
        userPrompt = `Page content:\n${pageContent}`
      }

      messages = [
        {
          role: 'system',
          content: PROMPTS[action],
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ]
    }

    // Call OpenRouter API
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Louie B Sales Consultant',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[AI API] OpenRouter error:', response.status, errorText)
      return NextResponse.json(
        { error: 'AI service request failed' },
        { status: response.status }
      )
    }

    const data = await response.json()
    const suggestion = data.choices?.[0]?.message?.content?.trim()

    if (!suggestion) {
      console.error('[AI API] No suggestion in response:', data)
      return NextResponse.json(
        { error: 'No suggestion generated' },
        { status: 500 }
      )
    }

    return NextResponse.json({ suggestion })
  } catch (error) {
    console.error('[AI API] Error generating suggestion:', error)
    return NextResponse.json(
      { error: 'Failed to generate suggestion' },
      { status: 500 }
    )
  }
}

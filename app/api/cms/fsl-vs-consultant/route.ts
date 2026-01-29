import { getFSLVsConsultantPageData } from '@/lib/cms'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await getFSLVsConsultantPageData()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching FSL vs Consultant CMS data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch CMS data' },
      { status: 500 }
    )
  }
}

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import Link from "next/link";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:lg:text-6xl prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:md:text-3xl prose-p:text-base prose-p:md:text-lg prose-p:leading-relaxed prose-p:my-6 prose-a:text-[#0966c2] prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-strong:text-foreground prose-ul:list-disc prose-ol:list-decimal prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-[#0966c2] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-8 prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') return null;
            // Handle external images
            if (src.startsWith('http')) {
              return (
                <img
                  src={src}
                  alt={alt || ''}
                  className="w-full rounded-lg shadow-lg my-8"
                />
              );
            }
            // Handle internal images
            return (
              <Image
                src={src}
                alt={alt || ''}
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg shadow-lg my-8"
              />
            );
          },
          a: ({ href, children }) => {
            if (!href || typeof href !== 'string') return <>{children}</>;
            // External links
            if (href.startsWith('http')) {
              return (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0966c2] hover:underline"
                >
                  {children}
                </Link>
              );
            }
            // Internal links
            return (
              <Link href={href} className="text-[#0966c2] hover:underline">
                {children}
              </Link>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#0966c2] pl-4 italic text-muted-foreground my-8">
              {children}
            </blockquote>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground">{children}</em>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">{children}</strong>
          ),
          p: ({ children }) => (
            <p className="my-6 text-base md:text-lg leading-relaxed">{children}</p>
          ),
          h2: ({ children }) => (
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-12 mb-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
              {children}
            </h3>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}


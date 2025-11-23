"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideosOpen, setIsVideosOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "border-b border-neutral-900/20 bg-slate-950/50 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        {/* Logo - More refined */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          {/* Logo image if exists, otherwise text */}
          <img
            src="/logo/LB Logo.png"
            alt="Louie Bernstein"
            className="h-8 w-auto lg:h-10"
            onError={(e) => {
              // Hide image if logo doesn't exist, show text instead
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className={cn(
            "font-serif text-xl font-bold lg:text-2xl",
            scrolled ? "text-neutral-900" : "text-white"
          )}>
            Louie Bernstein
          </span>
          <span className={cn(
            "hidden text-sm font-medium lg:inline-block",
            scrolled ? "text-neutral-500" : "text-neutral-300"
          )}>
            Fractional Sales Leader
          </span>
        </Link>

        {/* Desktop Navigation - Cleaner, more modern */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              scrolled 
                ? "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                : "text-neutral-200 hover:bg-white/10 hover:text-white"
            )}
          >
            Home
          </Link>
          <Link
            href="/articles"
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              scrolled 
                ? "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                : "text-neutral-200 hover:bg-white/10 hover:text-white"
            )}
          >
            Articles
          </Link>

          {/* Videos Dropdown - Better styling */}
          <div className="relative">
            <button
              onClick={() => setIsVideosOpen(!isVideosOpen)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                scrolled 
                  ? "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                  : "text-neutral-200 hover:bg-white/10 hover:text-white"
              )}
            >
              Videos
              <svg
                className={cn(
                  "ml-1 inline-block h-4 w-4 transition-transform",
                  isVideosOpen && "rotate-180"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isVideosOpen && (
              <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-neutral-200 bg-white py-1 shadow-lg">
                <Link
                  href="/videos"
                  className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                  onClick={() => setIsVideosOpen(false)}
                >
                  All Videos
                </Link>
                <Link
                  href="/featured-videos"
                  className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                  onClick={() => setIsVideosOpen(false)}
                >
                  Featured Videos
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/newsletter"
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              scrolled 
                ? "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                : "text-neutral-200 hover:bg-white/10 hover:text-white"
            )}
          >
            Newsletter
          </Link>
          <Link
            href="/#contact"
            className={cn(
              "ml-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all hover:shadow-md",
              scrolled
                ? "bg-neutral-900 text-white hover:bg-neutral-800"
                : "bg-white text-neutral-900 hover:bg-neutral-100"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button - Cleaner */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-0.5 w-6 transition-all",
              scrolled ? "bg-neutral-900" : "bg-white",
              isMenuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 transition-all",
              scrolled ? "bg-neutral-900" : "bg-white",
              isMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 transition-all",
              scrolled ? "bg-neutral-900" : "bg-white",
              isMenuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu - Better styling */}
      {isMenuOpen && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
            <Link
              href="/"
              className="rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/videos"
              className="rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              All Videos
            </Link>
            <Link
              href="/featured-videos"
              className="rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Featured Videos
            </Link>
            <Link
              href="/newsletter"
              className="rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>
            <Link
              href="/#contact"
              className="mx-4 mt-2 rounded-lg bg-neutral-900 px-6 py-3 text-center text-base font-semibold text-white transition-all hover:bg-neutral-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

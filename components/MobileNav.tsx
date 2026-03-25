"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link?: string;
  icon?: React.ReactElement;
  children?: { name: string; link: string; icon?: React.ReactElement }[];
};

export function MobileNav({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const close = () => {
    setIsOpen(false);
    setOpenAccordion(null);
  };

  const handleHashScroll = (href: string) => {
    close();
    const hash = href.split("#")[1];
    if (hash) {
      setTimeout(() => {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div className="sticky top-0 z-[5000]">
      <header className="border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="flex h-14 items-center justify-between px-5">
          <Link href="/" onClick={close} className="font-serif text-lg font-bold text-neutral-900">
            Louie Bernstein
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-1"
          >
            <span className={cn("h-0.5 w-6 bg-neutral-900 transition-all duration-200", isOpen && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-6 bg-neutral-900 transition-all duration-200", isOpen && "opacity-0")} />
            <span className={cn("h-0.5 w-6 bg-neutral-900 transition-all duration-200", isOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white shadow-lg">
          <nav className="flex flex-col py-2">
            {navItems.map((item, idx) => {
              if (item.children && item.children.length > 0) {
                const isExpanded = openAccordion === item.name;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenAccordion(isExpanded ? null : item.name)}
                      className="flex w-full items-center justify-between px-5 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </span>
                      <ChevronDown className={cn("h-4 w-4 text-neutral-400 transition-transform duration-200", isExpanded && "rotate-180")} />
                    </button>
                    {isExpanded && (
                      <div className="bg-neutral-50 pb-1">
                        {item.children.map((child, childIdx) => (
                          <Link
                            key={childIdx}
                            href={child.link}
                            onClick={close}
                            className="flex items-center gap-2 py-2.5 pl-10 pr-5 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                          >
                            {child.icon}
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const href = item.link || "/";
              const isHashLink = href.includes("#");

              if (isHashLink) {
                return (
                  <button
                    key={idx}
                    onClick={() => handleHashScroll(href)}
                    className="flex w-full items-center gap-2 px-5 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    {item.icon}
                    {item.name}
                  </button>
                );
              }

              return (
                <Link
                  key={idx}
                  href={href}
                  onClick={close}
                  className="flex items-center gap-2 px-5 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

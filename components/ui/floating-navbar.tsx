"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type NavItem = {
  name: string;
  link?: string;
  icon?: React.ReactElement;
  children?: { name: string; link: string; icon?: React.ReactElement }[];
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-2 items-center justify-center gap-8",
          className
        )}
      >
        {navItems.map((navItem, idx) => {
          const hasDropdown = navItem.children && navItem.children.length > 0;

          if (hasDropdown) {
            return (
              <div
                key={`dropdown-${idx}`}
                className="relative"
                onMouseEnter={() => setOpenDropdown(navItem.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "relative group dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-900 transition-colors px-2 py-1"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:flex items-center gap-1 text-sm">
                    {navItem.name}
                    <ChevronDown className="h-3 w-3" />
                  </span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0966c2] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                </button>

                <AnimatePresence>
                  {openDropdown === navItem.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-1 bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] rounded-xl shadow-lg min-w-[140px]"
                    >
                      {navItem.children!.map((child, childIdx) => (
                        <Link
                          key={`child-${childIdx}`}
                          href={child.link}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.icon}
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <Link
              key={`link-${idx}`}
              href={navItem.link || "/"}
              className={cn(
                "relative group dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-900 transition-colors px-2 py-1"
              )}
              onClick={(e) => {
                if (navItem.link?.startsWith("#")) {
                  e.preventDefault();
                  const element = document.querySelector(navItem.link);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0966c2] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

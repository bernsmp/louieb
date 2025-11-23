"use client";

import React from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-2 items-center justify-center gap-8",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative group dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-900 transition-colors px-2 py-1"
            )}
            onClick={(e) => {
              // Handle anchor links with smooth scroll
              if (navItem.link.startsWith("#")) {
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
            {/* Blue accent line on hover */}
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0966c2] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};


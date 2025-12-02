"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, FileText, Video, Mail, Wrench, BookOpen, GraduationCap } from "lucide-react";

export function FloatingNavWrapper() {
  return (
    <FloatingNav
      navItems={[
        {
          name: "Home",
          link: "/",
          icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Learn",
          icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
          children: [
            {
              name: "Articles",
              link: "/articles",
              icon: <FileText className="h-4 w-4 text-neutral-500 dark:text-white" />,
            },
            {
              name: "Videos",
              link: "/videos",
              icon: <Video className="h-4 w-4 text-neutral-500 dark:text-white" />,
            },
            {
              name: "Newsletter",
              link: "/newsletter",
              icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
            },
            {
              name: "Course",
              link: "/course",
              icon: <GraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
            },
          ],
        },
        {
          name: "Tools",
          link: "/tools",
          icon: <Wrench className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Contact",
          link: "/#contact",
          icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
      ]}
    />
  );
}

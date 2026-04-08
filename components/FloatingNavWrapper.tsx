"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { MobileNav } from "@/components/MobileNav";
import { Home, FileText, Video, Mail, Wrench, BookOpen, GraduationCap, UserCheck, Scale, PenLine, HelpCircle, Layers, Map } from "lucide-react";

export type NavKey = 'home' | 'fsl' | 'learn' | 'faqs' | 'frameworks' | 'tools' | 'sitemap' | 'contact';

export const DEFAULT_NAV_ORDER: NavKey[] = ['home', 'fsl', 'learn', 'faqs', 'frameworks', 'tools', 'sitemap', 'contact'];

export const NAV_ITEM_LABELS: Record<NavKey, string> = {
  home: 'Home',
  fsl: 'Fractional Sales Leader',
  learn: 'Learn',
  faqs: 'FAQs',
  frameworks: 'Frameworks',
  tools: 'Tools',
  sitemap: 'Site Map',
  contact: 'About/Contact',
};

function buildNavItems(order: NavKey[]) {
  const ic = "h-4 w-4 text-neutral-500 dark:text-white";

  type NavItem = {
    name: string;
    link?: string;
    icon?: React.ReactElement;
    children?: { name: string; link: string; icon?: React.ReactElement }[];
  };

  const items: Record<NavKey, NavItem> = {
    home: {
      name: "Home",
      link: "/",
      icon: <Home className={ic} />,
    },
    fsl: {
      name: "Fractional Sales Leader",
      icon: <UserCheck className={ic} />,
      children: [
        { name: "What is FSL?", link: "/fractional-sales-leader", icon: <UserCheck className={ic} /> },
        { name: "FSL vs Consultant", link: "/fractional-sales-leader-vs-consultant", icon: <Scale className={ic} /> },
      ],
    },
    learn: {
      name: "Learn",
      icon: <BookOpen className={ic} />,
      children: [
        { name: "Articles", link: "/articles", icon: <FileText className={ic} /> },
        { name: "Blog", link: "/blog", icon: <PenLine className={ic} /> },
        { name: "Videos", link: "/videos", icon: <Video className={ic} /> },
        { name: "Newsletter", link: "/newsletter", icon: <Mail className={ic} /> },
        { name: "Course", link: "/course", icon: <GraduationCap className={ic} /> },
      ],
    },
    faqs: {
      name: "FAQs",
      link: "/faqs",
      icon: <HelpCircle className={ic} />,
    },
    frameworks: {
      name: "Frameworks",
      icon: <Layers className={ic} />,
      children: [
        { name: "Before You Quit Your Day Job", link: "/entrepreneurs", icon: <Layers className={ic} /> },
        { name: "Staying In The Game", link: "/founders", icon: <Layers className={ic} /> },
      ],
    },
    tools: {
      name: "Tools",
      link: "/tools",
      icon: <Wrench className={ic} />,
    },
    sitemap: {
      name: "Site Map",
      link: "/site-map",
      icon: <Map className={ic} />,
    },
    contact: {
      name: "About/Contact",
      link: "/#about",
      icon: <Mail className={ic} />,
    },
  };

  return order.filter((key) => key in items).map((key) => items[key]);
}

export function FloatingNavWrapper({ navOrder }: { navOrder?: string[] }) {
  const order = (navOrder?.length ? navOrder : DEFAULT_NAV_ORDER) as NavKey[];
  const navItems = buildNavItems(order);
  return (
    <div>
      <div className="md:hidden">
        <MobileNav navItems={navItems} />
      </div>
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
}

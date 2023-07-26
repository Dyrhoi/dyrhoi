"use client";

import { Icons } from "@/components/Icons";
import { IconLink, NavLink } from "@/components/Link";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = debounce(() => {
      setScrolled(window.scrollY > 0);
    }, 50);
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <nav
      className={cn(
        "inset-0 transition-colors sticky h-14 border-b border-b-transparent bg-background/95 backdrop-blur-xl z-50",
        {
          "border-b-border": scrolled,
        }
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link className="flex gap-2" href="/">
            <Icons.logo className="h-6 w-6" />
            <span className="font-semibold text-lg">Dyrhoi</span>
          </Link>
          <ul>
            <li>
              <NavLink href="/posts">Blog</NavLink>
            </li>
          </ul>
        </div>
        <ul className="flex items-center">
          <li>
            <IconLink
              href="https://github.com/dyrhoi"
              rel="noopener noreferrer"
              target="_blank"
              icon={"github"}
            />
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { IconLink } from "@/components/Link";
import MobileNavigation from "@/components/MobileNavigation";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = debounce(
      () => {
        setScrolled(window.scrollY > 0);
      },
      100,
      { leading: true }
    );
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
        <Navigation className="md:block hidden" />
        <MobileNavigation className="block md:hidden" />
        <TooltipProvider>
          <ul className="flex items-center">
            <li>
              <Tooltip>
                <TooltipTrigger>
                  <IconLink
                    href="https://github.com/dyrhoi"
                    rel="noopener noreferrer"
                    target="_blank"
                    icon={"github"}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </TooltipProvider>
      </div>
    </nav>
  );
}

"use client";

import { Icons } from "@/components/Icons";
import { NavLink } from "@/components/Link";
import Link from "next/link";
export default function Navigation({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <div className="flex items-center gap-8">
        <Link className="flex gap-2 items-center" aria-label="Home" href="/">
          <Icons.logo className="h-6 w-6" />
          <span className="font-semibold text-lg">Dyrhoi</span>
        </Link>
        <ul>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

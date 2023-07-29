import { Icons } from "@/components/Icons";
import { NavLink } from "@/components/Link";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight, ScrollText } from "lucide-react";

export default function MobileNavigation({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} className="p-2">
              <AlignRight />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-w-[560px] w-full">
            <SheetHeader>
              <SheetTitle>
                <span className="flex gap-2 text-muted-foreground items-center">
                  <Icons.logo className="h-5 w-5" />
                  <span className="font-semibold">Dyrhoi</span>
                </span>
              </SheetTitle>
              <SheetDescription className="text-2xl py-8">
                <ul className="[&>li]:border-b [&>li]:border-b-border [&>li>a]:flex [&>li>a]:justify-center [&>li]:w-full flex flex-col items-center gap-8">
                  <li>
                    <NavLink className="flex gap-2 items-center" href="/">
                      <Icons.logo className="h-[1.2em] w-[1.2em]" />
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="flex gap-2 items-center" href="/blog">
                      <ScrollText className="h-[1.2em] w-[1.2em]" />
                      <span>Blog</span>
                    </NavLink>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

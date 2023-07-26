"use client";
import { Icons, LucideIconProps } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  LinkProps & { children: React.ReactNode; exact?: boolean };

function NavLink({ href, className, children, exact: _exact, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const exact = _exact ?? true;
  const active =
    pathname === href.toString() || (!exact && pathname.startsWith(href.toString()));
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "transition-colors font-semibold text-foreground/60 hover:text-foreground/80",
        className,
        {
          "text-foreground": !!active,
        }
      )}
    >
      {children}
    </Link>
  );
}

type IconLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    icon: LucideIconProps["name"];
    iconClassName?: string;
  };

function IconLink({
  href,
  icon,
  className,
  iconClassName,
  children,
  ...props
}: IconLinkProps) {
  return (
    <Link href={href} {...props} className={cn("", className)}>
      <Button variant="ghost" className="h-9 w-9 p-1.5">
        <Icons.LucideIcon className={cn("", iconClassName)} name={icon} />
      </Button>
    </Link>
  );
}

export { IconLink, NavLink };

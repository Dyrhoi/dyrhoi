import { Icons, LucideIconProps } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface GridWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function BentoGridWrapper({ children, className }: GridWrapperProps) {
  return (
    <div className={cn("grid auto-rows-[12rem] grid-cols-2 gap-10", className)}>
      {children}
    </div>
  );
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  span: {
    col: number;
    row: number;
  };
}
function BentoGridItem({ children, span, className }: GridItemProps) {
  return (
    <div
      className={cn(
        "bg-muted/20 border-border border rounded-lg p-12 overflow-hidden relative flex flex-col gap-4 justify-end",
        className
      )}
      style={{ gridColumn: `span ${span.col}`, gridRow: `span ${span.row}` }}
    >
      {children}
    </div>
  );
}

interface GridItemIcon extends React.HTMLAttributes<SVGElement> {
  name: LucideIconProps["name"];
  iconClassName?: string;
}
function BentoGridItemIcon({ name, className, iconClassName }: GridItemIcon) {
  return (
    <div
      className={cn(
        "text-zinc-200 shrink-0 relative bg-gradient-to-t from-zinc-200/20 to-zinc-200/0 h-12 w-12 text-base border-current border rounded-lg flex items-center justify-center",
        className
      )}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30em] h-[30em] blur-3xl bg-current rounded-full opacity-5" />
      <Icons.LucideIcon
        name={name}
        className={cn("text-current h-[1.7em] w-[1.7em]", iconClassName)}
      />
    </div>
  );
}

export { BentoGridWrapper, BentoGridItem, BentoGridItemIcon };

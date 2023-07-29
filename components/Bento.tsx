import { Icons, LucideIconProps } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface GridWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function BentoGridWrapper({ children, className }: GridWrapperProps) {
  return (
    <div className={cn("grid relative auto-rows-[12rem] grid-cols-2 gap-10", className)}>
      {children}
    </div>
  );
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  span: {
    col: number;
    row: number;
  };
  direction?: "horizontal" | "vertical";
}
function BentoGridItem({ children, span, className, direction: _direction }: GridItemProps) {
  const direction = _direction ?? "horizontal";
  return (
    <div
      className={cn(
        { "flex-col justify-end gap-4": direction === "vertical" },
        { "flex-row justify-between items-center": direction === "horizontal" },
        "dark:bg-muted/80 bg-muted/60 backdrop-blur-3xl border-border border rounded-lg p-12 overflow-hidden relative flex",
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

interface GridItemContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function BentoGridItemContent({ children, className }: GridItemContentProps) {
  return <div className={cn("flex flex-col gap-2 justify-center", className)}>{children}</div>;
}

export { BentoGridItem, BentoGridItemContent, BentoGridItemIcon, BentoGridWrapper };

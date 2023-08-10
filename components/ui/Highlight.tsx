import { cn } from "@/lib/utils";

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}
export const Highlight = ({ children, className, ...props }: HighlightProps) => {
  return (
    <span className={cn("text-foreground", className)} {...props}>
      {children}
    </span>
  );
};

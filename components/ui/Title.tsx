import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const titleVariants = cva("", {
  variants: {
    tag: {
      h1: "text-5xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-xl font-bold",
      h4: "text-lg font-bold",
      h5: "text-base font-bold",
    },
  },
  defaultVariants: {
    tag: "h2",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, tag, asChild = false, children, ...props }, ref) => {
    // Not sure what to do here...
    const Tag = (tag as any) || "h2";
    return (
      <Tag {...props} ref={ref} className={cn(titleVariants({ tag, className }))}>
        {children}
      </Tag>
    );
  }
);
Title.displayName = "Title";

export { Title, titleVariants };

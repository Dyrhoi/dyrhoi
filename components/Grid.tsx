"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface GridWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function GridWrapper({ children, className }: GridWrapperProps) {
  const columns = React.Children.count(children);
  const [inViewRef, inView] = useInView({
    rootMargin: "0px 0px -40% 0px",
  });
  return (
    <div className="relative" ref={inViewRef}>
      <div
        className={cn(
          `grid [&>*]:p-12 items-center relative justify-items-stretch grid-cols-1 md:grid-cols-${columns}`,
          className
        )}
      >
        {children}
      </div>
      <div className="absolute flex justify-between md:flex-row flex-col h-full w-full inset-0 pointer-events-none">
        {[...Array(columns + 1).keys()].map((_, i) => (
          <div
            key={i}
            className={cn(
              "md:w-[1px] left-0 md:h-full md:from-foreground/10 md:to-foreground/0 md:even:bg-gradient-to-b md:odd:bg-gradient-to-t md:relative group",
              "even:bg-gradient-to-l from-foreground/10 to-foreground/10 w-full h-[1px]"
            )}
          >
            <motion.div
              // Could I use motions viewport observer here?
              // Probably... but setting the root is very buggy for some reason...
              animate={{ y: inView ? 0 : i % 2 == 0 ? 40 : -40, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "absolute md:group-odd:top-1/4 md:group-even:bottom-1/4 md:h-8 md:w-[1px] bg-foreground/40",
                "hidden md:block"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { GridWrapper };

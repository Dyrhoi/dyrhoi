"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface GridWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function GridWrapper({ children, className }: GridWrapperProps) {
  const columns = React.Children.count(children);
  const [inViewRef, inView] = useInView({
    rootMargin: "0px 0px -40% 0px",
  }); // Add this line
  return (
    <div className="relative" ref={inViewRef}>
      <div
        className={cn(
          "grid [&>*]:p-12 items-center relative justify-items-stretch",
          className
        )}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {children}
      </div>
      <div className="absolute flex justify-between h-full w-full inset-0 pointer-events-none">
        {[...Array(columns + 1).keys()].map((_, i) => (
          <div
            key={i}
            className="w-[1px] h-full from-foreground/10 to-foreground/0 even:bg-gradient-to-b odd:bg-gradient-to-t relative group"
          >
            <motion.div
              // Could I use motions viewport observer here?
              // Probably... but setting the root is very buggy for some reason...
              animate={{ y: inView ? 0 : i % 2 == 0 ? 40 : -40, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute group-odd:top-1/4 group-even:bottom-1/4 h-8 w-[1px] bg-foreground/40"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { GridWrapper };

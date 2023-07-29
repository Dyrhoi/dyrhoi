"use client";

import { motion } from "framer-motion";
import React from "react";
import { InView, IntersectionOptions, useInView } from "react-intersection-observer";

export interface FadeInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  intersectOptions?: IntersectionOptions;
}

export function FadeIn({
  direction: _direction,
  children,
  intersectOptions: _intersectOptions,
}: FadeInProps) {
  const direction = _direction ?? "up";
  const y = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const x = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  const intersectOptions: FadeInProps["intersectOptions"] = Object.assign(
    _intersectOptions ?? {},
    {
      threshold: 0.5,
      rootMargin: "20% 0px -20% 0px",
    } satisfies FadeInProps["intersectOptions"]
  );
  return (
    <InView {...intersectOptions}>
      {({ inView, ref }) => (
        // Wrapper to fix transition out / intersection mismatch.
        <div ref={ref}>
          <motion.div
            animate={{
              opacity: inView ? 1 : 0,
              translateX: inView ? 0 : x,
              translateY: inView ? 0 : y,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </InView>
  );
}

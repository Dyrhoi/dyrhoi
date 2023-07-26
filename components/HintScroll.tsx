"use client";

import { Mouse } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function HintScroll({ className }: { className?: string }) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHint(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <motion.div
      className={cn({ "opacity-100": showHint, "opacity-0": !showHint }, "transition-opacity")}
      animate={{
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 1.5, delay: 3 },
      }}
    >
      <Mouse className={cn(className)} />
    </motion.div>
  );
}

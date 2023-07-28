"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HintScroll({ className }: { className?: string }) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHint(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToNextSection = () => {
    const currentSection = document.querySelector("section") as HTMLElement;
    const nextSection = currentSection?.nextElementSibling as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={cn({ "opacity-100": showHint, "opacity-0": !showHint }, "transition-opacity")}
      animate={{
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 1.5, delay: 3 },
      }}
    >
      <Button variant={"ghost"} onClick={scrollToNextSection}>
        <ChevronDown className={cn(className)} />
      </Button>
    </motion.div>
  );
}

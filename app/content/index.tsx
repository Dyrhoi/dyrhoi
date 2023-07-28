import { GridItemProps } from "@/components/Bento";
import { LucideIconProps } from "@/components/Icons";
import { Layout, Microscope, Sparkles } from "lucide-react";

export const prefaceGridItems = [
  {
    icon: <Layout />,
    title: "Front-end Enthusiast.",
    description: "Bringing visions to life on the canvas.",
  },
  {
    icon: <Microscope />,
    title: "Embracing Static Typing.",
    description: "Static type languages are my go-to for getting things done efficiently.",
  },
  {
    icon: <Sparkles />,
    title: "Passionate Hobbyist.",
    description:
      "Viewing work as a joyful hobby, I bring passion to each project, making it an exciting creative journey.",
  },
] as const;

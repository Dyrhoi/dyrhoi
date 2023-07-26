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

export const bentoGridItems: {
  title: string;
  description: string;
  span: GridItemProps["span"];
  direction: GridItemProps["direction"];
  icon?: { name: LucideIconProps["name"]; className?: string };
  className?: string;
}[] = [
  {
    title: "Full Stack Developer",
    description:
      "Versatile in both front-end and back-end technologies, delivering end-to-end solutions with a user-centric approach.",
    span: { col: 1, row: 1 },
    direction: "horizontal",
  },
  {
    title: "Consultant",
    description:
      "Adaptable consultant with technical expertise, providing valuable insights and driving success through effective communication.",
    span: { col: 1, row: 2 },
    icon: {
      name: "helping-hand",
      className: "text-emerald-600 dark:text-emerald:400 from-emerald-400/10 to-emerald-400/0",
    },
    direction: "vertical",
    className: "dark:border-emerald-100/20 border-emerald-200",
  },
  {
    title: "Keeping up with the Stack",
    description:
      "Constantly updating skills with the latest tools and frameworks to ensure efficient and cutting-edge development.",
    span: { col: 1, row: 2 },
    icon: {
      name: "package-plus",
      className: "text-amber-600 dark:text-amber-400 from-amber-400/10 to-amber-400/0",
    },
    direction: "vertical",
    className: "dark:border-amber-100/20 border-amber-200",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: { col: 1, row: 1 },
    direction: "horizontal",
    className:
      "bg-gradient-to-bl from-indigo-100/90 dark:from-indigo-950/90 border-indigo-200 dark:border-indigo-700",
  },
  {
    title: "Lorem Ipsum 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: { col: 2, row: 1 },
    direction: "horizontal",
  },
];

import { GridWrapper } from "@/components/Grid";
import { Title } from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import { Layout, Microscope, Sparkles } from "lucide-react";

export default function Preface() {
  const prefaceGridItems = [
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
  return (
    <section className="py-24 pb-36">
      <div className="container relative">
        <GridWrapper>
          {prefaceGridItems.map((item, i) => (
            <div
              key={item.title}
              // Jesus...
              // Looks pretty cool tho...
              className={cn(
                "h-full flex flex-col justify-center relative z-0",
                "after:absolute after:pointer-events-none after:inset-0 after:w-full after:h-full",
                "after:opacity-0 hover:after:opacity-100 after:transition-opacity",
                "dark:after:from-indigo-100/5 dark:after:via-indigo-100/0 after:from-foreground/10 after:via-foreground/0",
                { "after:bg-gradient-to-t": i % 2 === 0 },
                { "after:bg-gradient-to-b": i % 2 !== 0 }
              )}
            >
              <Title tag="h5" className="text-muted-foreground font-normal relative z-10">
                <span className="text-foreground">
                  <span className="[&>svg]:inline-block [&>svg]:h-[1em] [&>svg]:w-[1em] [&>svg]:mb-0.5">
                    {item.icon}
                  </span>{" "}
                  {item.title}{" "}
                </span>
                {item.description}
              </Title>
            </div>
          ))}
        </GridWrapper>
      </div>
    </section>
  );
}

"use client";

import { Icons } from "@/components/Icons";
import BlurBall from "@/components/ui/BlurBall";
import { Button } from "@/components/ui/Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";
import { Title } from "@/components/ui/Title";
import { HoverCardPortal } from "@radix-ui/react-hover-card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function CompanyCollaborations() {
  const companies = [
    {
      name: "Process Factory",
      icon: Icons.processFactory,
      description:
        "Process Factory is a strategic IT development partner with expertise in the Nordic market and the insurance industry.",
      link: "https://processfactory.dk/",
    },
    {
      name: "Gjensidige",
      icon: Icons.gjensidige,
      description:
        "Gjensidige is a leading Nordic insurance company with over 4000 employees.",
      link: "https://www.gjensidige.no/",
    },
  ];
  const [inViewRef, inView] = useInView({
    rootMargin: "0px 0px -20% 0px",
  }); // Add this line
  return (
    <section
      ref={inViewRef}
      className="container border-t mb-48 border-border rounded-xl relative overflow-hidden pt-24 bg-gradient-to-b from-muted/5 to-muted/0"
    >
      <motion.div
        animate={{ opacity: inView ? 1 : 0, translateY: inView ? "-8rem" : "-14rem" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <BlurBall
          className="bg-foreground/5 !top-0"
          size={{ height: "150px", width: "350px" }}
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-12">
        <Title tag="h5" className="text-muted-foreground font-semibold">
          Having worked with <span className="text-foreground">great</span> people.
        </Title>
        <div className="brightness-0 dark:invert filter flex items-center flex-wrap gap-12">
          {companies.map((company) => (
            <HoverCard key={company.name} openDelay={200} closeDelay={200}>
              <HoverCardTrigger className="py-4">
                <company.icon className="h-12 w-auto hover:opacity-100 opacity-80 transition-opacity" />
              </HoverCardTrigger>
              <HoverCardPortal>
                <HoverCardContent className="flex md:flex-row flex-col md:items-center md:max-w-lg md:w-full gap-4">
                  <div className="flex-shrink-0">
                    <p className="text-foreground text-nowrap text-lg">{company.name}</p>
                    <a href={company.link} target="_blank" referrerPolicy="no-referrer">
                      <Button
                        variant={"link"}
                        className="pl-0 pb-0 flex items-baseline text-sm gap-1"
                      >
                        Visit website <ExternalLink className="h-[1.2em] w-[1.2em]" />
                      </Button>
                    </a>
                  </div>
                  <p className="text-muted-foreground">{company.description}</p>
                </HoverCardContent>
              </HoverCardPortal>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Icons } from "@/components/Icons";
import BlurBall from "@/components/ui/BlurBall";
import { Title } from "@/components/ui/Title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CompanyCollaborations() {
  const companies = [
    {
      name: "Process Factory",
      icon: Icons.processFactory,
    },
    { name: "Gjensidige", icon: Icons.gjensidige },
  ];
  const [inViewRef, inView] = useInView({
    rootMargin: "0px 0px -20% 0px",
  }); // Add this line
  return (
    <section
      ref={inViewRef}
      className="container mb-48 border-t border-border rounded-xl relative overflow-hidden pt-24 bg-gradient-to-b from-muted/5 to-muted/0"
    >
      <motion.div
        animate={{ opacity: inView ? 1 : 0, translateY: inView ? "-10rem" : "-14rem" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <BlurBall
          className="bg-foreground/5 !top-0"
          size={{ height: "300px", width: "300px" }}
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-12">
        <Title tag="h5" className="text-muted-foreground font-semibold">
          Ongoing Collaborations with Scandinavian Companies
        </Title>
        <div className="brightness-0 dark:invert filter flex items-center flex-wrap gap-12 [&>*]:opacity-70 [&>*]:transition-opacity">
          {companies.map((company) => (
            <company.icon key={company.name} className="h-12 w-auto hover:opacity-100" />
          ))}
        </div>
      </div>
    </section>
  );
}

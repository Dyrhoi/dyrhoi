"use client";

import { FadeIn } from "@/components/Animation";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import dayjs from "dayjs";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <section className="py-48 border-b border-border relative z-10">
        <div className="container flex flex-col items-center gap-8 justify-center text-center">
          <div>
            <Title className="">Want to get in touch?</Title>
            <p className="text-muted-foreground">
              Feel free to reach out <span className="text-foreground">any time</span>.
            </p>
          </div>
          <a href="mailto:hello@dyrhoi.com">
            <Button variant={"default"}>Contact</Button>
          </a>
        </div>
        <div className="absolute position-center w-full rotate-180 select-none pointer-events-none blur-sm opacity-10 !bottom-0">
          <div className="[mask-image:linear-gradient(0deg,black,transparent)]">
            <div className="container flex flex-col items-center gap-8 justify-center ">
              <FadeIn>
                <Button variant={"default"}>Contact</Button>
              </FadeIn>
            </div>
          </div>
        </div>
        <InView threshold={1}>
          {({ ref, inView }) => (
            <div ref={ref}>
              <motion.div
                animate={{ opacity: inView ? 1 : 0 }}
                className="absolute pointer-events-none select-none inset-x-0 h-[37.5rem] bg-grid-slate-900/[0.07] bg-bottom [mask-image:linear-gradient(0deg,black,transparent)] dark:bg-grid-slate-100/[0.02] dark:bg-[center_bottom_-1px] dark:border-t dark:border-slate-100/5 bottom-0"
              />
            </div>
          )}
        </InView>
      </section>
      <footer className="py-8">
        <div className="container flex justify-between items-center">
          <Link href="/">
            <Icons.logo className="h-6 w-6" />
          </Link>
          <span className="text-muted-foreground text-sm">{dayjs().year()}</span>
        </div>
      </footer>
    </>
  );
}

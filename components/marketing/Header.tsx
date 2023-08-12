import GitFeed from "@/components/GitFeed";
import HintScroll from "@/components/HintScroll";
import { Illustration } from "@/components/Illustration";
import Twemoji from "@/components/Twemoji";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";
import { Title } from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import { Github, MoveRight } from "lucide-react";
import Link from "next/link";

export default async function Header() {
  return (
    <section className="flex flex-col md:h-screen md:max-h-[950px] justify-center pt-[15vh] md:pt-0 pb-[15vh] relative">
      <div className="max-w-6xl container w-full flex flex-col md:flex-row flex-1 justify-between gap-16">
        <div className="max-w-2xl flex items-center mx-auto md:mx-0">
          <div className="space-y-6 text-center md:text-left">
            <div>
              <Badge variant="outline" className="text-sm font-normal gap-2">
                Consulting @ Process Factory
              </Badge>
            </div>
            <Title tag="h1" className="text-5xl text-balance">
              Hi <Twemoji emoji="👋" />, I&apos;m Dyrhoi.
            </Title>
            <p className="text-muted-foreground text-xl">
              A software engineer from Denmark <Twemoji emoji="🇩🇰" />
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="mailto:hello@dyrhoi.com">
                <Button className="flex gap-2">Contact</Button>
              </a>
              <Link href="/blog">
                <Button variant={"ghost"} className="flex gap-2 items-center">
                  Blog <MoveRight className="h-[1.2em] w-[1.2em]" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="items-center relative flex">
          <Illustration.marketingGrid
            className={cn(
              "[mask-image:radial-gradient(circle,black_0%,transparent_70%)] position-center absolute z-0 pointer-events-none select-none",
              "md:h-[40rem] md:w-[40rem]"
            )}
          />
          <Card className="z-10 relative max-w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Feed <Github />
              </CardTitle>
              <CardDescription>Keep track of what&apos;s going on.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="md:h-[50vh] max-w-full md:w-full pr-4">
                <ScrollBar className="md:hidden" orientation="horizontal" />
                <GitFeed username="dyrhoi" />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="container flex justify-center">
        <HintScroll className="hidden md:block text-muted-foreground" />
      </div>
    </section>
  );
}

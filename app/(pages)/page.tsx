import { BentoGridItem, BentoGridItemIcon, BentoGridWrapper } from "@/components/Bento";
import { Icons } from "@/components/Icons";
import Twemoji from "@/components/Twemoji";
import { Badge } from "@/components/ui/Badge";
import { Title } from "@/components/ui/Title";
import { HelpingHand } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:h-screen md:max-h-[950px] justify-center pb-[20vh]">
        <div className="max-w-6xl container w-full flex flex-1">
          <div className="max-w-2xl flex items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="text-sm font-normal gap-2">
                  Consulting @ Process Factory
                </Badge>
              </div>
              <Title tag="h1" className="text-5xl text-balance">
                Hi <Twemoji emoji="👋" />, I&apos;m Dyrhoi.
              </Title>
              <p className="text-muted-foreground text-2xl">
                A software engineer from Denmark <Twemoji emoji="🇩🇰" />
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="container space-y-8">
          <Title tag="h2">Ongoing Collaborations with Scandinavian Companies</Title>
          <div className="brightness-0 dark:invert filter flex items-center flex-wrap gap-12">
            <Icons.gjensidige className="h-12 w-auto" />
            <Icons.skat className="h-12 w-auto" />
          </div>
        </div>
      </section>
      <section>
        <BentoGridWrapper className="h-screen container">
          <BentoGridItem className="justify-center" span={{ col: 1, row: 1 }}>
            <Title tag={"h3"}>Full Stack Developer</Title>
            <p className="text-muted-foreground">
              Versatile in both front-end and back-end technologies, delivering end-to-end
              solutions with a user-centric approach.
            </p>
          </BentoGridItem>
          <BentoGridItem className="" span={{ col: 1, row: 2 }}>
            <div className="absolute top-0"></div>
            <BentoGridItemIcon
              className="text-emerald-400 from-emerald-400/10 to-emerald-400/0"
              name="helping-hand"
            />
            <Title tag={"h3"}>Consultant</Title>
            <p className="text-muted-foreground">
              Adaptable consultant with technical expertise, providing valuable insights and
              driving success through effective communication.
            </p>
          </BentoGridItem>
          <BentoGridItem className="" span={{ col: 1, row: 2 }}>
            <BentoGridItemIcon
              className="text-red-400 from-red-400/10 to-red-400/0"
              name="code"
            />
            <Title tag={"h3"}>Keeping up with the Stack</Title>
            <p className="text-muted-foreground">
              Constantly updating skills with the latest tools and frameworks to ensure
              efficient and cutting-edge development.
            </p>
          </BentoGridItem>
          <BentoGridItem className="justify-center" span={{ col: 1, row: 1 }}>
            <Title tag={"h3"}>CS Major Graduate</Title>
            <p className="text-muted-foreground">
              Equipped with a strong foundation in Computer Science, employing analytical
              problem-solving skills in every project.
            </p>
          </BentoGridItem>
          <BentoGridItem className="justify-center" span={{ col: 2, row: 1 }}>
            <BentoGridItemIcon
              className="text-red-400 from-red-400/10 to-red-400/0"
              name="code"
            />
            <div>
              <Title tag={"h3"}>Eager to Learn</Title>
              <p className="text-muted-foreground">
                A relentless learner, embracing new technologies to stay at the forefront of
                software development.
              </p>
            </div>
          </BentoGridItem>
        </BentoGridWrapper>
      </section>
    </main>
  );
}

import { bentoGridItems, prefaceGridItems } from "@/app/content";
import {
  BentoGridItem,
  BentoGridItemContent,
  BentoGridItemIcon,
  BentoGridWrapper,
} from "@/components/Bento";
import { GridWrapper } from "@/components/Grid";
import HintScroll from "@/components/HintScroll";
import Twemoji from "@/components/Twemoji";
import CompanyCollaborations from "@/components/pages/home/CompanyCollaborations";
import { Badge } from "@/components/ui/Badge";
import { Title } from "@/components/ui/Title";

export default function Home() {
  return (
    <main>
      <Header />
      <CompanyCollaborations />
      <Preface />
      <BentoGrid />
    </main>
  );
}

function Header() {
  return (
    <section className="flex flex-col md:h-screen md:max-h-[950px] justify-center pt-[15vh] md:pt-0 pb-[15vh]">
      <div className="max-w-6xl container w-full flex flex-col md:flex-row flex-1">
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
            <p className="text-muted-foreground text-2xl">
              A software engineer from Denmark <Twemoji emoji="🇩🇰" />
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="container flex justify-center">
        <HintScroll className="hidden md:block text-muted-foreground" />
      </div>
    </section>
  );
}

function Preface() {
  return (
    <section className="py-24 ">
      <div className="container relative">
        <GridWrapper>
          {prefaceGridItems.map((item) => (
            <div key={item.title}>
              <Title tag="h5" className="text-muted-foreground font-normal">
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

function BentoGrid() {
  return (
    <section className="py-48 relative">
      <div>
        <div className="absolute position-center !top-0 "></div>
      </div>
      <BentoGridWrapper className="container relative z-10 ">
        {bentoGridItems.map((item) => (
          <BentoGridItem
            key={item.title}
            direction={item.direction}
            span={item.span}
            className={item.className}
          >
            {item.icon && (
              <BentoGridItemIcon name={item.icon.name} className={item.icon.className} />
            )}
            <BentoGridItemContent>
              <Title tag={"h3"}>{item.title}</Title>
              <p className="text-muted-foreground">{item.description}</p>
            </BentoGridItemContent>
          </BentoGridItem>
        ))}
      </BentoGridWrapper>
    </section>
  );
}

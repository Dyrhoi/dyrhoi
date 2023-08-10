import HintScroll from "@/components/HintScroll";
import Twemoji from "@/components/Twemoji";
import { Badge } from "@/components/ui/Badge";
import { Title } from "@/components/ui/Title";

export default function Header() {
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

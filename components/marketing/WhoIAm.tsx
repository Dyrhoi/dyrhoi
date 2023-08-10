import { FadeIn } from "@/components/Animation";
import Twemoji from "@/components/Twemoji";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Highlight } from "@/components/ui/Highlight";
import { Title } from "@/components/ui/Title";
import dayjs from "dayjs";

export default function WhoIAm() {
  return (
    <section className="py-48">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-24 items-center justify-between">
          <div className="space-y-4 text-center lg:text-left">
            <Title tag="h2" className="max-w-md">
              So who am I?
            </Title>
            <p className="text-muted-foreground text-lg">
              Just another software engineer..? Yes.
            </p>
          </div>
          <div className="flex-1 max-w-2xl">
            <FadeIn>
              <Card>
                <CardHeader>
                  <div className="space-y-6">
                    <Badge variant={"outline"} className="gap-2 py-1">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          className="bg-muted"
                          src="/assets/images/picture-of-me.png"
                        />
                        <AvatarFallback>DY</AvatarFallback>
                      </Avatar>
                      <p>Dyrhoi</p>
                    </Badge>
                    <CardTitle className="text-foreground/90">Hey there!</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I&apos;m a {dayjs().diff(dayjs("1998-05-17"), "years")}-year-old{" "}
                    <Highlight>software engineer</Highlight> from Denmark.
                    <br />
                    <br />I have a passion for <Highlight>front-end engineering</Highlight>. I{" "}
                    <Twemoji emoji="❤️" /> <Highlight>static typed languages</Highlight>,
                    especially <Highlight>TypeScript</Highlight>.
                    <br />
                    I have many front-end frameworks on my horizon, but I mainly work with
                    React.
                    <br /> <br />
                    In my day-to-day, I help{" "}
                    <Highlight>building, maintaining, and consulting</Highlight> for a wide
                    range of insurance companies in the northern part of the world.
                    <br /> <br />
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

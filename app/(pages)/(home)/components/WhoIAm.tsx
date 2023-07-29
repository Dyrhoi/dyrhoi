import { FadeIn } from "@/components/Animation";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Title } from "@/components/ui/Title";
import Image from "next/image";

export default function WhoIAm() {
  return (
    <section className="py-48">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="space-y-4">
            <Title tag="h2" className="max-w-md">
              Your average software engineer.
            </Title>
            <p className="text-muted-foreground text-lg">
              Well... that sounds a bit boring. But it&apos;s mostly true.{" "}
            </p>
          </div>
          <div className="flex-1">
            <FadeIn>
              <Card>
                <CardHeader>
                  <div className="space-y-6">
                    <Badge variant={"outline"} className="gap-2 py-1">
                      <Image
                        src="/assets/images/picture-of-me.png"
                        alt="Image of Dyrhoi"
                        height={32}
                        width={32}
                        className="rounded-full"
                      />
                      <p>Dyrhoi</p>
                    </Badge>
                    <CardTitle className="text-foreground/90">
                      Taking pride in my work.
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I do, however, take pride in my work.
                    <br />
                    <br />
                    While it might be tempting to think of myself as just your &quot;
                    <span className="text-foreground italic">average</span>&quot; software
                    engineer, I believe that my{" "}
                    <span className="text-foreground">passion</span>,{" "}
                    <span className="text-foreground">dedication</span>, and commitment to{" "}
                    <span className="text-foreground">quality</span> set me apart.
                    <br />
                    <br />I am genuinely <span className="text-foreground">excited</span> to
                    bring my <span className="text-foreground">expertise</span> and{" "}
                    <span className="text-foreground">enthusiasm</span> to the table, always
                    eager to embark on new and exciting projects that challenge and inspire me.
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

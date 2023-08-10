import { CompanyCollaborations, Header, Preface, WhoIAm } from "@/components/marketing";
import { Title } from "@/components/ui/Title";

export default function Home() {
  return (
    <main>
      <Header />
      <CompanyCollaborations />
      <Preface />
      <WhoIAm />
      <section className="py-48">
        <div className="container max-w-xl space-y-8 ">
          <Title tag={"h2"} className="text-center">
            A cute Title
          </Title>
          <p className="text-muted-foreground">
            While it might be tempting to think of myself as just your &quot;
            <span className="text-foreground italic">average</span>&quot; software engineer, I
            believe that my <span className="text-foreground">passion</span>,{" "}
            <span className="text-foreground">dedication</span>, and commitment to{" "}
            <span className="text-foreground">quality</span> set me apart.
            <br />
            <br />I am genuinely <span className="text-foreground">excited</span> to bring my{" "}
            <span className="text-foreground">expertise</span> and{" "}
            <span className="text-foreground">enthusiasm</span> to the table, always eager to
            embark on new and exciting projects that challenge and inspire me.
          </p>
        </div>
      </section>
    </main>
  );
}

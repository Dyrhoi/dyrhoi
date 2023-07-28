import {
  BentoGrid,
  CompanyCollaborations,
  Header,
  Preface,
  WhoIAm,
} from "@/app/(pages)/components";

export default function Home() {
  return (
    <main>
      <Header />
      <CompanyCollaborations />
      <Preface />
      <WhoIAm />
      <BentoGrid />
    </main>
  );
}

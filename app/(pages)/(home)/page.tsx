import {
  CompanyCollaborations,
  Header,
  Preface,
  WhoIAm,
} from "@/app/(pages)/(home)/components";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <CompanyCollaborations />
      <Preface />
      <WhoIAm />
    </main>
  );
}

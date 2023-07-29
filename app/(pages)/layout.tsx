import Navigation from "@/components/Navigation";
import SiteHeader from "@/components/SiteHeader";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}

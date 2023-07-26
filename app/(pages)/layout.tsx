import Navigation from "@/components/Navigation";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

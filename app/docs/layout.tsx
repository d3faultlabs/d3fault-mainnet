import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "D3FAULT Documentation",
  description: "Complete documentation for D3FAULT - non-custodial privacy-preserving DEX on Solana",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      <FooterSection />
    </>
  );
}

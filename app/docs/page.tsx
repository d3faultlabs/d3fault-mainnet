import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const docSections = [
  {
    title: "Overview",
    description: "Learn what D3FAULT is and how it works",
    href: "/docs/overview",
  },
  {
    title: "Privacy Model",
    description: "Understand D3FAULT's identity-separation approach",
    href: "/docs/privacy-model",
  },
  {
    title: "Browser Wallet",
    description: "How to generate, import, and manage wallets",
    href: "/docs/wallet",
  },
  {
    title: "Private Swaps",
    description: "Complete guide to private swap transactions",
    href: "/docs/swaps",
  },
  {
    title: "Claim Link Transfers",
    description: "Send tokens privately using claim links",
    href: "/docs/transfers",
  },
  {
    title: "On-Chain Program",
    description: "Technical details of the D3FAULT program",
    href: "/docs/program",
  },
  {
    title: "Relayer",
    description: "How the withdrawal relayer works",
    href: "/docs/relayer",
  },
  {
    title: "Fees",
    description: "Breakdown of fees across all D3FAULT operations",
    href: "/docs/fees",
  },
  {
    title: "Networks",
    description: "Devnet testing and Mainnet deployment",
    href: "/docs/networks",
  },
  {
    title: "Security",
    description: "Encryption, validation, and security practices",
    href: "/docs/security",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-display tracking-tight mb-6">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Complete guide to D3FAULT's privacy-preserving DEX on Solana. Learn how to swap privately, send crypto via claim links, and understand the cryptographic foundations.
          </p>
        </div>

        {/* Doc Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {docSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group"
            >
              <Card className="h-full border border-foreground/10 hover:border-foreground/30 transition-all duration-300 cursor-pointer hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="group-hover:text-foreground/80 transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="border-t border-foreground/10 pt-12">
          <h2 className="text-2xl font-display mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-foreground/10">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/docs/overview" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  • What is D3FAULT?
                </Link>
                <Link href="/docs/wallet" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  • Create your first wallet
                </Link>
                <Link href="/docs/networks" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  • Set up Devnet for testing
                </Link>
              </CardContent>
            </Card>
            <Card className="border border-foreground/10">
              <CardHeader>
                <CardTitle>For Developers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/docs/program" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  • On-chain program details
                </Link>
                <Link href="/docs/relayer" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  • Relayer API & validation
                </Link>
                <Link href="/docs/security" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  • Cryptographic verification
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

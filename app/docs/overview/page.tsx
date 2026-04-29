import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Overview - D3FAULT Documentation",
  description: "Learn what D3FAULT is and its core features",
};

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <Link href="/docs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Documentation
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-display tracking-tight mb-6">Overview</h1>
          <p className="text-xl text-foreground/70">
            D3FAULT is a non-custodial, privacy-preserving decentralized exchange built on Solana.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What is D3FAULT */}
          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">What is D3FAULT?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                D3FAULT combines Jupiter's swap aggregation, Jito's MEV-protected bundle relay, and a custom on-chain commitment-nullifier program to give traders identity privacy that is mathematically verifiable — not just promised.
              </p>
              <p className="text-foreground/70">
                <strong>No accounts. No email. No KYC.</strong> Your wallet is your identity. Your trades stay yours.
              </p>
            </CardContent>
          </Card>

          {/* Core Features */}
          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Core Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Private Swaps</h3>
                <p className="text-foreground/70">
                  Every swap uses a one-time throwaway wallet generated in your browser. Your main wallet never signs the swap transaction, hiding your identity on-chain while using Jupiter's best rates and Jito's MEV protection on mainnet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Private Transfers</h3>
                <p className="text-foreground/70">
                  Send SOL or any SPL token via secure claim links. Using commitment-nullifier cryptography, the sender and receiver identities are both hidden on-chain. Only the recipient can claim with a secret that never touches our servers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Browser-Based Wallet</h3>
                <p className="text-foreground/70">
                  Generate secure wallets with AES-256-GCM encryption, import existing wallets, or use external wallets like Phantom, Solflare, and Backpack. No extension, no installation, no account required.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Non-Custodial</h3>
                <p className="text-foreground/70">
                  You always control your private keys. Seeds are encrypted locally and never leave your device. No server-side session storage, no analytics, no tracking.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Network Status */}
          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Network Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <h4 className="font-semibold">Devnet - Live</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  Full swap and transfer functionality available. Safe for testing with no real funds. Fund test wallets using <code className="bg-background px-2 py-1 rounded text-xs">solana airdrop</code>.
                </p>
              </div>
              <div className="p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <h4 className="font-semibold">Mainnet-Beta - Pending</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  Ready for mainnet launch pending one-time program deploy. Includes full Jito MEV protection with transactions invisible in the public mempool before confirmation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Philosophy */}
          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Privacy Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                D3FAULT achieves privacy through <strong>identity separation</strong>, not cryptographic amount hiding. This is an important distinction.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">What is Hidden:</h4>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>Your main wallet address (not visible as signer)</li>
                    <li>Sender identity in transfers</li>
                    <li>Receiver identity in transfers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">What is Always Visible:</h4>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>Token mint address (which token was swapped)</li>
                    <li>That a transaction occurred</li>
                    <li>The amount transferred (for standard tokens like SOL/USDC)</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-foreground/70 italic">
                We are transparent about limitations. We do not claim amount privacy for standard tokens. Solana is a public ledger — some information cannot be hidden at the application layer.
              </p>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Link href="/docs/wallet">
              <Card className="border border-foreground/10 hover:border-foreground/30 transition-all cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Get Started with Wallet</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/70">
                  Learn how to generate, import, and manage your D3FAULT wallet →
                </CardContent>
              </Card>
            </Link>
            <Link href="/docs/privacy-model">
              <Card className="border border-foreground/10 hover:border-foreground/30 transition-all cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Understand Privacy Model</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/70">
                  Deep dive into how identity separation and cryptography work →
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

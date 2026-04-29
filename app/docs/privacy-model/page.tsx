import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Model - D3FAULT Documentation",
  description: "Understanding D3FAULT's identity-separation privacy approach",
};

export default function PrivacyModelPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/docs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Documentation
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-display tracking-tight mb-6">Privacy Model</h1>
          <p className="text-xl text-foreground/70">
            How D3FAULT achieves privacy through identity separation and cryptographic verification.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Identity Separation vs. Amount Hiding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                D3FAULT provides privacy through <strong>identity separation</strong>, not cryptographic amount hiding. This distinction is crucial to understanding what is and is not private.
              </p>
              <p className="text-foreground/70">
                Solana is a public ledger. Some information cannot be hidden at the application layer, no matter what cryptographic tools are used.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Swap Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Every swap uses a one-time throwaway wallet generated fresh in your browser:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-foreground/70">
                <li>Your main wallet funds the throwaway wallet</li>
                <li>The throwaway wallet executes the swap</li>
                <li>Output tokens are returned to your main wallet</li>
                <li>Your main wallet address never appears as the signer</li>
              </ol>
              <p className="text-sm bg-foreground/5 p-3 rounded-lg border border-foreground/10">
                <strong>Result:</strong> An on-chain observer sees two transactions but cannot connect them to your real wallet without additional off-chain information.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Transfer Privacy (Claim Links)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Transfers use a commitment-nullifier scheme with a 32-byte secret:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Sender Flow:</h4>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>1. Secret generated in browser (never leaves device)</li>
                    <li>2. Commitment = SHA256(secret) computed on-chain</li>
                    <li>3. Deposit via throwaway wallet (hides sender identity)</li>
                    <li>4. Claim link with secret in URL hash</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Recipient Flow:</h4>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>1. Secret read from URL hash (never sent to server)</li>
                    <li>2. Recipient claims via relayer</li>
                    <li>3. Relayer verifies cryptographic proof</li>
                    <li>4. Recipient address never signs transaction</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm bg-foreground/5 p-3 rounded-lg border border-foreground/10">
                <strong>Result:</strong> Deposit and withdrawal transactions have no on-chain link. Both sender and receiver identities are hidden.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">What is Always Visible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">These properties cannot be hidden on Solana, regardless of application-layer tools:</p>
              <ul className="space-y-2 text-foreground/70">
                <li><strong>Token mint address</strong> - Which token was used</li>
                <li><strong>Transaction existence</strong> - That a swap or transfer occurred</li>
                <li><strong>Amount</strong> - For standard tokens (SOL, USDC, most SPL tokens)</li>
              </ul>
              <p className="text-sm text-foreground/60 mt-4 italic">
                Note: Token-2022 with Confidential Transfers can hide amounts, but this is a token-level feature, not D3FAULT-specific. SOL and USDC do not support this.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Cryptographic Foundations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-1">SHA-256 Hashing</h4>
                <p className="text-sm text-foreground/70">Used for commitment scheme. Mathematically impossible to reverse or predict.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">AES-256-GCM Encryption</h4>
                <p className="text-sm text-foreground/70">Wallet seed encryption with PBKDF2 key derivation (100,000 iterations).</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Commitment-Nullifier Scheme</h4>
                <p className="text-sm text-foreground/70">Prevents double-spending while maintaining recipient privacy.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-12">
            <Link href="/docs" className="text-foreground/60 hover:text-foreground transition-colors">
              ← Back to Docs
            </Link>
            <Link href="/docs/wallet" className="text-foreground/60 hover:text-foreground transition-colors">
              Browser Wallet →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

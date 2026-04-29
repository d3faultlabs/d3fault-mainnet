import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Security - D3FAULT Documentation",
  description: "D3FAULT security practices, encryption, and validation",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/docs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Documentation
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-display tracking-tight mb-6">Security</h1>
          <p className="text-xl text-foreground/70">
            Encryption, validation, and security practices that make D3FAULT verifiable.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Wallet Encryption</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Wallet seeds are encrypted with military-grade encryption that never leaves your device.
              </p>
              <div className="space-y-2 text-sm text-foreground/70">
                <p><strong>Algorithm:</strong> AES-256-GCM (symmetric encryption)</p>
                <p><strong>Key Derivation:</strong> PBKDF2 with SHA-256, 100,000 iterations</p>
                <p><strong>Salt:</strong> Random 16 bytes, unique per encryption</p>
                <p><strong>IV:</strong> Random 12 bytes, unique per encryption</p>
              </div>
              <p className="text-sm bg-foreground/5 p-3 rounded-lg border border-foreground/10">
                Each encryption of the same key with the same password produces different ciphertext. Without your password, the key cannot be recovered.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Claim Link Secrets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Secrets for claim links are passed exclusively in the URL hash fragment and never leave your device.
              </p>
              <div className="space-y-2 text-sm text-foreground/70">
                <p><strong>Format:</strong> https://d3fault.app/claim#&lt;secret-in-base58&gt;</p>
                <p><strong>Security:</strong> URL hash (#) never sent in HTTP requests</p>
                <p><strong>Result:</strong> Our servers never receive the secret</p>
              </div>
              <p className="text-sm bg-foreground/5 p-3 rounded-lg border border-foreground/10">
                Even if our server logs were subpoenaed, the secret would not be there. The secret exists only in JavaScript on your device.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Relayer Validation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The relayer validates the full cryptographic proof before signing any transaction.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>Verifies SHA256(secret) == commitment recorded on-chain</li>
                <li>Verifies derived nullifier not already in on-chain NullifierSet</li>
                <li>Verifies deposit has not expired</li>
                <li>Rejects invalid or already-claimed secrets</li>
              </ul>
              <p className="text-sm text-foreground/60">
                No logging of rejected attempts or user data.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Privacy Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">No Session Storage</h4>
                <p className="text-sm text-foreground/70">No server-side sessions, cookies, or authentication tokens. The server has no state associated with any user.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">No Tracking</h4>
                <p className="text-sm text-foreground/70">
                  No Google Analytics, Mixpanel, Segment, Amplitude, Hotjar, FullStory, or any third-party analytics loaded on any D3FAULT page.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">No Telemetry</h4>
                <p className="text-sm text-foreground/70">Zero telemetry or user tracking. D3FAULT cannot identify who you are or what you do.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Open Source & Verifiable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Trust the math, not the promise. D3FAULT is built for verification.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>On-chain program source is open for review</li>
                <li>Commitment-nullifier scheme uses standard cryptographic practice</li>
                <li>Verify the program yourself or engage an auditor you trust</li>
                <li>All cryptographic operations are verifiable on-chain</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-12">
            <Link href="/docs" className="text-foreground/60 hover:text-foreground transition-colors">
              ← Back to Docs
            </Link>
            <Link href="/docs/networks" className="text-foreground/60 hover:text-foreground transition-colors">
              Networks →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

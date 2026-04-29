'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is D3FAULT?",
    answer: "D3FAULT is a non-custodial, privacy-preserving decentralized exchange built on Solana. It combines Jupiter's swap aggregation with Jito's MEV protection, allowing you to swap tokens and send crypto while maintaining identity privacy.",
  },
  {
    question: "Is D3FAULT truly non-custodial?",
    answer: "Yes, 100%. You control your private keys at all times. Your wallet seed is encrypted locally with AES-256-GCM and never leaves your device. We never store your keys or have access to your funds.",
  },
  {
    question: "What about transaction amounts? Are they private?",
    answer: "We're transparent about our limitations. While we hide your identity (sender/receiver), transaction amounts remain visible on-chain for standard tokens like SOL and USDC. This is a fundamental blockchain property we accept.",
  },
  {
    question: "How do private swaps work?",
    answer: "A throwaway wallet is generated for each swap. Your main wallet funds it, the throwaway executes the swap via Jupiter, and the output returns to your main wallet. This separation hides your identity from the DEX.",
  },
  {
    question: "What are claim links for private transfers?",
    answer: "Claim links use commitment-nullifier cryptography. The sender initiates a transfer via a throwaway wallet, and the recipient claims funds via a relayer. Both identities remain hidden. Links expire after 1h, 24h, 7d, or never.",
  },
  {
    question: "Where is D3FAULT available?",
    answer: "D3FAULT is currently live on Devnet for testing. Mainnet launch is pending a one-time on-chain program deployment. You can try the full functionality on Devnet right now.",
  },
  {
    question: "What are the fees?",
    answer: "Swaps: 0.2% platform fee + Jupiter fees + network gas. Transfers: Only network gas on deposit; withdrawal gas is covered by the relayer. No hidden charges.",
  },
  {
    question: "Is the code open source?",
    answer: "Yes. The Solana program is open source and auditable. We also have zero third-party analytics and no server-side session state. Everything is designed for maximum transparency.",
  },
];

export function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#eca8d6]/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/30" />
            FAQ
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Questions?
            <br />
            <span className="text-muted-foreground">We&apos;ve got answers.</span>
          </h2>

          <p className={`text-lg text-muted-foreground leading-relaxed max-w-2xl mt-8 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Everything you need to know about D3FAULT, private swaps, and non-custodial privacy on Solana.
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`space-y-4 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border border-foreground/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/5"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-all duration-300"
              >
                <span className="font-semibold text-lg group-hover:text-foreground transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-5 border-t border-foreground/10 bg-foreground/5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`mt-12 p-6 rounded-lg border border-foreground/10 bg-foreground/5 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-sm text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all group"
          >
            Contact our team
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

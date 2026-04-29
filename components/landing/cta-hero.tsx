"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/cta-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-24 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Heading */}
          <h2 className="text-5xl lg:text-7xl font-display font-light tracking-tight mb-8 leading-tight text-white">
            Ready for
            <br />
            <span className="border-b-2 border-white pb-2">private swaps?</span>
          </h2>

          {/* Description */}
          <p className="text-base lg:text-lg text-white/85 mb-10 leading-relaxed max-w-xl font-light">
            D3FAULT brings wallet privacy and identity separation to Solana. Your keys, your control. No third parties.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              className="bg-white hover:bg-white/90 text-black px-8 h-12 rounded-full font-semibold flex items-center justify-center group"
            >
              Try on Devnet
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 h-12 rounded-full font-semibold"
            >
              Join Mainnet Waitlist
            </Button>
          </div>

          {/* Footer Text */}
          <p className="text-xs lg:text-sm text-white/60 font-mono tracking-wider">
            Non-custodial. Open source. No analytics.
          </p>
        </div>
      </div>
    </section>
  );
}

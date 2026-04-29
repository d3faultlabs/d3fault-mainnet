"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground/20 transition-all duration-1000 overflow-hidden rounded-2xl h-[500px] lg:h-[600px] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Background image - full coverage */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url(/cta-padlock.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Content overlay - positioned absolutely to sit on top of image */}
          <div className="absolute inset-0 z-10 px-8 lg:px-16 py-12 lg:py-20 flex flex-col justify-center">
            <div className="max-w-2xl">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
                Ready for
                <br />
                <span className="text-stroke">private swaps?</span>
              </h2>

              <p className={`text-base lg:text-lg text-white/90 mb-8 leading-relaxed transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
                D3FAULT brings wallet privacy and identity separation to Solana. Your keys, your control. No third parties.
              </p>

              <div className={`flex flex-col sm:flex-row items-start gap-3 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}>
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black px-6 h-12 text-sm rounded-full font-semibold group"
                >
                  Try on Devnet
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 text-sm rounded-full border-white/30 text-white hover:bg-white/10 font-semibold"
                >
                  Join Mainnet Waitlist
                </Button>
              </div>

              <p className={`text-xs text-white/70 mt-6 font-mono transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}>
                Non-custodial. Open source. No analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, PhoneCall } from "lucide-react";
import { business } from "../data";

export default function Hero() {
  const [heroVisible, setHeroVisible] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ height: "100svh", minHeight: 640 }}
      >
        {/* Layer 1 — photo réelle de la façade YHT Autos */}
        <img
          src={`${import.meta.env.BASE_URL}images/facade-2.webp`}
          alt="Façade et atelier du garage YHT Autos à Sète"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 1 }}
        />

        {/* Layer 2 — watermark */}
        <span
          className="absolute select-none pointer-events-none hidden sm:block"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(200px, 34vw, 520px)",
            color: "rgba(232, 232, 232, 0.03)",
            right: "-2%",
            top: "50%",
            transform: "translateY(-50%)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            zIndex: 5,
          }}
        >
          YHT
        </span>

        {/* Layer 3 — gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 10,
            background:
              "linear-gradient(to right, rgba(17,20,24,0.96) 0%, rgba(17,20,24,0.80) 40%, rgba(17,20,24,0.40) 65%, rgba(17,20,24,0.00) 100%)",
          }}
        />

        {/* Layer 4 — content */}
        <div
          className="absolute inset-0 flex flex-col justify-center"
          style={{
            zIndex: 20,
            paddingLeft: "var(--section-px)",
            paddingRight: "var(--section-px)",
            maxWidth: 820,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-orange)",
              marginBottom: 20,
            }}
          >
            Garage Indépendant de Confiance · {business.city}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "var(--text-hero)",
              color: "var(--color-white)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              marginBottom: 28,
            }}
          >
            ON RÉPARE CE QUE<br />
            <span style={{ color: "var(--color-orange)" }}>LES AUTRES</span> RATENT.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(16px, 1.8vw, 22px)",
              color: "var(--color-grey-light)",
              maxWidth: 480,
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            Diagnostic honnête. Prix juste. Travail garanti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="#contact"
              style={{
                backgroundColor: "var(--color-orange)",
                color: "var(--color-white)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 28px",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Prendre rendez-vous
            </a>
            <a
              href={business.phoneHref}
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-grey-light)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 28px",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {business.phoneDisplay}
            </a>
          </motion.div>
        </div>

        {/* Layer 5 — scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden sm:block"
          style={{ bottom: 80, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}
        >
          <ChevronDown size={28} color="rgba(232,232,232,0.4)" />
        </motion.div>

        <div ref={sentinelRef} className="absolute bottom-0 left-0 w-full h-1" />
      </section>

      {/* Fixed call bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={heroVisible ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 flex items-center justify-center flex-wrap"
        style={{
          zIndex: 100,
          backgroundColor: "var(--color-orange)",
          padding: "14px var(--section-px)",
          gap: 14,
          pointerEvents: heroVisible ? "auto" : "none",
        }}
      >
        <a href={business.phoneHref} className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <PhoneCall size={22} color="white" />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(18px, 2.2vw, 28px)",
              color: "var(--color-white)",
              letterSpacing: "-0.01em",
            }}
          >
            APPELER : {business.phoneDisplay}
          </span>
        </a>
        <span
          className="hidden md:inline"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Lun–Ven 8h–18h · Sam 8h–12h
        </span>
      </motion.div>
    </>
  );
}

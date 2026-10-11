import { motion } from "motion/react";
import { business } from "../data";

export default function Emergency() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-orange)",
        padding: "var(--section-py) var(--section-px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="hidden sm:block"
        style={{
          position: "absolute",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(180px, 28vw, 400px)",
          color: "rgba(0,0,0,0.06)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        SOS
      </span>

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 80px)",
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            marginBottom: 28,
          }}
        >
          EN PANNE ?<br />
          APPELEZ-NOUS.
        </motion.h2>

        <motion.a
          href={business.phoneHref}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "block",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 90px)",
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            textDecoration: "none",
            marginBottom: 20,
          }}
        >
          {business.phoneDisplay}
        </motion.a>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(15px, 1.6vw, 19px)",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.02em",
          }}
        >
          Du lundi au vendredi, 8h–18h · Samedi 8h–12h · Devis gratuit par téléphone
        </p>
      </div>
    </section>
  );
}

import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { pricingRows } from "../data";

export default function Pricing() {
  return (
    <section id="tarifs" style={{ padding: "var(--section-py) var(--section-px)", backgroundColor: "var(--color-bg)" }}>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "var(--text-h2)",
          color: "var(--color-white)",
          marginBottom: 12,
        }}
      >
        Pas de Surprise. Juste des Prix.
      </h2>
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          color: "var(--color-grey-mid)",
          fontSize: 17,
          marginBottom: 48,
        }}
      >
        Chaque prix affiché est un tarif de départ — nous confirmons toujours votre devis exact avant de commencer les travaux.
      </p>

      <div
        className="overflow-x-auto scrollbar-x"
        style={{ borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}
      >
        <div style={{ minWidth: 560 }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr 160px 140px",
              backgroundColor: "var(--color-orange)",
              padding: "16px 28px",
            }}
          >
            <span style={headerStyle}>Service</span>
            <span style={headerStyle}>Prix dès</span>
            <span style={headerStyle}>Durée moy.</span>
          </div>

          {pricingRows.map((row, i) => (
            <motion.div
              key={row.service}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="grid"
              style={{
                gridTemplateColumns: "1fr 160px 140px",
                padding: "18px 28px",
                backgroundColor: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-mid)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 16, color: "var(--color-grey-light)" }}>
                {row.service}
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 16, color: "var(--color-orange)" }}>
                {row.price}
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: 15, color: "var(--color-grey-mid)" }}>
                {row.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: 13,
          color: "var(--color-grey-dark)",
          marginTop: 16,
        }}
      >
        Tous les prix sont TTC. Les tarifs affichés sont indicatifs et peuvent varier selon le véhicule. Nous confirmons tous les coûts avant le début des travaux.
      </p>
    </section>
  );
}

const headerStyle: CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 14,
  color: "white",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

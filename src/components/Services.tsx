import { motion } from "motion/react";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" style={{ padding: "var(--section-py) var(--section-px)", backgroundColor: "var(--color-bg)" }}>
      <div style={{ marginBottom: 56 }}>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-orange)",
            marginBottom: 12,
          }}
        >
          Ce Que Nous Faisons
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "var(--text-h2)",
            color: "var(--color-white)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Tous Les Services<br />
          <span style={{ color: "var(--color-grey-mid)" }}>Automobiles</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 2 }}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -3,
                borderLeftColor: "var(--color-orange)",
                boxShadow: "0 8px 32px var(--color-orange-glow)",
              }}
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "36px 32px",
                borderLeft: "3px solid transparent",
                boxShadow: "none",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <Icon size={32} color="var(--color-orange)" strokeWidth={1.5} />
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "var(--text-h3)",
                  color: "var(--color-white)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {service.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 15,
                  color: "var(--color-grey-mid)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                {service.description}
              </p>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(232, 93, 4, 0.12)",
                  color: "var(--color-orange)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  padding: "6px 14px",
                  borderRadius: 100,
                  border: "1px solid rgba(232, 93, 4, 0.25)",
                }}
              >
                {service.price}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

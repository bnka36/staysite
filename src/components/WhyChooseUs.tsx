import { motion } from "motion/react";
import { Check } from "lucide-react";
import { trustPoints, business } from "../data";

export default function WhyChooseUs() {
  return (
    <section
      id="pourquoi"
      style={{ padding: "var(--section-py) var(--section-px)", backgroundColor: "var(--color-surface)" }}
    >
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "var(--text-h2)",
          color: "var(--color-white)",
          letterSpacing: "-0.02em",
          marginBottom: 48,
        }}
      >
        Pourquoi {business.name} ?
      </h2>

      <div className="flex flex-wrap" style={{ gap: 40 }}>
        {trustPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: "1 1 220px", display: "flex", alignItems: "flex-start", gap: 16 }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "var(--color-orange)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <Check size={20} color="white" strokeWidth={2.5} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--color-white)",
                  marginBottom: 6,
                }}
              >
                {point.title}
              </p>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 15,
                  color: "var(--color-grey-mid)",
                  lineHeight: 1.6,
                }}
              >
                {point.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

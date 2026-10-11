import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { business } from "../data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-[90] border-b"
      style={{ backgroundColor: "var(--color-bg)", borderColor: "var(--color-border)" }}
    >
      <div
        className="flex items-center justify-between"
        style={{ padding: "16px var(--section-px)" }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "22px",
            color: "var(--color-white)",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          {business.name.split(" ")[0].toUpperCase()}{" "}
          <span style={{ color: "var(--color-orange)" }}>
            {business.name.split(" ").slice(1).join(" ").toUpperCase() || "AUTO"}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--color-grey-mid)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.01em",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-grey-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-grey-mid)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={business.phoneHref}
          className="hidden md:inline-flex"
          style={{
            backgroundColor: "var(--color-orange)",
            color: "var(--color-white)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            padding: "10px 20px",
            borderRadius: "var(--radius-sm)",
            textDecoration: "none",
            transition: "background-color 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-orange-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-orange)")}
        >
          Appeler le garage
        </a>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          style={{ color: "var(--color-grey-light)", background: "none", border: "none" }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden flex flex-col"
          style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "16px var(--section-px)",
                color: "var(--color-grey-light)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            style={{
              margin: "16px var(--section-px)",
              backgroundColor: "var(--color-orange)",
              color: "var(--color-white)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              padding: "12px 20px",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            {business.phoneDisplay}
          </a>
        </div>
      )}
    </motion.header>
  );
}

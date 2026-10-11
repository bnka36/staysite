import { ShieldCheck } from "lucide-react";
import { business } from "../data";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "64px var(--section-px) 32px",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 48 }}>
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 20,
              color: "var(--color-white)",
              marginBottom: 16,
            }}
          >
            {business.name.toUpperCase()}
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--color-grey-mid)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
            Garage indépendant à {business.city}. Entretien, révision, réparations et pneumatiques.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--color-grey-mid)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
            {business.address.street}<br />
            {business.address.postalCode} {business.address.city}
          </p>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--color-orange)", fontSize: 14, textDecoration: "none", fontWeight: 600 }}
          >
            Itinéraire →
          </a>
        </div>

        {/* Hours */}
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "var(--color-white)",
              marginBottom: 16,
            }}
          >
            Horaires d'ouverture
          </p>
          <table style={{ borderCollapse: "collapse" }}>
            <tbody>
              {business.hours.map((h) => (
                <tr key={h.day}>
                  <td
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      color: "var(--color-white)",
                      fontSize: 14,
                      padding: "6px 16px 6px 0",
                    }}
                  >
                    {h.day}
                  </td>
                  <td
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                      color: "var(--color-grey-mid)",
                      fontSize: 14,
                      padding: "6px 0",
                    }}
                  >
                    {h.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact & links */}
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "var(--color-white)",
              marginBottom: 16,
            }}
          >
            Contact
          </p>
          <div className="flex items-center gap-2" style={{ marginBottom: 10 }}>
            <ShieldCheck size={14} color="var(--color-orange)" />
            <a href={business.phoneHref} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--color-grey-mid)", fontSize: 14, textDecoration: "none" }}>
              {business.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-2" style={{ marginBottom: 24 }}>
            <ShieldCheck size={14} color="var(--color-orange)" />
            <a href={`mailto:${business.email}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--color-grey-mid)", fontSize: 14, textDecoration: "none" }}>
              {business.email}
            </a>
          </div>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "var(--color-white)",
              marginBottom: 12,
            }}
          >
            Liens rapides
          </p>
          <div className="flex flex-col" style={{ gap: 8 }}>
            {[
              { label: "Nos services", href: "#services" },
              { label: "Voir les tarifs", href: "#tarifs" },
              { label: "Demander un devis", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--color-grey-mid)", fontSize: 14, textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: 24,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "var(--color-grey-dark)" }}>
          © {new Date().getFullYear()} {business.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

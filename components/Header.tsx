"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
        background: isScrolled
          ? "hsla(40, 40%, 97%, 0.94)"
          : "hsla(40, 40%, 97%, 0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: isScrolled
          ? "1px solid hsl(38, 25%, 87%)"
          : "1px solid transparent",
        boxShadow: isScrolled ? "0 2px 20px hsla(25,20%,20%,0.07)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: "2.2rem",
              height: "2.2rem",
              background: "var(--color-primary)",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <polygon points="2,10 10,2 18,10" fill="hsl(42,65%,82%)" />
              <rect x="4.5" y="10" width="11" height="8" rx="1" fill="white" />
              <rect x="8" y="13" width="4" height="5" rx="1" fill="hsl(17,62%,52%)" />
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "1.15rem", color: "var(--color-text)", letterSpacing: "-0.01em" }}>
            Bienvenue Chez Nous
          </span>
        </Link>

        {/* Nav desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} aria-label="Navigation principale">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: isActive(item.href) ? 600 : 500,
                fontSize: "0.9rem",
                padding: "0.4rem 0.85rem",
                borderRadius: "var(--radius-sm)",
                color: isActive(item.href)
                  ? "var(--color-primary)"
                  : "var(--color-text-muted)",
                background: isActive(item.href)
                  ? "var(--color-primary-light)"
                  : "transparent",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              className="header-nav-link"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginLeft: "0.75rem", fontSize: "0.875rem", padding: "0.55rem 1.25rem" }}
          >
            Nous contacter
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-text)",
          }}
          id="mobile-menu-btn"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "4.5rem",
            left: 0,
            right: 0,
            bottom: 0,
            background: "hsla(40, 40%, 97%, 0.98)",
            backdropFilter: "blur(16px)",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            overflowY: "auto",
          }}
        >
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "0.85rem 1rem",
                borderRadius: "var(--radius-md)",
                color: isActive(item.href) ? "var(--color-primary)" : "var(--color-text)",
                background: isActive(item.href) ? "var(--color-primary-light)" : "transparent",
                borderLeft: isActive(item.href) ? "3px solid var(--color-primary)" : "3px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          nav { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
        .header-nav-link:hover {
          color: var(--color-primary) !important;
          background: var(--color-primary-light) !important;
        }
      `}</style>
    </header>
  );
}

import React, { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const sectionIds = [...links.map((link) => link.href.slice(1)), "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  // shadow + progress bar while scrolling
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 10);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      if (max > 0 && y >= max - 4) setActive("contact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the link of the section currently on screen
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) => (active === id ? "is-active" : "");

  return (
    <header className={"navbar" + (scrolled ? " navbar--scrolled" : "")}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          {/* Aishwarya<span>.</span> */}
          Portfolio<span>.</span>

        </a>

        <nav className="navbar__links navbar__links--desktop">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClass(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={"navbar__cta " + linkClass("contact")}
          >
            Contact
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClass(link.href.slice(1))}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={linkClass("contact")}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}

      <div
        className="navbar__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}

export default Navbar;

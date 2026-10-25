import React from "react";
import { profile } from "../data/data";
import Reveal from "./Reveal";
import "./Contact.css";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: "Phone",
    href: `tel:+91${profile.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z" />
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="7.5" y1="10" x2="7.5" y2="17" />
        <circle cx="7.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
        <path d="M11.5 17v-4a2.5 2.5 0 015 0v4" />
        <line x1="11.5" y1="10" x2="11.5" y2="17" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: (
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 015 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0012 2z" />
    ),
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Let's work together
        </Reveal>
        <Reveal as="p" delay={120} className="contact__intro">
          Looking for a new opportunity to learn, grow, and build as a
          Software Engineer.
        </Reveal>

        <div className="contact__icons">
          {links.map((link, index) => (
            <Reveal key={link.label} direction="zoom" delay={200 + index * 110}>
            <a
              href={link.href}
              className="contact__icon"
              aria-label={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {link.icon}
              </svg>
            </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

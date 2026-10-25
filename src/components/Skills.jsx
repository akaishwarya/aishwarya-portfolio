import React from "react";
import { skills } from "../data/data";
import Reveal from "./Reveal";
import "./Skills.css";

const iconPaths = {
  code: (
    <path d="M9 6L3 12l6 6M15 6l6 6-6 6" />
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="9" y1="10" x2="9" y2="20" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <circle cx="7" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  "git-branch": (
    <>
      <line x1="7" y1="3" x2="7" y2="15" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="7" cy="6" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M17 8a4 4 0 01-4 4H9" />
    </>
  ),
};

function Icon({ name }) {
  return (
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
      {iconPaths[name]}
    </svg>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Technical skills
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 90}>
            <div className="card skills__card">
              <div className="skills__card-head">
                <Icon name={group.icon} />
                <p>{group.title}</p>
              </div>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

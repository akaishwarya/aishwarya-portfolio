import React from "react";
import { education, certifications } from "../data/data";
import Reveal from "./Reveal";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="edu__columns">
          <div>
            <Reveal as="h2" className="section-title">
              Education
            </Reveal>
            <div className="edu__list">
              {education.map((item, index) => (
                <Reveal key={item.degree} direction="left" delay={index * 120}>
                  <div className="card edu__item">
                    <p className="edu__degree">{item.degree}</p>
                    <p className="edu__meta">
                      {item.school}
                      <br />
                      {item.period}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal as="h2" className="section-title" delay={100}>
              Certifications
            </Reveal>
            <div className="edu__list">
              {certifications.map((item, index) => (
                <Reveal
                  key={item.title}
                  direction="right"
                  delay={150 + index * 120}
                >
                  <div className="card edu__item edu__item--cert">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M9 13l-2 8 5-3 5 3-2-8" />
                    </svg>
                    <div>
                      <p className="edu__degree">{item.title}</p>
                      <p className="edu__meta">
                        {item.issuer}
                        <br />
                        {item.period}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

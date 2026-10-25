import React from "react";
import { profile, stats } from "../data/data";
import Reveal from "./Reveal";
import "./About.css";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          A bit about me
        </Reveal>

        <div className="about__grid">
          <Reveal direction="left" delay={100}>
            <p className="about__summary">{profile.summary}</p>
          </Reveal>

          <div className="about__stats">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} direction="zoom" delay={250 + index * 130}>
                <div className="card about__stat">
                  <p className="about__stat-value">{stat.value}</p>
                  <p className="about__stat-label">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

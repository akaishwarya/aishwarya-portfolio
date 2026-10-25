import React from "react";
import { experience } from "../data/data";
import Reveal from "./Reveal";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Where I've worked
        </Reveal>

        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal
              key={job.company}
              direction="left"
              delay={index * 150}
              className="timeline__item"
            >
              <span
                className={
                  "timeline__dot" + (job.current ? " timeline__dot--active" : "")
                }
              />
              <div className="timeline__head">
                <p className="timeline__role">{job.role}</p>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__company">
                {job.company} · {job.location}
              </p>
              <ul className="timeline__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

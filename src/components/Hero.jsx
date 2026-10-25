import React from "react";
import { profile } from "../data/data";
import Reveal from "./Reveal";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <Reveal as="p" className="hero__greeting" delay={100}>
            Hello, I'm
          </Reveal>
          <Reveal as="h1" className="hero__name" delay={250}>
            {profile.name}
          </Reveal>
          <Reveal as="p" className="hero__role" delay={400}>
            {profile.role}
          </Reveal>
          <Reveal as="p" className="hero__summary" delay={550}>
            1.5+ years building frontend and backend functionality for web
            applications with React.js, .NET, and REST APIs.
          </Reveal>
          <Reveal className="hero__actions" delay={700}>
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              className="btn btn--secondary"
              download="Aishwarya_AK_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
          </Reveal>
        </div>

        <Reveal direction="zoom" delay={300} className="hero__art">
          <div className="hero__photo-wrap">
            <span className="hero__ring" aria-hidden="true" />
            <div className="hero__photo">
              <img src={profile.image} alt={`${profile.name} portrait`} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;

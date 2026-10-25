import React from "react";
import { projects } from "../data/data";
import Reveal from "./Reveal";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Selected work
        </Reveal>

        <div className="project__grid">
          {projects.map((project, index) => {
            const Wrapper = project.link ? "a" : "div";
            const wrapperProps = project.link
              ? { href: project.link, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Reveal key={project.title} delay={(index % 3) * 110}>
                <Wrapper className="card project__card" {...wrapperProps}>
                  <p className="project__title project__title--sm">
                    {project.title}
                  </p>
                  <p className="project__desc project__desc--sm">
                    {project.description}
                  </p>
                  <p className="project__stack">{project.stack}</p>
                  {project.link && (
                    <span className="project__link">Visit project</span>
                  )}
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

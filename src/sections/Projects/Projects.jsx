import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHead from "@components/SectionHead/SectionHead";
import { profile, projects } from "@/data/profile";
import '@/sections/Projects/Projects.css';

function Projects() {
    return (
        <section className="section projects" id="projects">
            <SectionHead num="03" kicker="Projects" title="Side builds">
                Small things built outside work to learn and experiment.
            </SectionHead>

            <div className="project-grid">
                {projects.map((project, i) => (
                    <a
                        className="project-card reveal"
                        style={{ '--d': `${i * 0.12}s` }}
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        key={project.title}
                    >
                        <span className="project-num display" aria-hidden="true">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="project-top">
                            <h3 className="project-title">{project.title}</h3>
                            <span className="project-arrow" aria-hidden="true"><FiArrowUpRight /></span>
                        </div>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                        </div>
                    </a>
                ))}
                <a
                    className="project-card project-card--more reveal"
                    style={{ '--d': `${projects.length * 0.12}s` }}
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="project-top">
                        <h3 className="project-title">More on GitHub</h3>
                        <span className="project-arrow" aria-hidden="true"><FiArrowUpRight /></span>
                    </div>
                    <p className="project-desc">@{profile.github.split('/').pop()}</p>
                </a>
            </div>
        </section>
    );
}

export default Projects;

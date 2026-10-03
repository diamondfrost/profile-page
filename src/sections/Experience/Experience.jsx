import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import SectionHead from "@components/SectionHead/SectionHead";
import { experience } from "@/data/profile";
import '@/sections/Experience/Experience.css';

function Experience() {
    const [open, setOpen] = useState(0);

    return (
        <section className="section experience" id="experience">
            <SectionHead num="02" kicker="Experience" title="Track record">
                <span className="career-range">2020 — Now</span>
                Six years across three banks, from release pipelines to front-office trading desks.
            </SectionHead>

            <ol className="log">
                {experience.map((job, i) => {
                    const isOpen = open === i;
                    const panelId = `log-panel-${i}`;
                    return (
                        <li
                            className={`log-row reveal ${isOpen ? 'is-open' : ''}`}
                            key={`${job.company}-${job.period}`}
                        >
                            <button
                                type="button"
                                className="log-head"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpen(isOpen ? -1 : i)}
                            >
                                <span className="log-sym">{job.sym}</span>
                                <span className="log-when">
                                    {job.period}
                                    {job.current && <span className="log-now">Now</span>}
                                </span>
                                <span className="log-co display">{job.company}</span>
                                <span className="log-role">
                                    {job.role}
                                    <small>{job.team} · {job.desk}</small>
                                </span>
                                <span className="log-toggle" aria-hidden="true"><FiPlus /></span>
                            </button>
                            <div className="log-panel" id={panelId} role="region">
                                <div className="log-panel-inner">
                                    <ul className="log-points">
                                        {job.points.map((point) => <li key={point}>{point}</li>)}
                                    </ul>
                                    <div className="log-tags">
                                        {job.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}

export default Experience;

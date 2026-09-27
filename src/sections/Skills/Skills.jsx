import React from "react";
import SectionHead from "@components/SectionHead/SectionHead";
import { skills, education, certifications } from "@/data/profile";
import '@/sections/Skills/Skills.css';

function Skills() {
    return (
        <section className="section skills" id="skills">
            <SectionHead num="04" kicker="Skills" title="Toolkit" />

            <div className="skill-rows">
                {skills.map((group, i) => (
                    <div className="skill-row reveal" style={{ '--d': `${i * 0.08}s` }} key={group.group}>
                        <h3 className="skill-group">{group.group}</h3>
                        <ul className="skill-items">
                            {group.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="creds">
                <div className="creds-block reveal">
                    <p className="creds-label">Education</p>
                    <div className="cred cred--edu">
                        <p className="cred-name display">{education.degree}</p>
                        <p className="cred-meta">{education.school} · {education.location}</p>
                        <p className="cred-date">{education.date}</p>
                    </div>
                </div>
                <div className="creds-block reveal" style={{ '--d': '0.12s' }}>
                    <p className="creds-label">Certifications</p>
                    <ul className="cred-list">
                        {certifications.map((cert) => (
                            <li className="cred" key={cert.name}>
                                <div>
                                    <p className="cred-title">{cert.name}</p>
                                    <p className="cred-meta">{cert.issuer}</p>
                                </div>
                                <p className="cred-date">{cert.date}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;

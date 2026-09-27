import React from "react";
import SectionHead from "@components/SectionHead/SectionHead";
import { about } from "@/data/profile";
import '@/sections/About/About.css';

// Renders **text** segments as <strong>.
function withBold(text) {
    return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

function About() {
    return (
        <section className="section about" id="about">
            <SectionHead num="01" kicker="About" title="Hello" />

            <p className="statement-big display reveal">
                {about.statement.map((chunk) => (
                    <span key={chunk.text} className={chunk.highlight ? 'hl' : ''}>{chunk.text} </span>
                ))}
            </p>

            <div className="statement-cols">
                {about.paragraphs.map((text, i) => (
                    <p className="reveal" style={{ '--d': `${i * 0.12}s` }} key={i}>{withBold(text)}</p>
                ))}
            </div>

            <div className="stats">
                {about.stats.map((stat, i) => (
                    <div className="stat reveal" style={{ '--d': `${i * 0.1}s` }} key={stat.label}>
                        <p className={`stat-num display ${stat.alt ? 'stat-num--alt' : ''}`}>
                            {stat.value}<sup>{stat.suffix}</sup>
                        </p>
                        <p className="stat-label">{stat.label}</p>
                        <p className={`stat-delta stat-delta--${stat.dir}`}>
                            {{ up: '▲', down: '▼', flat: '■' }[stat.dir]} {stat.delta}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;

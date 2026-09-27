import React from "react";
import SectionHead from "@components/SectionHead/SectionHead";
import { volunteering } from "@/data/profile";
import '@/sections/Beyond/Beyond.css';

function Beyond() {
    return (
        <section className="section beyond" id="beyond">
            <SectionHead num="05" kicker="Beyond work" title="Off duty">
                Volunteering outside the office, with people and with cats.
            </SectionHead>

            <div className="beyond-grid">
                {volunteering.map((item, i) => (
                    <article className="beyond-card reveal" style={{ '--d': `${i * 0.12}s` }} key={item.org}>
                        <p className="beyond-period">{item.period}</p>
                        <h3 className="beyond-org">{item.org}</h3>
                        <p className="beyond-desc">{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Beyond;

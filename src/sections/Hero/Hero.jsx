import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Ticker from "@components/Ticker/Ticker";
import HeroChart from "@/sections/Hero/HeroChart";
import { profile, experience, ticker } from "@/data/profile";
import '@/sections/Hero/Hero.css';

const sgtFormat = new Intl.DateTimeFormat('en-SG', {
    timeZone: 'Asia/Singapore',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
});

function useSgtClock() {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    return sgtFormat.format(now);
}

function Letters({ word, offset = 0 }) {
    return word.split('').map((char, i) => (
        <span className="ltr" style={{ '--i': i + offset }} key={i}>{char}</span>
    ));
}

function Hero() {
    const [loaded, setLoaded] = useState(false);
    const clock = useSgtClock();
    useEffect(() => {
        const frame = requestAnimationFrame(() => setLoaded(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    const current = experience[0];
    const positionRows = [
        ['Firm', current.company.replace(/\.$/, '')],
        ['Desk', current.team],
        ['Book', current.desk],
        ['Since', current.period.split(' – ')[0]],
    ];

    return (
        <section className={`hero ${loaded ? 'loaded' : ''}`} id="top">
            <div className="hero-grid" aria-hidden="true" />
            <HeroChart />
            <div className="hero-num" aria-hidden="true">{profile.initials}</div>

            <p className="hero-meta">
                <span className="hero-dot" aria-hidden="true" />
                <span>{profile.role}</span>
                <span className="hero-meta-sep" aria-hidden="true">{'//'}</span>
                <span>{profile.location}</span>
                <span className="hero-meta-sep" aria-hidden="true">{'//'}</span>
                <time className="hero-clock" aria-label="Singapore time">SGT {clock}</time>
            </p>

            <h1 className="sr-only">{profile.firstName} {profile.lastName}</h1>
            <div className="hero-name display">
                <span className="line" aria-hidden="true">
                    <Letters word={profile.firstName} />
                </span>
                <div className="line line-2">
                    <span aria-hidden="true">
                        <Letters word={profile.lastName} offset={profile.firstName.length} />
                    </span>
                    <p className="hero-tail">
                        Engineering <strong>trading</strong> and <strong>surveillance</strong> platforms
                        at {current.company.replace(/\.$/, '')}, from bullion desks to compliance.
                    </p>
                </div>
            </div>

            <aside className="hero-card" aria-label="Current position">
                <div className="hero-card-top">
                    <span>Position · {current.sym}</span>
                    <span className="hero-card-live">● Open</span>
                </div>
                <div className="hero-card-quote">
                    <p className="hero-card-initials display">{profile.initials}</p>
                    <p className="hero-card-change">▲ SWE II</p>
                </div>
                <svg className="hero-card-spark" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
                    <polyline points="0,26 10,24 18,25 27,20 36,21 45,16 54,18 63,12 72,13 81,8 90,9 100,3" />
                </svg>
                <dl className="hero-card-rows">
                    {positionRows.map(([k, v]) => (
                        <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                    ))}
                </dl>
            </aside>

            <div className="hero-social">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><MdOutlineEmail /></a>
            </div>

            <div className="hero-ticker">
                <Ticker items={ticker} />
            </div>
        </section>
    );
}

export default Hero;

import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "@/data/profile";
import '@/sections/Contact/Contact.css';

function Contact() {
    return (
        <section className="section contact" id="contact">
            <p className="contact-kicker reveal"><span>06</span> / Contact</p>
            <h2 className="contact-title reveal">
                Let&apos;s build<br /><span>something.</span>
            </h2>
            <a className="contact-email reveal" href={`mailto:${profile.email}`}>
                {profile.email}
                <FiArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-links reveal">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn aria-hidden="true" /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" /> GitHub
                </a>
            </div>
            <p className="contact-note reveal">{profile.residency} · Based in {profile.location}</p>
        </section>
    );
}

export default Contact;

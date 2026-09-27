import React, { useEffect, useState } from "react";
import ThemeButton from "@components/ThemeButton/ThemeButton";
import '@components/Navbar/Navbar.css';

function useActiveSection(ids) {
    const [active, setActive] = useState('');
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [ids]);
    return active;
}

function Navbar({ links, brand, hidden, solid }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const active = useActiveSection(links.map((link) => link.id));

    useEffect(() => {
        document.body.classList.toggle('menu-open', menuOpen);
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);
    const headerClass = [
        'site-header',
        hidden && !menuOpen ? 'hidden' : '',
        solid && !menuOpen ? 'solid' : '',
    ].join(' ');

    return (
        <>
            <header className={headerClass}>
                <a className="brand" href="#top" onClick={closeMenu} aria-label="Back to top">
                    {brand.initials}<em>/ {brand.location}</em>
                </a>
                <nav className="main-nav" aria-label="Primary">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={active === link.id ? 'active' : ''}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="header-actions">
                    <ThemeButton />
                    <a className="header-cta" href="#contact">Let&apos;s talk</a>
                    <button
                        className="burger"
                        type="button"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </header>
            <nav
                id="mobile-menu"
                className={`mobile-menu ${menuOpen ? 'open' : ''}`}
                aria-label="Mobile"
                aria-hidden={!menuOpen}
            >
                {links.map((link) => (
                    <a key={link.id} href={`#${link.id}`} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                        {link.label}<small>{link.num}</small>
                    </a>
                ))}
            </nav>
        </>
    );
}

export default Navbar;

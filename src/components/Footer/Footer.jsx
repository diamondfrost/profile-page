import React from "react";
import { FiArrowUp } from "react-icons/fi";
import '@components/Footer/Footer.css';

function Footer({ name }) {
    return (
        <footer className="site-footer">
            <p>© {new Date().getFullYear()} {name}</p>
            <p className="footer-built">Built with React + Vite</p>
            <a href="#top" className="footer-top">
                Back to top <FiArrowUp aria-hidden="true" />
            </a>
        </footer>
    );
}

export default Footer;

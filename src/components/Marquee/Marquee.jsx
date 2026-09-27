import React from "react";
import '@components/Marquee/Marquee.css';

function Marquee({ items, accent = false, reverse = false }) {
    // The track is rendered twice so the loop is seamless at -50%.
    const track = items.flatMap((item, i) => [
        <span key={`w-${i}`}>{item}</span>,
        <span key={`s-${i}`} className="marquee-sep" aria-hidden="true">✦</span>,
    ]);
    return (
        <div className={`marquee ${accent ? 'marquee--accent' : ''}`} aria-label={items.join(', ')}>
            <div className={`marquee-track ${reverse ? 'reverse' : ''}`} aria-hidden="true">
                <div className="marquee-group">{track}</div>
                <div className="marquee-group">{track}</div>
            </div>
        </div>
    );
}

export default Marquee;

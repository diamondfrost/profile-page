import React from "react";
import '@components/Ticker/Ticker.css';

const ARROWS = { up: '▲', down: '▼', flat: '■' };

function Ticker({ items }) {
    // The track is rendered twice so the loop is seamless at -50%.
    const group = items.map((item) => (
        <span className="tk-item" key={item.sym + item.label}>
            <span className="tk-sym">{item.sym}</span>
            <span className="tk-label">{item.label}</span>
            <span className={`tk-val tk-${item.dir}`}>{ARROWS[item.dir]} {item.value}</span>
        </span>
    ));
    return (
        <div className="ticker">
            <span className="ticker-badge">
                <span className="ticker-dot" aria-hidden="true" />Live
            </span>
            <div className="ticker-window">
                <div className="ticker-track">
                    <div className="ticker-group">{group}</div>
                    <div className="ticker-group" aria-hidden="true">{group}</div>
                </div>
            </div>
        </div>
    );
}

export default Ticker;

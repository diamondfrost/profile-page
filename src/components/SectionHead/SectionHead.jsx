import React from "react";
import '@components/SectionHead/SectionHead.css';

function SectionHead({ num, kicker, title, children }) {
    return (
        <div className="sec-head reveal">
            <p className="sec-kicker"><span>{num}</span> / {kicker}</p>
            <div className="sec-head-row">
                <h2 className="sec-title">
                    {title}
                    <span className="fill" aria-hidden="true">{title}</span>
                </h2>
                {children && <div className="sec-aside">{children}</div>}
            </div>
        </div>
    );
}

export default SectionHead;

import React, { useMemo } from "react";

const WIDTH = 1000;
const HEIGHT = 360;
const COUNT = 46;

// Small seeded PRNG so the chart is identical on every render and build.
function mulberry32(seed) {
    return () => {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function buildCandles() {
    const rand = mulberry32(2020);
    const candles = [];
    let close = 100;
    for (let i = 0; i < COUNT; i++) {
        const open = close;
        close = open + 1.1 + (rand() - 0.45) * 9;
        const high = Math.max(open, close) + rand() * 4;
        const low = Math.min(open, close) - rand() * 4;
        candles.push({ open, close, high, low });
    }
    return candles;
}

// Decorative uptrending candlestick chart behind the hero name.
function HeroChart() {
    const { candles, line, area } = useMemo(() => {
        const data = buildCandles();
        const lo = Math.min(...data.map((c) => c.low));
        const hi = Math.max(...data.map((c) => c.high));
        const y = (v) => HEIGHT - 12 - ((v - lo) / (hi - lo)) * (HEIGHT - 24);
        const step = WIDTH / COUNT;
        const mapped = data.map((c, i) => ({
            x: i * step + step / 2,
            w: step * 0.5,
            up: c.close >= c.open,
            yOpen: y(c.open),
            yClose: y(c.close),
            yHigh: y(c.high),
            yLow: y(c.low),
        }));
        const points = mapped.map((c) => `${c.x.toFixed(1)},${c.yClose.toFixed(1)}`);
        return {
            candles: mapped,
            line: `M${points.join(' L')}`,
            area: `M${points[0].split(',')[0]},${HEIGHT} L${points.join(' L')} L${mapped.at(-1).x.toFixed(1)},${HEIGHT} Z`,
        };
    }, []);

    return (
        <svg
            className="hero-chart"
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
            </defs>
            <g className="hero-candles">
                {candles.map((c, i) => (
                    <g key={i} className={c.up ? 'up' : 'down'} style={{ '--i': i }}>
                        <line x1={c.x} x2={c.x} y1={c.yHigh} y2={c.yLow} />
                        <rect
                            x={c.x - c.w / 2}
                            width={c.w}
                            y={Math.min(c.yOpen, c.yClose)}
                            height={Math.max(Math.abs(c.yClose - c.yOpen), 1.5)}
                        />
                    </g>
                ))}
            </g>
            <path className="hero-area" d={area} fill="url(#hero-area)" />
            <path className="hero-line" d={line} pathLength="1" vectorEffect="non-scaling-stroke" />
        </svg>
    );
}

export default HeroChart;

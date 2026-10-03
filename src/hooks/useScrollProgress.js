import { useEffect, useState } from "react";

// Tracks page scroll: progress (0–1), whether the user is scrolling down,
// and whether the page has scrolled past the top.
function useScrollProgress() {
    const [state, setState] = useState({ progress: 0, down: false, scrolled: false });

    useEffect(() => {
        let lastY = window.scrollY;
        let frame = 0;
        const update = () => {
            frame = 0;
            const y = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setState({
                progress: max > 0 ? Math.min(y / max, 1) : 0,
                down: y > lastY && y > 120,
                scrolled: y > 20,
            });
            lastY = y;
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    return state;
}

export default useScrollProgress;

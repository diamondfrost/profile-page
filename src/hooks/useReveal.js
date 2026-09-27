import { useEffect } from "react";

// Adds the `in` class to every `.reveal` element once it scrolls into view.
function useReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            elements.forEach((el) => el.classList.add('in'));
            return undefined;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

export default useReveal;

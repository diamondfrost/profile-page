import { useEffect } from "react";

// Marks every `.reveal` element with `data-in` once it scrolls into view. An attribute (not a class)
// is used so React re-renders that rewrite className don't hide the element again.
function useReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            elements.forEach((el) => el.setAttribute('data-in', ''));
            return undefined;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-in', '');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

export default useReveal;

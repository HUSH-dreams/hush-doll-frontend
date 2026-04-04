import {useEffect, useMemo, useState} from "react";

export function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(
        () => new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        ), [ref])

    useEffect(() => {
        const currentElement = ref.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.disconnect();
            }
        };
    }, [ref, observer]);

    return isIntersecting
}
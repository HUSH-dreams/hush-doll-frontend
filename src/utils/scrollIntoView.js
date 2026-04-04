export const scroll = (ref, behavior = 'smooth') => {
    ref?.current.scrollIntoView({
        behavior: behavior,
        block: 'end'
    });
}
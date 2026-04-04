import {useEffect, useState} from "react";
import {useWindowSize} from "./ScreenSize";

export function useIsSmall() {
    const [isSmall, setSmall] = useState(false);
    const [width, height] = useWindowSize();

    useEffect(() => {
        if (window.matchMedia('(max-device-width: 1023px)').matches) {
            setSmall(true);
        } else {
            setSmall(false);
        }
    },[width])

    return [isSmall, setSmall];
}
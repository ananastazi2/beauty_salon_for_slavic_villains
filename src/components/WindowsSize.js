import { useLayoutEffect, useState } from "react";

export default function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
            document.body.style.setProperty('--vw', window.innerWidth / 100); // to fix a problem with footer on phone in css
            document.body.style.setProperty('--vh', window.innerHeight / 100);    
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
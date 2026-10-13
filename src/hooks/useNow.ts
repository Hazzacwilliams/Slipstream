import { useState, useEffect } from "react";

export function useNow(): number | null {
    const [currentTime, setCurrentTime] = useState<number | null>(null);

    useEffect(() => {
        const tick = () => setCurrentTime(Date.now())
        tick()

        const id = setInterval(tick, 1000)

        return () => clearInterval(id)
    }, [])

    return currentTime;
}
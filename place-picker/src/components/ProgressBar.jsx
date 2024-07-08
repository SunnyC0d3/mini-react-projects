import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
        }, 10);

        return () => {
            console.log('cleared');
            clearInterval(interval);
        };
    }, []);

    return (
        <progress value={remainingTime} max={timer} />
    );
}
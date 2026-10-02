import type { MRDataRaces } from "../api/types";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function RaceCalender() {

    const [remaining, setRemaining] = useState<number>(0)

    const { data, loading, error } = useFetch<MRDataRaces>('https://api.jolpi.ca/ergast/f1/2026/races/')
    
    const raceCalender = data?.MRData.RaceTable.Races ?? []

    const now = Date.now();
    const nextRace = raceCalender.find(race => new Date(`${race.date}T${race.time}`).getTime() > now) ?? 0


    useEffect(() => {
        if (!nextRace) return
        const targetMs = new Date(`${nextRace.date}T${nextRace.time}`).getTime()
        const tick = () => setRemaining(targetMs - Date.now())
        tick()

        const id = setInterval(tick, 1000)

        return () => clearInterval(id)
    }, [nextRace])


    const totalSeconds = Math.floor(remaining / 1000)
    const days = Math.floor(totalSeconds / (60 * 60 * 24))
    const hours = Math.floor(totalSeconds / (60 * 60) % 24)
    const minutes = Math.floor(totalSeconds / 60 % 60)
    const seconds = Math.floor(totalSeconds % 60)


    if (loading) return (<p>Loading race calender...</p>)
    if (error) return (<p>Unable to retrieve race calender.. {error}</p>)

    return (
        <section className="w-fit ">
            <div>
                <p>{days}:{hours}:{minutes}{seconds ? days <= 1 : ''}</p>
            </div>
            {raceCalender.map(race => (
                <div className=" w-auto gap-5 flex flex-col items-center justify-center border-2 border-amber-50 pb-4 pt-4" key={race.round}>
                    <div className="flex flex-row">
                        <h1 className="text-blue-600 font-bold text-3xl">{race.round} - {race.raceName}</h1>
                    </div>
                    <p>{race.Circuit.circuitName}</p>
                    <p>{race.date} {race.time}</p>

                </div>
            ))}
        </section>
    )
}


import type { MRDataRaces } from "../api/types";
import { useFetch } from "../hooks/useFetch";
import { toDate } from "./utils/dateTime";
import { useNow } from "../hooks/useNow";

export default function NextRace() {

    const { data, loading, error } = useFetch<MRDataRaces>('https://api.jolpi.ca/ergast/f1/2026/races/');
    const now = useNow();

    const raceCalendar = data?.MRData.RaceTable.Races ?? [];

    if ((loading) || (now === null)) return (<p>Loading next race...</p>)
    if (error) return (<p>Error fetching next race...</p>)

    const nextRace = raceCalendar.find(race => toDate(race).getTime() > now)
    if (nextRace === undefined) return (<p>End of season! Come back next year!</p>)

    const weekendStartDate = toDate(nextRace.FirstPractice);
    const weekendEndDate = toDate(nextRace);

    const weekendDates = new Intl.DateTimeFormat("en-GB", { month: "long", day: "numeric" }).formatRange(weekendStartDate, weekendEndDate);

    const remaining = toDate(nextRace).getTime() - now;

    const totalSeconds = Math.floor(remaining / 1000)
    const days = Math.floor(totalSeconds / (60 * 60 * 24))
    const hours = Math.floor(totalSeconds / (60 * 60) % 24)
    const minutes = Math.floor(totalSeconds / 60 % 60)
    const seconds = Math.floor(totalSeconds % 60)


    return (
        <section className="flex flex-row justify-between items-end">
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Next race • Round {nextRace.round} of {raceCalendar.length}</p>
                <div className="font-barlow text-[88px] leading-none font-extrabold italic uppercase ">
                    <p className="text-neutral-100 uppercase">{nextRace.raceName.replace('Grand Prix', ' ')}</p>
                    <p className="text-red-500">Grand Prix</p>
                </div>
                <p className="text-neutral-400 text-lg">{nextRace.Circuit.circuitName} • {nextRace.Circuit.Location.locality}, {nextRace.Circuit.Location.country} • {weekendDates} </p>
            </div>

            <div className="flex flex-col">
                <p className="uppercase text-sm font-semibold tracking-widest text-neutral-400 mb-3">Lights out in</p>
                <div className="flex font-barlow bg-red-600 -skew-x-12 py-4 px-5 mx-3 text-neutral-50 *:w-20 gap-2 *:bg-neutral-950 *:py-2.5 text-center">
                    <div className="flex flex-col gap-1">
                        <p className="text-5xl font-extrabold tabular-nums">{String(days).padStart(2, "0")}</p>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 gap-1">Days</p>
                    </div>
                    <div>
                        <p className="text-5xl font-extrabold tabular-nums">{String(hours).padStart(2, "0")}</p>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 gap-1">Hrs</p>
                    </div>
                    <div>
                        <p className="text-5xl font-extrabold tabular-nums">{String(minutes).padStart(2, "0")}</p>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 gap-1">Min</p>
                    </div>
                    <div>
                        <p className="text-5xl font-extrabold tabular-nums">{String(seconds).padStart(2, "0")}</p>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 gap-1">Sec</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
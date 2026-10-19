import type { Races } from "../../../api/types";
import { toDate } from "../../utils/dateTime";

type NextRaceProps = {
    raceCalendar: Races[]
    nextRace: Races
    now: number
}

export default function NextRace({ raceCalendar, nextRace, now }: NextRaceProps) {

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
        <section className="w-full bg-neutral-900 border-b border-neutral-800">
            <div className="w-full max-w-7xl py-8 sm:py-14 px-4 sm:px-8 flex flex-row items-end flex-wrap gap-7 sm:gap-10 justify-between mx-auto">
                <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-500">Next race • Round {nextRace.round} of {raceCalendar.length}</p>
                    <div className="font-barlow text-5xl sm:text-[88px] leading-none font-extrabold italic uppercase ">
                        <p className=" uppercase">{nextRace.raceName.replace('Grand Prix', ' ')}</p>
                        <p className="text-red-500">Grand Prix</p>
                    </div>
                    <p className="text-neutral-400 text-sm sm:text-lg">{nextRace.Circuit.circuitName} • {nextRace.Circuit.Location.locality}, {nextRace.Circuit.Location.country}<span className="hidden sm:inline"> • </span><span className="block sm:inline">{weekendDates}</span></p>
                </div>

                <div className="flex flex-col w-full sm:w-fit">
                    <p className="uppercase text-xs font-semibold tracking-widest text-neutral-400 mb-2.5 sm:mb-3">Lights out in</p>
                    <div className="flex font-barlow bg-red-600 -skew-x-12 py-3 sm:py-4 px-3.5 sm:px-5 mx-2 sm:mx-3 text-neutral-50 sm:w-fit *:flex-1 sm:*:flex-none sm:*:w-20 gap-1.5 sm:gap-2 *:bg-neutral-950 *:py-2 sm:*:py-2.5 *:flex *:flex-col *:gap-0.5 sm:*:gap-1 text-center">
                        <div>
                            <p className="text-4xl sm:text-5xl font-extrabold tabular-nums mb-0.5 sm:mb-1">{String(days).padStart(2, "0")}</p>
                            <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">Days</p>
                        </div>
                        <div>
                            <p className="text-4xl sm:text-5xl font-extrabold tabular-nums">{String(hours).padStart(2, "0")}</p>
                            <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">Hrs</p>
                        </div>
                        <div>
                            <p className="text-4xl sm:text-5xl font-extrabold tabular-nums">{String(minutes).padStart(2, "0")}</p>
                            <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">Min</p>
                        </div>
                        <div>
                            <p className="text-4xl sm:text-5xl font-extrabold tabular-nums">{String(seconds).padStart(2, "0")}</p>
                            <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">Sec</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
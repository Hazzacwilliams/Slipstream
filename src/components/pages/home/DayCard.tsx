import type { DayWeather, Session } from "../../../api/types"
import { DropletIcon } from "../../icons/Icons"
import { weatherIconLookup } from "../../utils/weather"

type DayCardsProps = {
    sessions: Session[]
    weather?: DayWeather
    isRaceDay?: boolean
}

export default function DayCard({ sessions, weather, isRaceDay = false }: DayCardsProps) {

    const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(sessions[0].start);
    const date = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(sessions[0].start);
    const time = new Intl.DateTimeFormat("en-GB", { timeStyle: "short" });

    const conditions = weather ? weatherIconLookup(weather.code) : undefined;

    const chanceofRain = weather?.rainChance ? `${weather?.rainChance}% chance of rain` : "No chance of rain";


    return (
        <div className="flex flex-col gap-4 bg-neutral-900 border border-neutral-800 p-5">
            <div className="flex flex-row justify-between">
                <h3 className="font-barlow text-2xl font-extrabold italic uppercase tracking-wide text-neutral-100">
                    <span className={`${isRaceDay ? "text-red-500" : "text-neutral-100"}`}>{weekday} </span>
                    <span className="font-bold text-neutral-400">{date}</span>
                </h3>
                {weather && conditions &&
                    <div className="flex flex-row justify-center items-center gap-2">
                        <conditions.Icon className="text-neutral-300 " />
                        <span className="font-barlow text-2xl font-extrabold">{Math.round(weather.high)}°</span>
                        <span className="text-sm text-neutral-400">{Math.round(weather.low)}°</span>
                    </div>
                }

            </div>
            <ul>
                {sessions.map(session => (
                    <li key={session.name} className={`flex flex-row justify-between text-base py-2.5 border-t border-neutral-800 ${isRaceDay ? "font-bold" : ""}`}>
                        <span>{session.name}</span>
                        <span className="font-semibold tabular-nums">{time.format(session.start)}</span>
                    </li>
                ))}
            </ul>
            {weather && conditions &&
                <div className="flex flex-row gap-1.5 items-center">
                    <DropletIcon className="size-3.5 " />
                    <span className="text-sm text-neutral-400">{chanceofRain} • {conditions.label}</span>
                </div>
            }

        </div>
    )
}
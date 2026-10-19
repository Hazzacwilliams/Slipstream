import { toSessions } from "../../utils/dateTime";
import { weatherForDay } from "../../utils/weather";
import { useFetch } from "../../../hooks/useFetch";
import type { Races, WeatherForecast } from "../../../api/types";

import DayCard from "./DayCard";

type RaceWeekendProps = {
    raceCalendar: Races[]
    nextRace: Races
    now: number
}

export default function RaceWeekend({ nextRace }: RaceWeekendProps) {

    const lat = nextRace.Circuit.Location.lat;
    const long = nextRace.Circuit.Location.long;
    const { data } = useFetch<WeatherForecast>(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=16`);

    const getTimeZone = new Intl.DateTimeFormat("en-US").resolvedOptions().timeZone;
    const timeZoneSplit = getTimeZone.split("/");
    const properTZ = timeZoneSplit.at(-1)?.replaceAll("_", " ") || "your local";

    const card1 = [
        ...toSessions("Practice 1", nextRace.FirstPractice), 
        ...toSessions("Practice 2", nextRace.SecondPractice), 
        ...toSessions("Sprint Qualifying", nextRace.SprintQualifying)
    ]; 

    const card2 = [
        ...toSessions("Practice 3", nextRace.ThirdPractice),
        ...toSessions("Sprint", nextRace.Sprint),
        ...toSessions("Qualifying", nextRace.Qualifying)
    ];

    const card3 = toSessions("Race", nextRace);

    const weather1 = data ? weatherForDay(data, card1[0].start) : undefined;
    const weather2 = data ? weatherForDay(data, card2[0].start) : undefined;
    const weather3 = data ? weatherForDay(data, card3[0].start) : undefined;

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-1 sm:gap-0 flex-wrap mb-4 sm:mb-5">
                <div>
                    <p className="font-barlow text-2xl sm:text-3xl font-extrabold italic uppercase tracking-wide text-neutral-100 ">race weekend</p>
                </div>
                <div>
                    <p className="text-sm text-neutral-400"><span className="hidden sm:inline">Session times in </span>{properTZ} time • Forecast for {nextRace.Circuit.Location.locality}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <DayCard sessions={card1} weather={weather1}/>
                <DayCard sessions={card2} weather={weather2}/>
                <DayCard sessions={card3} weather={weather3} isRaceDay/>
            </div>
        </div>
    )
}
import { useFetch } from "../../../hooks/useFetch";
import type { MRDataRaces } from "../../../api/types";
import { toDate } from "../../utils/dateTime";
import { useNow } from "../../../hooks/useNow";
import NextRace from "./NextRace"
import RaceWeekend from "./RaceWeekend"
import Championships from "./Championships";

export default function Home() { 

    const { data, loading, error } = useFetch<MRDataRaces>('https://api.jolpi.ca/ergast/f1/current/races/');
    const now = useNow();

    const raceCalendar = data?.MRData.RaceTable.Races ?? [];

    if ((loading) || (now === null)) return (<p>Loading next race...</p>)
    if (error) return (<p>Error fetching next race...</p>)

    const nextRace = raceCalendar.find(race => toDate(race).getTime() > now)
    if (nextRace === undefined) return (<p>End of season! Come back next year!</p>)
    
    const raceInfo = { raceCalendar, nextRace, now }
    

    return (
        <>
            <NextRace {...raceInfo} />
            <main className="px-8 flex flex-col pt-12 pb-16 gap-14">
                <RaceWeekend {...raceInfo} />
                <Championships {...raceInfo}/>
            </main>

        </>
    )
}
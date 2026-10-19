import type { Races } from "../../../api/types";
import { useStandings } from "../../../hooks/useStandings";
import Podium from "./Podium";

type ChampionshipsProps = {
    raceCalendar: Races[]
    nextRace: Races
    now: number
}

export default function Championships({ raceCalendar, nextRace }: ChampionshipsProps) {

    

    const fullDriverStandings = useStandings('driver');
    const top3Drivers = fullDriverStandings.result?.DriverStandings?.slice(0, 3);


    const fullConstructorsStandings = useStandings('constructor');
    const top3Constructors = fullConstructorsStandings.result?.ConstructorStandings?.slice(0, 3);


    if (fullDriverStandings.loading || fullConstructorsStandings.loading) return <p>Loading podium...</p>
    if (fullDriverStandings.error || fullConstructorsStandings.error) return <p>Unable to load podium...</p>

    const raceNo = fullDriverStandings.result?.round;
    const totalRaces = raceCalendar.length;

    return (
        <div>
            <div className="flex flex-col mb-5 sm:mb-6">
                <h3 className="font-barlow text-2xl sm:text-3xl font-extrabold italic uppercase tracking-wide text-neutral-100 mb-1">Championships</h3>
                <div className="flex flex-row justify-between text-sm text-neutral-400">
                    <span>After round {raceNo} of {totalRaces}</span>
                    <span className="font-semibold uppercase tracking-wider hover:text-neutral-100 cursor-pointer min-h-11">Full standings →</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 sm:gap-8">
                {top3Drivers &&
                <div>
                    <h3 className="font-barlow text-lg sm:text-xl font-bold uppercase tracking-wider text-neutral-400 mb-3 sm:mb-4">Drivers</h3>
                    <Podium top3={top3Drivers} />
                </div>
                }
                {top3Constructors &&
                <div>
                    <h3 className="font-barlow text-lg sm:text-xl font-bold uppercase tracking-wider text-neutral-400 mb-3 sm:mb-4">Constructors</h3>
                    <Podium top3={top3Constructors} />
                </div>
                }
            </div>
        </div>
    )
}
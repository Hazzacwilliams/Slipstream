import type { ConstructorStanding, DriverStanding } from "../../../api/types";
import { podiumNumberSize, podiumStepStyle, teamColour } from "../../styling/teamColours";

type PodiumProps = {
    top3: DriverStanding[] | ConstructorStanding[]
}

export default function Podium({ top3 }: PodiumProps) {

    const topPoints = top3[0]?.points;

    return (
        <div className="grid grid-cols-3 gap-2 items-end">
            {
                top3.map(podium => {
                    const teamid = "Driver" in podium ? podium.Constructors.at(-1)?.constructorId : podium.Constructor.constructorId;
                    const colour = (teamid ? teamColour[teamid] : '#a3a3a3') ?? '#a3a3a3';
                    return (
                        "Driver" in podium ?
                            <div key={podium.position} className={`flex flex-col ${podium.position === '2' ? "order-first" : ""}`}>
                                <div className={`flex flex-col bg-neutral-900 border-x border-x-neutral-800 border-t-4 pt-4 px-3 pb-5 justify-center items-center gap-1`} style={{ borderTopColor: colour }}>
                                    <div className="font-barlow text-4xl font-extrabold italic tracking-wide">{podium.Driver.code}</div>
                                    <div className="text-sm font-semibold">{podium.Driver.givenName} {podium.Driver.familyName}</div>
                                    <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400">{podium.Constructors.at(-1)?.name}</div>
                                    <div className="font-barlow text-3xl font-extrabold tabular-nums pt-2">{podium.points} <span className="pl-1 text-sm font-bold text-neutral-400">PTS</span></div>
                                </div>
                                <div className={`${podiumStepStyle[podium.position]} flex justify-center items-center`}><span className={`font-barlow font-extrabold italic ${podiumNumberSize[podium.position]}`}>{podium.position}</span></div>
                            </div>
                            :
                            <div key={podium.position} className={`flex flex-col ${podium.position === '2' ? "order-first" : ""}`}>
                                <div className="flex flex-col bg-neutral-900 border-x border-x-neutral-800 border-t-4 pt-4 px-3 pb-5 justify-center items-center gap-1" style={{ borderTopColor: colour }}>
                                    <div className="font-barlow text-3xl font-extrabold italic uppercase">{podium.Constructor.name}</div>
                                    <div className="text-sm font-semibold">{podium.wins} wins</div>
                                    <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400">{podium.position === "1" ? "Leader" : "-" + (parseInt(topPoints) - parseInt(podium.points))}</div>
                                    <div className="font-barlow text-3xl font-extrabold tabular-nums pt-2">{podium.points} PTS</div>
                                </div>
                                <div className={`${podiumStepStyle[podium.position]} flex justify-center items-center`}><span className={`font-barlow font-extrabold italic ${podiumNumberSize[podium.position]}`}>{podium.position}</span></div>
                            </div>
                    )
                })
            }
        </div>
    )
}



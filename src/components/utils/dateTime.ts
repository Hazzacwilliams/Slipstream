import type { Session, SessionTime } from "../../api/types";

export function toDate(session: SessionTime): Date {
    return new Date(`${session.date}T${session.time}`);
}

export function toSessions(name: string, time?: SessionTime): Session[] {
    if(!time) return []
    return [{name, start: toDate(time)}]
}

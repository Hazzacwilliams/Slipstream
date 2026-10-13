type HasDateTime = {
    date: string
    time: string
}

export function toDate(session: HasDateTime): Date {
    return new Date(`${session.date}T${session.time}`);
}
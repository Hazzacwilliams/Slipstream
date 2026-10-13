import type { MRDataRaces } from "../api/types";
import { useFetch } from "../hooks/useFetch";

export default function LastRace() {

    const { data, loading, error } = useFetch<MRDataRaces>('https://api.jolpi.ca/ergast/f1/2026/results/');
    if (loading) return (<p>Loading results...</p>)
    if (error) return (<p>Unable to fetch results</p>)
    const results = data?.MRData.RaceTable.Races ?? []

    return (
        <div>
            { results.map(result => (
                result.raceName
            )) }
        </div>
    )
}
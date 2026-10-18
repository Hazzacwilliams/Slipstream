import type { MRDataStandings } from "../api/types";
import { useFetch } from "./useFetch";

export function useStandings(fetchType: "driver" | "constructor") {

    const { data, loading, error } = useFetch<MRDataStandings>(`https://api.jolpi.ca/ergast/f1/current/${fetchType}standings/`);
    const result = data?.MRData.StandingsTable.StandingsLists[0];



    return { result, loading, error };
}

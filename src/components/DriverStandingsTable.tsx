import { type MRDataStandings } from "../api/types";
import { useFetch } from "../hooks/useFetch";
import DataRow from "./styling/table/DataRow";
import DataTable from "./styling/table/DataTable";
import DataCell from "./styling/table/DataCell";

export default function DriverStandingsTable() {

    const { data, loading, error } = useFetch<MRDataStandings>('https://api.jolpi.ca/ergast/f1/2026/driverstandings/')
    if (loading) return (<p>Loading standings...</p>)
    if (error) return (<p>Unable to retrieve standings.. {error}</p>)
    const standingList = data?.MRData.StandingsTable.StandingsLists[0].DriverStandings ?? []


    return (
        <DataTable headers={["Position", "Points", "Driver Name", "Driver Number", "Constructor"]}>
            {standingList.map(list => {
                const isLeader = list.position === "1"
                return (
                    <DataRow key={list.position}>
                        <DataCell>
                            <span className={`inline-block ${isLeader ? "bg-yellow-600" : "bg-neutral-700"} text-white font-momo font-bold px-2 py-1 rounded min-w-10 text-center`}>
                                {list.position}
                            </span>
                        </DataCell>
                        <DataCell>
                            <span className={`inline-block ${isLeader ? "bg-yellow-600" : "bg-neutral-700"} text-white font-momo font-bold px-2 py-1 rounded min-w-10 text-center`}>
                                {list.points}
                            </span>
                        </DataCell>
                        <DataCell>
                            <span className={`${isLeader ? "text-yellow-400 font-bold" : "text-neutral-100"}`}>
                                {list.Driver.givenName} {list.Driver.familyName}
                            </span>
                        </DataCell>
                        <DataCell>
                            <span className={`inline-block ${isLeader ? "bg-yellow-600" : "bg-neutral-700"} text-white font-momo font-bold px-2 py-1 rounded min-w-10 text-center`}>
                                {list.Driver.permanentNumber}
                            </span>
                            </DataCell>
                        <DataCell>
                            <span className={`${isLeader ? "text-yellow-400 font-bold" : "text-neutral-100"}`}>
                                {list.Constructors[0].name}     
                            </span>
                            </DataCell>
                    </DataRow>
                )
            })}
        </DataTable>
    )
}
import { useEffect } from 'react';
import { type MRDataDrivers } from '../api/types'
import { useFetch } from "../hooks/useFetch";
import DataCell from './styling/table/DataCell';
import DataRow from './styling/table/DataRow';
import DataTable from './styling/table/DataTable';

export default function DriverList() {

    const { data, loading, error } = useFetch<MRDataDrivers>('https://api.jolpi.ca/ergast/f1/current/drivers');
    if (loading) return (<p>Loading drivers...</p>)
    if (error) return (<p>Unable to retrieve drivers.. {error}</p>)
    const drivers = data?.MRData.DriverTable.Drivers ?? []
    const filteredDrivers = drivers.filter(driver => driver.permanentNumber != null)
    

    return (
        <DataTable headers={["Number", "Driver", "Nationality"]}>
            {filteredDrivers.map(driver => (
                <DataRow key={driver.driverId}>
                    <DataCell><span className="inline-block bg-red-600 text-white font-momo font-bold px-2 py-1 rounded min-w-10 text-center">{driver.permanentNumber ?? '-'}</span></DataCell>
                    <DataCell>{driver.givenName} {driver.familyName}</DataCell>
                    <DataCell>{driver.nationality ?? '-'}</DataCell>
                </DataRow>
            ))}
        </DataTable>
    )
}
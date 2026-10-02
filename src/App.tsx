import React from "react"
import ReactDOM from "react-dom/client"
import { Routes, Route } from "react-router"

import DriverList from "./components/DriverList"
import DriverStandingsTable from "./components/DriverStandingsTable"
import RaceCalender from "./components/RaceCalender"
import AppHeader from "./components/AppHeader"
function App() {

  return (
    <main>
      <AppHeader />
    </main>
    
  )
}

/**
 * <main className="min-h-screen flex flex-col items-center bg-neutral-950 text-neutral-100 p-8">
      <h1 className="text-6xl font-bold tracking-tight">Slipstream</h1>
      <p className="mt-4 text-neutral-400 text-lg">
        F1 companion app — work in progress
      </p>
      <DriverList />
      <DriverStandingsTable />
      <RaceCalender />
    </main>
 */

export default App

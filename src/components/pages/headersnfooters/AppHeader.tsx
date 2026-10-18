export default function AppHeader() {
    return (
        <header>
            { /* Top strip */ }
            <div className="h-8 bg-red-600 px-4 sm:px-8 flex justify-between items-center text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-white"> 
                { /* Subtitle */ }
                <p>An F1 Dashboard App - Work in Progress</p>
                { /* Season Date */ }
                <p className="hidden sm:block">2026 Season</p>
            </div>
            { /* Main bar */ }
            <div className="sm:h-18 bg-neutral-900 border-b border-b-neutral-800 px-4 sm:px-8 flex flex-col sm:flex-row justify-between sm:items-center font-barlow">
                <div className="flex flex-row h-14 sm:h-18 items-center">
                   { /* Speed lines */ }
                    <div className="flex flex-col justify-center items-end mr-3 gap-y-1">
                        <div className="bg-red-600 h-1 w-6 -skew-x-12"></div>
                        <div className="bg-red-600 h-1 w-4 -skew-x-12"></div>
                        <div className="bg-red-600 h-1 w-2 -skew-x-12"></div>
                    </div>
                    { /* Brand */ }
                    <h1 className="text-2xl sm:text-3xl font-extrabold italic uppercase tracking-wide"><span className="text-neutral-100">SLIP</span><span className="text-red-500">STREAM</span></h1>
                </div>
                <div className="sm:flex grid grid-cols-3 sm:gap-x-2 text-base sm:text-lg font-bold uppercase tracking-wider pt-2 pb-3 sm:py-0 text-center">
                    <span className="py-1.5 sm:px-4 text-neutral-400 hover:text-neutral-100 active:bg-red-600 active:-skew-x-12 cursor-pointer">
                        Drivers
                    </span>
                    <span className="py-1.5 sm:px-4 text-neutral-400 hover:text-neutral-100 active:bg-red-600 active:-skew-x-12 cursor-pointer">
                        Standings
                    </span>
                    <span className="py-1.5 sm:px-4 text-neutral-400 hover:text-neutral-100 active:bg-red-600 active:-skew-x-12 cursor-pointer">
                        Calendar
                    </span>
                </div>

            </div>

        </header>
    )
}
export default function AppFooter() {
    return (
        <footer className="flex flex-col gap-1.5 sm:flex-wrap sm:flex-row justify-between text-xs text-neutral-400 font-light bg-neutral-900 py-5 px-4 sm:py-6 sm:px-8 border-t border-t-neutral-800">
            <span>Built by Harry Williams • <a href="https://github.com/Hazzacwilliams" className="underline">GitHub</a></span>
            <span>Race data: Jolpica F1 API • Weather: <a href="https://open-meteo.com/">Open-Meteo</a></span>
        </footer>
    )
}
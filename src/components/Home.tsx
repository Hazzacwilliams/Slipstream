import AppHeader from "./AppHeader"
import NextRace from "./NextRace"

export default function Home() {
    return (
        <section>
            <AppHeader />
            <main className="bg-neutral-950 h-screen p-8">
                <NextRace />
            </main>
            
        </section>
    )
}
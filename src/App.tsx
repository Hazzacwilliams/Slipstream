import AppFooter from "./components/pages/headersnfooters/AppFooter"
import AppHeader from "./components/pages/headersnfooters/AppHeader"
import Home from "./components/pages/home/Home"
function App() {

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100">
      <AppHeader />
      <Home />
      <AppFooter />
    </div>
    
  )
}

export default App

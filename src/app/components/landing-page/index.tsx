
import HeroPage from "./hero"
import AboutPage from "./about"
import EventsPage from "./events"

const LandingPage = () => {
  return (
    <div className="hero_bg">
      <HeroPage/>
      <AboutPage/>
      <EventsPage/>
    </div>
  )
}

export default LandingPage

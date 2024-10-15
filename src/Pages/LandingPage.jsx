import { Fragment } from "react"
import Navbar from "../Components/NavBar"
import HeroSection from "../Components/Landing/Hero"
import Cards from "../Components/Landing/Cards"

const LandingPage = () => {
    return <Fragment>
        <Navbar />
        <HeroSection />
        <Cards />
    </Fragment>
}

export default LandingPage
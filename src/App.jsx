
import { createContext, Fragment, useState } from "react"
import Ecommerce from "./Pages/Ecommerce"
import Grid from "./Components/Grid"
import LearnState from "./Components/state"
import A from "./Components/A"
// import Carousel from "react-bootstrap/Carousel"
import Context from "./Pages/context"

export const CounterContext = createContext()

const App = () => {

    const [counter, setCounter] = useState(0)

    const contextValues = {
        counter, setCounter
    }

    return <CounterContext.Provider value={contextValues}>
        {/* <Ecommerce /> */}
        {/* <Grid /> */}
        {/* <LearnState /> */}
        <Context />
        {/* <A /> */}
    </CounterContext.Provider>
}

export default App
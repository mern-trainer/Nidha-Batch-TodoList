import ApiCall from "./Pages/ApiCall"
import Effect from "./Pages/Effect"
import LearnState from "./Components/state"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import A from "./Pages/A"
import B from "./Pages/B"

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/effect" Component={Effect} />
            <Route path="/ecommerce" Component={ApiCall} />
            <Route path="/todo" Component={LearnState} />

            <Route path="/a" Component={A} />
            <Route path="/b" Component={B} />
        </Routes>
    </BrowserRouter>
}

export default App
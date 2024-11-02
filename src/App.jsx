import ApiCall from "./Pages/ApiCall"
import Effect from "./Pages/Effect"
import LearnState from "./Components/state"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import A from "./Pages/A"
import B from "./Pages/B"
import ProfileUpdate from "./Pages/ProfileUpdate"
import PasswordUpdate from "./Pages/PasswordUpdate"

const App = () => {

    return <BrowserRouter>
        <Routes>
            {/* <Route path="/effect" Component={Effect} />
            <Route path="/ecommerce" Component={ApiCall} />
            <Route path="/todo" Component={LearnState} />

            <Route path="/settings/profile/info" Component={A} />
            <Route path="/settings/profile/update" Component={B} />
            <Route path="/settings/profile/password" Component={B} /> */}
            <Route path="/">
                <Route path="" Component={LearnState} />
                <Route path="settings">
                    <Route path="" Component={Effect} />
                    <Route path="profile">
                        <Route path="update" Component={ProfileUpdate} />
                        <Route path="password" Component={PasswordUpdate} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App
import LearnState from "./Components/state"
import ApiCall from "./Pages/ApiCall"
import Effect from "./Pages/Effect"
import Form from "./Pages/Form"
// import TaskList from "./Components/TaskList"
import ShopPage from "./Pages/ShopPage"
import { CartProvider } from "./Providers/CartProvider"
import { CounterProvider } from "./Providers/CounterProvider"

const App = () => {

    return <CounterProvider>
        <CartProvider>
            {/* <ShopPage /> */}
            {/* <LearnState /> */}
            {/* <Effect /> */}
            {/* <Form /> */}
            <ApiCall />
        </CartProvider>
    </CounterProvider>
}

export default App
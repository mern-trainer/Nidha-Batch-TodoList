import LearnState from "./Components/state"
// import TaskList from "./Components/TaskList"
import ShopPage from "./Pages/ShopPage"
import { CartProvider } from "./Providers/CartProvider"
import { CounterProvider } from "./Providers/CounterProvider"

const App = () => {

    return <CounterProvider>
        <CartProvider>
            {/* <ShopPage /> */}
            <LearnState />
        </CartProvider>
    </CounterProvider>
}

export default App
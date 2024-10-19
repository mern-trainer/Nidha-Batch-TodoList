import ShopPage from "./Pages/ShopPage"
import { CartProvider } from "./Providers/CartProvider"
import { CounterProvider } from "./Providers/CounterProvider"

const App = () => {

    return <CounterProvider>
        <CartProvider>
            <ShopPage />
        </CartProvider>
    </CounterProvider>
}

export default App
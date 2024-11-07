import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Toaster } from 'react-hot-toast';
import { CounterProvider } from './Providers/CounterProvider.jsx';
import { CartProvider } from './Providers/CartProvider.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';

const root = createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <CounterProvider>
            <CartProvider>
                <App />
                <Toaster position="top-right"/>
            </CartProvider>
        </CounterProvider>
    </Provider>
)

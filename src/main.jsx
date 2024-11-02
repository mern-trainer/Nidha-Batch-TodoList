import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Toaster } from 'react-hot-toast';
import { CounterProvider } from './Providers/CounterProvider.jsx';
import { CartProvider } from './Providers/CartProvider.jsx';

const root = createRoot(document.getElementById("root"))

root.render(
    <CounterProvider>
        <CartProvider>
            <App />
            <Toaster position="top-right"/>
        </CartProvider>
    </CounterProvider>
)

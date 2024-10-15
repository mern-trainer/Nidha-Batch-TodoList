import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'
import "./index.css"
import { Toaster } from 'react-hot-toast';

const root = createRoot(document.getElementById("root"))

root.render(<StrictMode>
    <App />
    <Toaster position="top-right"/>
</StrictMode>)

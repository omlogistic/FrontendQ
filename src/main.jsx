import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "./auth/AuthContext";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <App />
</AuthProvider>
);


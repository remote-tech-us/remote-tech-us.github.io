import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContactsPage from './pages/ContactsPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <NavBar /> {/* NavBar is now inside the Router context! */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* Dynamic route for specific contacts */}
        <Route path="/contacts/:id" element={<ContactsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

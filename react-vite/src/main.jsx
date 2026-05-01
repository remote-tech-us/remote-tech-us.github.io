import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/footer.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './hooks/ScrollToTop.jsx';

import './index.css'
import App from './App.jsx'
import AboutPage from './pages/about.jsx';
import CareersPage from './pages/careers.jsx';
import ContactsPage from './pages/contacts.jsx';
import PrivacyPage from './pages/privacy-policy.jsx';
import TermsPage from './pages/terms-of-service.jsx';
import ClientsPage from './pages/clients.jsx';
import ProductsPage from './pages/Products.jsx';
import ServicesPage from './pages/Services.jsx';

{/* Notes 
    Use HashRouter if:
      You are deploying to GitHub Pages (which doesn't support easy SPA redirection).
      You are running a small internal tool on Unraid or a simple file server and don't want to mess with Nginx/Apache configuration files.

    Use BrowserRouter if:
      You are building a professional, client-facing site where SEO matters.
      You want clean, "pretty" URLs.
      You have control over your server configuration (e.g., using Nginx with a try_files $uri /index.html; rule).
*/}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <NavBar /> {/* NavBar is now inside the Router context! */}
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          {/* Dynamic route for specific contacts */}
          <Route path="/contacts/:id" element={<ContactsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

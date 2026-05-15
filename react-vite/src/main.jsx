// src/main.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import NavBar from './components/NavBar.jsx';
import Footer from './components/footer.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './hooks/ScrollToTop.jsx';

import './index.css'
import App from './App.jsx'
import AboutPage from './pages/about.jsx';
import TechStackPage from './pages/tech-stack.jsx';
import CareersPage from './pages/careers.jsx';
import ContactUsPage from './pages/contact-us.jsx';
import PrivacyPage from './pages/privacy-policy.jsx';
import TermsPage from './pages/terms-of-service.jsx';
import ClientsPage from './pages/clients.jsx';
import ProductsPage from './pages/products.jsx';
import ServicesPage from './pages/services.jsx';
import CaseStudiesPage from './pages/case-studies.jsx';
import DevDocsPage from './pages/dev-docs.jsx';
import DynamicProductsPage from './pages/dynamic-products.jsx';
import DynamicServicesPage from './pages/dynamic-services.jsx';
import MissionsPage from './pages/missions.jsx';

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
    <HelmetProvider>
    <HashRouter>
      <NavBar /> {/* NavBar is now inside the Router context! */}
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
          {/* Dynamic route for specific contact-us */}
          <Route path="/contact-us/:id" element={<ContactUsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/dev-docs" element={<DevDocsPage />} />
          <Route path="/products/:productId" element={<DynamicProductsPage />} />
          <Route path="/services/:serviceId" element={<DynamicServicesPage />} />
          <Route path="/mission" element={<MissionsPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);

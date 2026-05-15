// src/main.jsx
import React, { lazy, Suspense }  from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import NavBar from './components/NavBar.jsx';
import Footer from './components/footer.jsx';
import ScrollToTop from './hooks/ScrollToTop.jsx';
import './index.css'

// Lazy imports:
const App = lazy(() => import('./App.jsx'));
const AboutPage = lazy(() => import('./pages/about.jsx'));
const TechStackPage = lazy(() => import('./pages/tech-stack.jsx'));
const CareersPage = lazy(() => import('./pages/careers.jsx'));
const ContactUsPage = lazy(() => import('./pages/contact-us.jsx'));
const PrivacyPage = lazy(() => import('./pages/privacy-policy.jsx'));
const TermsPage = lazy(() => import('./pages/terms-of-service.jsx'));
const ClientsPage = lazy(() => import('./pages/clients.jsx'));
const ProductsPage = lazy(() => import('./pages/products.jsx'));
const ServicesPage = lazy(() => import('./pages/services.jsx'));
const CaseStudiesPage = lazy(() => import('./pages/case-studies.jsx'));
const DevDocsPage = lazy(() => import('./pages/dev-docs.jsx'));
const DynamicProductsPage = lazy(() => import('./pages/dynamic-products.jsx'));
const DynamicServicesPage = lazy(() => import('./pages/dynamic-services.jsx'));
const MissionsPage = lazy(() => import('./pages/missions.jsx'));

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
        {/* 2. Wrap Routes in Suspense */}
        {/* The fallback is what shows for a split second while the page loads */}
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
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
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);

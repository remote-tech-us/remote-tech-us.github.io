// src/main.jsx
import React, { lazy, Suspense }  from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import NavBar from './components/NavBar.jsx';
import Footer from './components/footer.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ScrollToTop from './hooks/ScrollToTop.jsx';
import './index.css'

// A helper function to handle chunk load errors
const lazyWithRetry = (componentImport) => 
  lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      // If the chunk fetch fails (404), refresh the page once to get the new manifest
      console.error("Chunk load failed, refreshing...", error);
      window.location.reload();
      return { default: () => null }; // Return a empty component while reloading
    }
  });

// Lazy imports:
// With this delayed version:
const AboutPage = lazyWithRetry(() => {
  return Promise.all([
    import('./pages/about.jsx'),
    new Promise(resolve => setTimeout(resolve, 3000)) // Forces 3s delay
  ]).then(([moduleExports]) => moduleExports);
});
//const AboutPage = lazy(() => import('./pages/about.jsx'));
const App = lazy(() => import('./App.jsx'));
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
const InquiryPage = lazy(() => import('./pages/inquiry.jsx'));

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
        <Suspense fallback={<LoadingSpinner />}>
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
            <Route path="/inquiry" element={<InquiryPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// src/hooks/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard window scroll
    window.scrollTo(0, 0);
    
    // Immediate fallback for document elements if window is trapped
    if (document.documentElement) {
      document.documentElement.scrollTo(0, 0);
    }
    if (document.body) {
      document.body.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

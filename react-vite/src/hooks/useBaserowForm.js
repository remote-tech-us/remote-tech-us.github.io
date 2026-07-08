// src/hooks/useBaserowForm.js
import { useState } from 'react';

export function useBaserowForm(formId = import.meta.env.VITE_BASEROW_FORM_ID) {
  const [status, setStatus] = useState('idle');
  const [honeypot, setHoneypot] = useState('');
  
  const baseUrl = import.meta.env.VITE_BASEROW_API_URL;

  const submitForm = async (formData, product, projectType, onSuccess) => {
    // Spam protection check
    if (honeypot) {
      setStatus('success');
      return;
    }
    setStatus('loading');

    // Exact mapping derived from live Baserow schema dump
    const payload = {
      "field_5000": formData.message,        // Detailed Specifications (long_text)
      "field_5001": true,                    // Active (boolean)
      "field_5002": formData.name,           // Full Name (text)
      "field_5003": formData.email,          // Email Address (email)
      "field_5004": product,                 // Target Product Stack (text)
      "field_5005": projectType,             // Project Classification (text)
      "field_5006": "New"                    // Status
    };

    try {
      const response = await fetch(`${baseUrl}/api/database/views/form/${formId}/submit/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        console.error("Baserow rejection details:", errData || response.statusText);
        throw new Error(`Server returned status: ${response.status}`);
      }

      setStatus('success');
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Baserow transmission failure:", error);
      setStatus('error');
    }
  };

  return { status, honeypot, setHoneypot, submitForm };
}

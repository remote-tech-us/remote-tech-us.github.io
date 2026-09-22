// src/hooks/useSubmitRequest.js
import { useState } from 'react';

export function useSubmitRequest(endpointUrl) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [honeypot, setHoneypot] = useState('');

  const submitForm = async (formData, product, projectType, onSuccessCallback) => {
    // 🤫 Trigger native Honeypot block if the hidden field was filled out by a bot
    if (honeypot.trim() !== '') {
      setStatus('success'); // Trick the bot into thinking it succeeded
      if (onSuccessCallback) onSuccessCallback();
      return;
    }

    setStatus('loading');

    const payload = {
      name: formData.name,
      email: formData.email,
      target_product_stack: product,
      project_classification: projectType,
      specifications: formData.message,
    };

    try {
      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        if (onSuccessCallback) onSuccessCallback();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Transmission fault:', error);
      setStatus('error');
    }
  };

  return { status, honeypot, setHoneypot, submitForm };
}


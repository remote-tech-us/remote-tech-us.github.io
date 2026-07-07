// src/hooks/useBaserowForm.js
import { useState, useEffect } from 'react';

export function useBaserowForm(formId) {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [honeypot, setHoneypot] = useState('');
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  const submitForm = async (formData, product, projectType, callback) => {
    // 🛡️ SPAM CHECK 1: Honeypot field triggered
    if (honeypot !== '') {
      console.warn("Spam bot detected via honeypot trap.");
      setStatus('success'); 
      if (callback) callback();
      return;
    }

    // 🛡️ SPAM CHECK 2: Velocity check (sub-2.5 second bot submission)
    const activeDuration = (Date.now() - loadTime) / 1000;
    if (activeDuration < 2.5) {
      console.warn("Spam bot detected via velocity test.");
      setStatus('success');
      if (callback) callback();
      return;
    }

    setStatus('loading');
 
    const payload = {
      "Name": formData.name,
      "Email": formData.email,
      "Product": product,
      "Project": projectType,
      "Notes": formData.message,
      "Active": true // Passes the boolean true to your required Active checkbox field
    };
    //const payload = {
    //  "Question": `[Product: ${product}] [Project Type: ${projectType}] \n\nBrief:\n${formData.message}`,
    //  "Prepared by": formData.name,
    //  "Notes": `Contact Email: ${formData.email}`,
    //  "Department": "Sales",
    //  "Type": "Communication",
    //  "Role": "External Prospect"
    //};

    try {
      //const response = await fetch(`https://br.remote-tech.us/form/-fvyYPZMBZ0gRZF1_4NzBS7wM9_QFWEICjhdQJnbfeU/submit/`, {
      const response = await fetch(`https://br.remote-tech.us/form/sNsqHzGLgd8d3sMbLaep8ZDh-t-bAr7xUorFUcxkGg8/submit/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'cors'
      });

      if (response.ok) {
        setStatus('success');
        if (callback) callback();
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Baserow validation reject metrics:", errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error("Network or CORS routing block:", err);
      setStatus('error');
    }
  };

  return {
    status,
    setStatus,
    honeypot,
    setHoneypot,
    submitForm
  };
}


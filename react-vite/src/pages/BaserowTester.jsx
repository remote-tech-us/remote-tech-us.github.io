// src/pages/BaserowTester.jsx
import { useState } from 'react';

export default function BaserowTester() {
  const [log, setLog] = useState('Ready to test...');
  const [loading, setLoading] = useState(false);

  // Hardcoded for validation; move to import.meta.env once verified
  const API_URL = "https://br.remote-tech.us";
  const FORM_ID = "sNsqHzGLgd8d3sMbLaep8ZDh-t-bAr7xUorFUcxkGg8";

  const runTest = async () => {
    setLoading(true);
    setLog('Initiating POST request to Django API...');

    const endpoint = `${API_URL}/api/database/views/form/${FORM_ID}/submit/`;
    
    // Ensure these keys match your exact Baserow Column Names (case-sensitive)
    const testPayload = {
      "Full Name": "React Debugger",
      "Email Address": "debug@remote-tech.us",
      "Target Product Stack": "Cloud Infrastructure",
      "Project Classification": "Kubernetes Cluster Orchestration",
      "Detailed Specifications": "Automated validation payload from Vite."
    };

    try {
      setLog(`Sending payload to:\n${endpoint}\n\nPayload:\n${JSON.stringify(testPayload, null, 2)}`);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(testPayload),
      });

      const responseText = await response.text();
      let parsedData;
      try {
        parsedData = JSON.parse(responseText);
      } catch (e) {
        parsedData = responseText; // Fallback if server returned HTML/text
      }

      if (!response.ok) {
        setLog(`❌ ERROR ${response.status}: ${response.statusText}\n\nServer Response:\n${JSON.stringify(parsedData, null, 2)}`);
      } else {
        setLog(`✅ SUCCESS (HTTP ${response.status})!\n\nServer Response:\n${JSON.stringify(parsedData, null, 2)}`);
      }
    } catch (error) {
      setLog(`❌ NETWORK / CORS ERROR:\n${error.message}\n\nCheck browser console and Network tab for preflight (OPTIONS) failures.`);
      console.error("Full Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'monospace', color: '#fff', background: '#111', minHeight: '100vh' }}>
      <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>Baserow API Connection Validator</h2>
      
      <button 
        onClick={runTest} 
        disabled={loading}
        style={{
          padding: '12px 24px',
          background: loading ? '#555' : '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        {loading ? 'Transmitting...' : 'Send Test Submission'}
      </button>

      <div style={{ background: '#000', padding: '15px', borderRadius: '6px', border: '1px solid #333', whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontSize: '13px' }}>
        {log}
      </div>
    </div>
  );
}

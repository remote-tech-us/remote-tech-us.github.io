// src/pages/inquiry.jsx
import { useState } from 'react';
import { GLOBALS } from '../data/app__globals.jsx';
import { FaEnvelope, FaSpinner, FaCheckCircle, FaServer, FaShieldAlt } from 'react-icons/fa';

export default function InquiryPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const payload = {
      "Question": formData.message,
      "Prepared by": formData.name,
      "Notes": `Contact Email: ${formData.email}`,
      "Department": "Sales",
      "Type": "Communication",
      "Role": "External Prospect"
    };

    try {
      const response = await fetch('https://bc.remote-tech.us', {
        method: 'POST',
        headers: {
          'Authorization': 'Token RbzwWyKOkWNAkc3NASjG7ll3nLPxkDGa', // 👈 Put your Baserow API Token here
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Baserow submission error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: GLOBALS.bg_img
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(10, 15, 30, 0.92)'}, ${GLOBALS.bg_override_color || 'rgba(10, 15, 30, 0.95)'}), url(${GLOBALS.bg_img})`
        : 'none',
      }}
    >
      <main className="pt-32 px-6 max-w-4xl mx-auto pb-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Context / Trust Indicators */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <FaServer className="text-[10px]" /> Architecture Desk
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            Submit Your Project Brief
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Provide your infrastructure specifications or legacy migration challenges. An architectural engineer will evaluate your system requirements.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
            <FaShieldAlt className="text-yellow-500 text-xl mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">PII Data Sovereignty</h4>
              <p className="text-gray-400 text-xs mt-1">This pipeline flows directly into our self-hosted, air-gapped data management node.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Component */}
        <div className="lg:col-span-7">
          {status === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-3xl text-center flex flex-col items-center gap-3 backdrop-blur-md">
              <FaCheckCircle className="text-emerald-400 text-3xl" />
              <h4 className="font-bold text-lg text-white">Inquiry Transmitted</h4>
              <p className="text-gray-400 text-sm">Transmission complete. Project brief successfully archived under Row Node 531.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-black/40 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-xl">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm transition-all"
                  placeholder="Alex Podbrezskis"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm transition-all"
                  placeholder="alex@enterprise.io"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Project Specifications</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm transition-all resize-none"
                  placeholder="Describe your architecture requirements or cloud deployment goals..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-600 hover:text-white disabled:bg-white/20 disabled:text-gray-500 transition-all text-sm cursor-pointer"
              >
                {status === 'loading' ? (
                  <FaSpinner className="animate-spin text-lg" />
                ) : (
                  <>
                    <FaEnvelope /> Dispatch Project Brief
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-400 text-xs text-center font-semibold mt-2">
                  Transmission error. Verify endpoint tokens or network routing fields.
                </p>
              )}
            </form>
          )}
        </div>
      </main>
    </div>
  );
}


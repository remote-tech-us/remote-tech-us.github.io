// src/pages/inquiry.jsx
import { useState, useEffect } from 'react';
import { GLOBALS } from '../data/app__globals.jsx';
import { INQUIRY_OPTIONS } from '../data/business_inquiries.jsx';
import { FaEnvelope, FaSpinner, FaCheckCircle, FaServer, FaShieldAlt } from 'react-icons/fa';

export default function InquiryPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [product, setProduct] = useState('');
  const [projectType, setProjectType] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  // Spam protection states
  const [honeypot, setHoneypot] = useState('');
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  // Reset secondary dropdown if primary product selection changes
  useEffect(() => {
    setProjectType('');
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 🛡️ SPAM CHECK 1: Honeypot field triggered
    if (honeypot !== '') {
      console.warn("Spam bot detected via honeypot trap.");
      setStatus('success'); // Fake a success state to trick the bot
      return;
    }

    // 🛡️ SPAM CHECK 2: Velocity check (sub-2.5 second bot submission)
    const activeDuration = (Date.now() - loadTime) / 1000;
    if (activeDuration < 2.5) {
      console.warn("Spam bot detected via velocity test.");
      setStatus('success');
      return;
    }

    setStatus('loading');

    const payload = {
      "Question": `[Product: ${product}] [Project Type: ${projectType}] \n\nBrief:\n${formData.message}`,
      "Prepared by": formData.name,
      "Notes": `Contact Email: ${formData.email}`,
      "Department": "Sales",
      "Type": "Communication",
      "Role": "External Prospect"
    };

    try {
      const response = await fetch('https://remote-tech.us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setProduct('');
        setProjectType('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Transmission error:", err);
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
        
        {/* Context Sidebar */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <FaServer className="text-[10px]" /> Architecture Desk
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Scope Your Project</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Select your enterprise software eco-system and target criteria to route your configuration task metrics directly.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
            <FaShieldAlt className="text-yellow-500 text-xl mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Automated Scrubbing</h4>
              <p className="text-gray-400 text-xs mt-1">This terminal handles client verification natively. No third-party tracking modules used.</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7">
          {status === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-3xl text-center flex flex-col items-center gap-3 backdrop-blur-md">
              <FaCheckCircle className="text-emerald-400 text-3xl" />
              <h4 className="font-bold text-lg text-white">Inquiry Archived</h4>
              <p className="text-gray-400 text-sm">Thank you. Your conditional specifications match active project queues.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-black/40 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-xl relative">
              
              {/* 🤫 HONEYPOT */}
              <div className="absolute opacity-0 top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <input 
                  type="text" 
                  name="firm_security_confirm" 
                  value={honeypot} 
                  onChange={(e) => setHoneypot(e.target.value)} 
                  tabIndex="-1" 
                  placeholder="Do not fill this out"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white" placeholder="Alex Podbrezskis" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white" placeholder="alex@enterprise.io" />
                </div>
              </div>

              {/* Selection Layer 1: Core Platform Product */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Target Product Stack</label>
                <select 
                  required
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white cursor-pointer appearance-none"
                >
                  <option value="" disabled className="text-gray-600">Select core software system...</option>
                  {Object.keys(INQUIRY_OPTIONS).map(name => (
                    <option key={name} value={name} className="bg-slate-900 text-white">{name}</option>
                  ))}
                </select>
              </div>

              {/* Selection Layer 2: Dynamic Project List */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Project Classification</label>
                <select 
                  required
                  disabled={!product}
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white disabled:opacity-40 disabled:cursor-not-allowed appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    {product ? "Select target deployment requirement..." : "Awaiting product selection above..."}
                  </option>
                  {product && INQUIRY_OPTIONS[product].map(type => (
                    <option key={type} value={type} className="bg-slate-900 text-white">{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Detailed Specifications</label>
                <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all resize-none text-white" placeholder="Describe your specialized workflow goals or scope metrics..." />
              </div>

              <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-600 hover:text-white disabled:bg-white/20 disabled:text-gray-500 transition-all text-sm cursor-pointer">
                {status === 'loading' ? <FaSpinner className="animate-spin text-lg" /> : <><FaEnvelope /> Dispatch Specifications</>}
              </button>
              
              {status === 'error' && <p className="text-red-400 text-xs text-center font-semibold mt-2">Submission fault. Verify API network node configurations.</p>}
            </form>
          )}
        </div>
      </main>
    </div>
  );
}


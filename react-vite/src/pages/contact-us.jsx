// src/pages/contact-us.jsx
import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { GLOBALS } from '../data/app__globals';
import { CONTACTS } from '../data/business_contacts';
import ContactCard from '../components/ContactCard.jsx';

export default function ContactsPage() {
  const { id } = useParams(); 
  
  // Set default filter mode: 'company' limits view to corporate profiles
  const [filterMode, setFilterMode] = useState('company');

  // Automatically switch filter modes if a specific direct route profile id is requested
  useEffect(() => {
    if (id) {
      const match = CONTACTS.find(c => c.id === id || c.email?.split('@')[0] === id);
      if (match) {
        // Switch filter category automatically to prevent profile hiding on deep linking
        setFilterMode(match.type || 'all');
        
        // Smooth scroll alignment
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [id]);

  // Compute filtered array results dynamically based on item profile 'type' flag tags
  const filteredContacts = CONTACTS.filter(contact => {
    if (filterMode === 'all') return true;
    return contact.type === filterMode; // e.g. matches 'company', 'partner', or 'vendor'
  });

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: GLOBALS.bg_img
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}), url(${GLOBALS.bg_img})`
        : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="flex flex-col items-center w-full px-6 pt-24 pb-12">
        
        {/* Interactive Dynamic Filtering Tabs Row Panel */}
        <div className="flex gap-4 mb-8 bg-black/40 backdrop-blur-md p-1.5 border border-white/10 rounded-lg z-10">
          <button
            onClick={() => setFilterMode('company')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
              filterMode === 'company' 
                ? 'bg-blue-600 text-white shadow' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Company Contacts
          </button>
          <button
            onClick={() => setFilterMode('all')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
              filterMode === 'all' 
                ? 'bg-blue-600 text-white shadow' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Show All
          </button>
        </div>

        {/* Contacts Cards Display Grid Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
          {filteredContacts.map((contact, index) => {
            const cardId = contact.id || contact.email?.split('@')[0];
            return (
              <div
                key={contact.email || index}
                id={cardId}
                className={`transition-all duration-300 ${id === cardId ? 'ring-2 ring-blue-500 rounded-xl scale-102' : ''}`}
              >
                <ContactCard contact={contact} index={index} />
              </div>
            );
          })}
        </div>
        
        {filteredContacts.length === 0 && (
          <div className="text-gray-400 mt-12">No contact records found matching this filter group.</div>
        )}
      </div>
    </div>
  );
}


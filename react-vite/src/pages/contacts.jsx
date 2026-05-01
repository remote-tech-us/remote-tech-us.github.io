// src/pages/contacts.jsx
import { useEffect } from 'react'; // Add this for scrolling
import { useParams } from 'react-router-dom'; // Fixes the ReferenceError
import { QRCodeSVG } from 'qrcode.react';

{/* Begin Application Files */}
import { GLOBALS } from '../data/app__globals';
import { CONTACTS } from '../data/business_contacts';
import ContactCard from '../components/ContactCard.jsx';

export default function ContactsPage() {

  const { id } = useParams(); // Get the ID from the URL

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        // block: 'center' ensures it doesn't just "hit the top" 
        // but settles nicely in view.
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [id]);  

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed"
      style={{
        // If bg_override_color exists, use it. Otherwise, let index.css handle it.
        // backgroundColor: GLOBALS.bg_override_color ?? 'transparent',
        // backgroundImage: GLOBALS.bg_img ? `url(${GLOBALS.bg_img})` : 'none'
        // Using a gradient allows the override color to act as a "tint" over the image
        //backgroundImage: GLOBALS.bg_img ? `linear-gradient(${GLOBALS.bg_override_color}, ${GLOBALS.bg_override_color}), url(${GLOBALS.bg_img})` : 'none'
        backgroundImage: GLOBALS.bg_img 
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}), url(${GLOBALS.bg_img})` 
        : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
    <div className="flex flex-col items-center justify-center w-full px-6 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
        {CONTACTS.map((contact, index) => (
          <div 
            key={contact.email || index }
            id={contact.id || contact.email?.split('@')[0]} 
          >
            <ContactCard contact={contact} index={index} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

import { GLOBALS } from '../data/app__globals';
import { CONTACTS } from '../data/business_contacts';
import { ContactCard } from '../components/ContactCard.jsx';
import { QRCodeSVG } from 'qrcode.react';

export default function ContactsPage() {
  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed"
      style={{
        // If bg_override_color exists, use it. Otherwise, let index.css handle it.
        // backgroundColor: GLOBALS.bg_override_color ?? 'transparent',
        // backgroundImage: GLOBALS.bg_img ? `url(${GLOBALS.bg_img})` : 'none'
        // Using a gradient allows the override color to act as a "tint" over the image
        backgroundImage: GLOBALS.bg_img ? `linear-gradient(${GLOBALS.bg_override_color}, ${GLOBALS.bg_override_color}), url(${GLOBALS.bg_img})` : 'none'
      }}
    >
    <div className="flex flex-col items-center justify-center w-full px-6 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
        {CONTACTS.map((contact, index) => (
          <ContactCard contact={contact} index={index} />
        ))}
      </div>
    </div>
  );
}

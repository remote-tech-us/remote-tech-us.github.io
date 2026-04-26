// src/business_contacts.js
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms } from 'react-icons/fa';
export const CONTACTS = [
  {
    tag: 'Founder',
    locked: false,
    logo: "/remote-tech-us_v2.svg",
    name: "William Earnhardt",
    title: "Founder @ Remote Tech US",
    phone: "+1 (502) 509-4553",
    phone_sms: "yes",
    email: "william@remote-tech.us",
    address: "Sellersburg, IN, USA",
    web: "https://remote-tech.us",
    chat: "https://chat.remote-tech.us",
    linkedin: "https://www.linkedin.com/in/earnhardt",
    github: "https://github.com/remote-tech-us",
    vcfPath: "/william-earnhardt.vcf",
    calcom:"https://cal.com/remote-tech.us",
    qrValue: "https://remote-tech.us/#/card" // Link for the QR code
  },
  {
    logo: "/remote-tech-us_v2.svg"
    ,name: "Frank Earnhardt"
    //title: "Founder @ Remote Tech US",
    ,phone: "+1 (502) 509-4553"
    //phone_sms: "yes",
    //email: "frank@remote-tech.us",
    //address: "Sellersburg, IN, USA",
    //web: "https://remote-tech.us",
    //chat: "https://chat.remote-tech.us",
    //linkedin: "https://www.linkedin.com/in/earnhardt",
    //github: "https://github.com/remote-tech-us",
    //vcfPath: "/william-earnhardt.vcf",
    //calcom:"https://cal.com/remote-tech.us",
    //qrValue: "https://remote-tech.us/#/card" // Link for the QR code
  },
  {
    logo: "/remote-tech-us_v2.svg",
    name: "Admin",
    title: "Founder @ Remote Tech US",
    phone: "+1 (502) 509-4553",
    //phone_sms: "yes",
    email: "admin@remote-tech.us",
    address: "Sellersburg, IN, USA",
    web: "https://remote-tech.us",
    chat: "https://chat.remote-tech.us",
    linkedin: "https://www.linkedin.com/in/earnhardt",
    github: "https://github.com/remote-tech-us",
    vcfPath: "/william-earnhardt.vcf",
    calcom:"https://cal.com/remote-tech.us",
    qrValue: "https://remote-tech.us/#/card" // Link for the QR code
  }
].map((contact, index) => ({
  ...contact,
  // Use email prefix if it exists, otherwise fall back to a slugified name or index
  id: contact.email 
    ? contact.email.split('@')[0] 
    : (contact.name?.toLowerCase().replace(/\s+/g, '-') || `member-${index}`)
}));

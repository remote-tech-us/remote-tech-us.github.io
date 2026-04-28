// src/business_clients.jsx
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom } from "react-icons/si";
import { SiGitea } from "react-icons/si";

export const BUSINESS_CLIENTS = [
  { 
    name: 'A&I Solutions',
    url: 'https://www.anisolutions.com',
    icon: <SiBroadcom />,
    tag: '',
    locked: false,
    desc: 'No Longer providing CA Service Desk Manager Services'
  },
  { 
    name: 'Belden', 
    url: 'https://www.belden.com', 
    icon: <FaCode />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager / Catalog!' 
  },
  { 
    name: 'Sheetz', 
    url: 'https://www.sheetz.com', 
    icon: <FaProjectDiagram />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager / IT PAM' 
  }
];

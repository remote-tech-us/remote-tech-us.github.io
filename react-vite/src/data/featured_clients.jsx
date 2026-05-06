// src/data/featured_clients.jsx
import { FaMicrosoft, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom } from "react-icons/si";
import { SiGitea } from "react-icons/si";

export const FEATURED_CLIENTS = [
  { 
    name: 'Broadcom',
    url: 'https://broadcom.com',
    icon: <SiBroadcom />,
    tag: 'Acquired CA Technologies',
    locked: false,
    desc: 'CA Service Desk Manager Suite'
  },
  { 
    name: 'Microsoft', 
    url: 'https://microsoft.com', 
    icon: <FaMicrosoft />,
    tag: 'Sponser',
    locked: false,
    desc: 'OnMicrosoft Cloud Sponser' 
  },
  { 
    name: 'Github', 
    url: 'https://github.com', 
    icon: <FaGithub />,
    tag: 'Hosting',
    locked: false,
    desc: 'CI/CD Pipeline for Site'
  }
];

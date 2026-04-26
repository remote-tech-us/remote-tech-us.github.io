// src/business_services.jsx
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom } from "react-icons/si";
import { SiGitea } from "react-icons/si";

export const SERVICES = [
  { 
    name: 'Broadcom',
    url: 'https://broadcom.com',
    icon: <SiBroadcom />,
    tag: 'Acquired CA Technologies',
    locked: false,
    desc: 'CA Service Desk Manager Suite!'
  },
  { 
    name: 'Gitea', 
    url: 'https://gitea.remote-tech.us', 
    icon: <FaCode />,
    tag: '',
    locked: false,
    desc: 'Self-hosting a github style environment shows the power of Open Source Community!' 
  },
  { 
    name: 'OpenProject', 
    url: 'https://pm.remote-tech.us', 
    icon: <FaProjectDiagram />,
    tag: '',
    locked: false,
    desc: 'This Open Source project has been a key success with mutiple engagements tracking timeline, budget, & specifications' 
  },
  { 
    name: 'Kanboard', 
    url: 'https://kanboard.remote-tech.us/board/1', 
    icon: <FaProjectDiagram />,
    tag: '',
    locked: false,
    desc: 'Leveraging another Open Source project to track multiple project as highlighted in this Get-A-Job project.'
  },
  { 
    name: 'Dashy', 
    url: 'https://dashy.remote-tech.us', 
    icon: <FaHdd />, 
    tag: 'needs update',
    locked: true,
    desc: 'Many years of Research Collectively Orchestrating'
  }
];

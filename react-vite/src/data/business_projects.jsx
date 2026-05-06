// src/data/business_projects.jsx
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiGitea, SiJupyter, SiKubernetes  } from "react-icons/si";
{/* url options 
   1. '/#/tech-stack', 
   2. `${import.meta.env.BASE_URL}#/tech-stack`
*/}
export const BUSINESS_PROJECTS = [
  { 
    name: 'Infrastructure',
    url: `${import.meta.env.BASE_URL}#/tech-stack`,
    tag: "completed",
    locked: false,
    desc: "SCOPE OF WORK:Build out infrastruture to support newly formed business. (click to see our tech stack)"
  },
  { 
    name: 'Sheetz',
    url: '',
    tag: "completed",
    locked: true,
    desc: "SCOPE OF WORK:Upgrade Service Desk Manager & IT PAM (Dev/Test& PRODUCTION  environments) from version r17.3 to version r17.4"
  },
  { 
    name: 'Belden', 
    url: '',
    tag: "completed",
    locked: true,
    desc: "SCOPE OF WORK:Upgrade Service Desk Manager & Service Catalog (Dev/Test& PRODUCTION  environments) from version r17.3 to version r17.4"
  },
  { 
    name: 'Company Website',
    url: '',
    tag: "completed",
    locked: true,
    desc: "SCOPE OF WORK:Built React - Vite - Tailwind CSS site to present company portal"
  },
  { 
    name: 'Smart - Autonomous Subscription Services',
    url: 'https://sass.remote-tech.us',
    tag: "",
    locked: false,
    desc: "SCOPE OF WORK:Python/Flask/SQLAlchemy subscription services project"
  },
];

// src/business_tools.jsx
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
export const TOOLS = [
  { 
    name: 'Chat',
    url: 'https://chat.remote-tech.us',
    icon: <FaRocketchat />,
    desc: 'Self-hosting Rocketchat allowing for complete privacy and data retention!'
  },
  { 
    name: 'Gitea', 
    url: 'https://gitea.remote-tech.us', 
    icon: <FaCode />,
    desc: 'Self-hosting a github style environment shows the power of Open Source Community!' 
  },
  { 
    name: 'OpenProject', 
    url: 'https://pm.remote-tech.us', 
    icon: <FaProjectDiagram />,
    desc: 'This Open Source project has been a key success with mutiple engagements tracking timeline, budget, & specifications' 
  },
  { 
    name: 'Kanboard', 
    url: 'https://kanboard.remote-tech.us/board/1', 
    icon: <BsKanban />,
    desc: 'Leveraging another Open Source project to track multiple project as highlighted in this Get-A-Job project.'
  },
  { 
    name: 'Dashy', 
    url: 'https://dashy.remote-tech.us', 
    icon: <FaHdd />, 
    desc: 'Many years of Research Collectively Orchestrating'
  }
];

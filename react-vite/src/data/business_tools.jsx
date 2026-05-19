// src/data/business_tools.jsx
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiGitea, SiJupyter, SiKubernetes  } from "react-icons/si";

export const BUSINESS_TOOLS = [
  { 
    name: 'Chat',
    url: 'https://chat.remote-tech.us',
    icon: <FaRocketchat />,
    tag: "",
    locked: false,
    desc: 'Self-hosting Rocketchat allowing for complete privacy and data retention!'
  },
  { 
    name: 'Gitea', 
    url: 'https://gitea.remote-tech.us', 
    icon: <SiGitea />,
    tag: "",
    locked: false,
    desc: 'Self-hosting a github style environment shows the power of Open Source Community!' 
  },
  { 
    name: 'OpenProject', 
    url: 'https://pm.remote-tech.us', 
    icon: <FaProjectDiagram />,
    tag: "",
    locked: false,
    desc: 'This Open Source project has been a key success with mutiple engagements tracking timeline, budget, & specifications' 
  },
  { 
    name: 'Kanboard', 
    url: 'https://kanboard.remote-tech.us/board/1', 
    icon: <BsKanban />,
    tag: "",
    locked: false,
    desc: 'Leveraging another Open Source project to track multiple project as highlighted in this Get-A-Job project.'
  },
  { 
    name: 'Jupyter Lab', 
    url: 'https://jupyter.org/', 
    icon: <SiJupyter />,
    tag: "No Longer Public Facing",
    locked: true,
    desc: 'a web-based, next-generation interactive development environment (IDE) used primarily for data science, scientific computing, and machine learning'
  },
  { 
    name: 'Dashy', 
    url: 'https://dashy.remote-tech.us', 
    icon: <FaHdd />, 
    tag: "",
    locked: false,
    desc: 'Many years of Research Collectively Orchestrating'
  }
];

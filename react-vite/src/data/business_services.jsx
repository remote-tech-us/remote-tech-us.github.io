// src/data/business_services.jsx
import { FaGit, FaWordpress, FaJenkins, FaDocker, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom, SiKubernetes, SiAnsible, SiTerraform, SiMysql, SiMariadb, SiPostgresql, SiMongodb,  SiPerl, SiPython, SiPhp, SiDotnet, SiGnubash  } from "react-icons/si";
import { SiGitea } from "react-icons/si";
import { VscCopilot, VscTypeHierarchy, VscTelescope, VscThumbsup, VscCode, VscSymbolClass, VscSettingsGear, VscBug, VscTools, VscSourceControl, VscWand, VscTerminal, VscTerminalCmd, VscTasklist, VscSync, VscChecklist } from "react-icons/vsc";

export const SERVICES = [
  { 
    name: 'Architecture',
    url: '',
    icon: <SiBroadcom />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager Suite'
  },
  { 
    name: 'Implementation', 
    url: '', 
    icon: <VscSymbolClass />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager Suite'
  },
  { 
    name: 'Configuration', 
    url: '', 
    icon: <VscSettingsGear />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager Suite'
  },
  { 
    name: 'Integrations', 
    url: '', 
    icon: <VscTypeHierarchy />,
    tag: '',
    locked: false,
    desc: 'PeopleSoft, Workday, BigFix, Spectrum, AutomationPoint, IT PAM'
  },
  { 
    name: 'Development', 
    url: '', 
    icon: <VscCode />, 
    tag: '',
    locked: true,
    desc: 'HTMPL/PDM_MACRO, SPEL, PERL, ANSI C, REST/SOAP'
  },
  { 
    name: 'Best Practices', 
    url: '', 
    icon: <VscWand />, 
    tag: '',
    locked: true,
    desc: 'Self-Healing Server Configurations, CI/CD Pipeline, Release Management'
  },
  { 
    name: 'Upgrades', 
    url: '', 
    icon: <VscThumbsup />, 
    tag: '',
    locked: true,
    desc: 'CA Service Desk Manager Suite'
  },
  { 
    name: 'Support', 
    url: '',
    icon: <VscTelescope />, 
    tag: '',
    locked: true,
    desc: 'CA Service Desk Manager Suite'
  },
  { 
    name: 'Training', 
    url: '', 
    icon: <VscCopilot />, 
    tag: '',
    locked: true,
    desc: 'CA Service Desk Manager Suite'
  }
];

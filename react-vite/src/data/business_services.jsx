// src/data/business_services.jsx
import { FaGit, FaWordpress, FaJenkins, FaDocker, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom, SiKubernetes, SiAnsible, SiTerraform, SiMysql, SiMariadb, SiPostgresql, SiMongodb,  SiPerl, SiPython, SiPhp, SiDotnet, SiGnubash  } from "react-icons/si";
import { SiGitea } from "react-icons/si";
import { VscCopilot, VscTypeHierarchy, VscTelescope, VscThumbsup, VscCode, VscSymbolClass, VscSettingsGear, VscBug, VscTools, VscSourceControl, VscWand, VscTerminal, VscTerminalCmd, VscTasklist, VscSync, VscChecklist } from "react-icons/vsc";

export const BUSINESS_SERVICES = [
  { 
    name: 'CA Service Desk Manager',
    url: 'https://www.broadcom.com/products/software/service-management/service-desk-manager',
    icon: <SiBroadcom />,
    tag: '',
    locked: false,
    desc: 'CA SDM Suite'
  },
  { 
    name: 'CA Automation Point ',
    url: '',
    icon: <SiBroadcom />,
    tag: '',
    locked: false,
    desc: 'CA AP Suite'
  },
  { 
    name: 'CA IT Process Automation Manager',
    url: 'https://www.broadcom.com/products/software/service-management/it-process-automation-manager',
    icon: <SiBroadcom />,
    tag: '',
    locked: false,
    desc: 'CA IT PAM Suite'
  },
  { 
    name: 'CA Service Catalog',
    url: 'https://www.broadcom.com/products/software/service-management/service-catalog',
    icon: <SiBroadcom />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager - Catalog Component'
  },
  { 
    name: 'CA Embedded Entitlements Manager',
    url: 'https://techdocs.broadcom.com/us/en/ca-enterprise-software/other/Embedded-Entitlements-Manager/12-7.html',
    icon: <SiBroadcom />,
    tag: '',
    locked: false,
    desc: 'CA EEM - Security Component'
  }
];

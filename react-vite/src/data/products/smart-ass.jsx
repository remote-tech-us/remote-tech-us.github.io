// src/data/services_casdm.jsx
import { FaGit, FaWordpress, FaJenkins, FaDocker, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom, SiKubernetes, SiAnsible, SiTerraform, SiMysql, SiMariadb, SiPostgresql, SiMongodb,  SiPerl, SiPython, SiPhp, SiDotnet, SiGnubash  } from "react-icons/si";
import { SiGitea } from "react-icons/si";
import { VscCopilot, VscTypeHierarchy, VscTelescope, VscThumbsup, VscCode, VscSymbolClass, VscSettingsGear, VscBug, VscTools, VscSourceControl, VscWand, VscTerminal, VscTerminalCmd, VscTasklist, VscSync, VscChecklist } from "react-icons/vsc";

// 1. Add metadata for the page to use
export const CONFIG = {
  label: "SMART-ASS", // This is what shows in the NavBar
  title: "Smart Automous Subscription Services",
  subtitle: "Enterprise IT Service Management Solutions",
  bg_color: "rgba(30, 41, 59, 0.8)",
  accentColor: "bg-red-600" // Custom color for this specific service
};

// 2. Your existing array (keeping the name for compatibility or renaming to DATA)
export const DATA = [
  { 
    name: 'CA Service Desk Manager',
    desc: 'CA SDM Suite',
    icon: <SiBroadcom />,
    locked: false,
    tag: '',
    url: 'https://www.broadcom.com/products/software/service-management/service-desk-manager',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: '',
    download: ''
  },
  { 
    name: 'CA Automation Point ',
    desc: 'CA AP Suite',
    icon: <SiBroadcom />,
    locked: false,
    tag: '',
    url: '',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: '',
    download: ''
  },
  { 
    name: 'CA IT Process Automation Manager',
    desc: 'CA IT PAM Suite',
    icon: <SiBroadcom />,
    locked: false,
    tag: '',
    url: 'https://www.broadcom.com/products/software/service-management/it-process-automation-manager',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: '',
    download: ''
  },
  { 
    name: 'CA Service Catalog',
    desc: 'CA Service Desk Manager - Catalog Component',
    icon: <SiBroadcom />,
    locked: false,
    tag: '',
    url: 'https://www.broadcom.com/products/software/service-management/service-catalog',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: '',
    download: ''
  },
  { 
    name: 'CA Embedded Entitlements Manager',
    desc: 'CA EEM - Security Component',
    icon: <SiBroadcom />,
    locked: false,
    tag: '',
    url: 'https://techdocs.broadcom.com/us/en/ca-enterprise-software/other/Embedded-Entitlements-Manager/12-7.html',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: '',
    download: ''
  }
];


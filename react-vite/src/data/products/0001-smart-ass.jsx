// src/data/services_casdm.jsx
import { FaGit, FaWordpress, FaJenkins, FaDocker, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom, SiKubernetes, SiAnsible, SiTerraform, SiMysql, SiMariadb, SiPostgresql, SiMongodb,  SiPerl, SiPython, SiPhp, SiDotnet, SiGnubash  } from "react-icons/si";
import { SiGitea } from "react-icons/si";
import { VscCopilot, VscTypeHierarchy, VscTelescope, VscThumbsup, VscCode, VscSymbolClass, VscSettingsGear, VscBug, VscTools, VscSourceControl, VscWand, VscTerminal, VscTerminalCmd, VscTasklist, VscSync, VscChecklist } from "react-icons/vsc";
import RemoteTechIcon from "../../assets/remote-tech-icon.jsx";

// 1. Add metadata for the page to use
export const CONFIG = {
  label: "Remote Tech US", // This is what shows in the NavBar
  title: "Products Developed by Remote Tech US",
  subtitle: "Secure, scalable, and transparent software",
  section_title: "Coming Soon",
  bg_color: "rgba(30, 41, 59, 0.8)",
  accentColor: "bg-red-600" // Custom color for this specific service
};

// 2. Your existing array (keeping the name for compatibility or renaming to DATA)
export const DATA = [
  { 
    name: 'SMART-ASS',
    desc: "Smart - Autonomous Subscription Service",
    icon: <RemoteTechIcon />,
    locked: false,
    tag: '',
    url: 'https://sass.remote-tech.us',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: '',
    download: ''
  }
];


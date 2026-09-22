// src/data/services_casdm.jsx
import { FaGit, FaWordpress, FaJenkins, FaDocker, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom, SiKubernetes, SiAnsible, SiTerraform, SiMysql, SiMariadb, SiPostgresql, SiMongodb,  SiPerl, SiPython, SiPhp, SiDotnet, SiGnubash  } from "react-icons/si";
import { SiGitea } from "react-icons/si";
import { VscCopilot, VscTypeHierarchy, VscTelescope, VscThumbsup, VscCode, VscSymbolClass, VscSettingsGear, VscBug, VscTools, VscSourceControl, VscWand, VscTerminal, VscTerminalCmd, VscTasklist, VscSync, VscChecklist } from "react-icons/vsc";
import RemoteTechIcon from "../../assets/remote-tech-icon.jsx";
import RemoteTechUsV2 from "../../assets/RemoteTechUsV2.jsx";
import RemoteTechUsV2SVGR from "../../assets/RemoteTechUsV2-SVGR.jsx";
import OpenSource from "../../assets/opensource.jsx"
// 1. Add metadata for the page to use
export const CONFIG = {
  label: "Open Source Tools", // This is what shows in the NavBar
  icon: <OpenSource className="h-4 w-4" />,
  title: "Open Source Tools used by Remote Tech US",
  subtitle: "",
  section_title: "Core Tools",
  bg_color: "rgba(30, 41, 59, 0.8)",
  accentColor: "bg-red-600" // Custom color for this specific service
};

// 2. Your existing array (keeping the name for compatibility or renaming to DATA)
export const DATA = [
  { 
    name: 'Open Project',
    desc: " ",
    icon: <RemoteTechUsV2SVGR className="h-16 w-16" />,
    locked: false,
    tag: 'Project Management',
    url: 'https://pm.remote-tech.us',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: '',
    download: ''
  },
  { 
    name: 'Gitea',
    desc: " ",
    icon: <RemoteTechUsV2SVGR className="h-16 w-16" />,
    locked: false,
    tag: 'Source Control',
    url: 'https://gitea.remote-tech.us',
    target: '_blank',  // _blank ~ Opens in new tab, _self ~ Default
    rel: 'tesl',
    download: ''
  }
];


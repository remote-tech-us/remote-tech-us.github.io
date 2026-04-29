// src/data/business_tools.jsx
import { FaGit, FaWordpress, FaJenkins, FaDocker, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiDocker, SiBroadcom, SiKubernetes, SiAnsible, SiTerraform, SiMysql, SiMariadb, SiPostgresql, SiMongodb,  SiPerl, SiPython, SiPhp, SiDotnet, SiGnubash  } from "react-icons/si";
import { SiGitea } from "react-icons/si";
import { VscCopilot, VscTypeHierarchy, VscTelescope, VscThumbsup, VscCode, VscSymbolClass, VscSettingsGear, VscBug, VscTools, VscSourceControl, VscWand, VscTerminal, VscTerminalCmd, VscTasklist, VscSync, VscChecklist } from "react-icons/vsc";

export const TECH = [
  { 
    name: 'Git',
    url: 'https://github.com',
    icon: <FaGithub />,
    tag: "",
    locked: false,
    desc: 'Modern Distributed Version Control System!'
  },
  { 
    name: 'Docker', 
    url: 'https://docker.com', 
    icon: <SiDocker />,
    tag: "",
    locked: false,
    desc: 'Pupular container system!' 
  },
  { 
    name: 'Kubernetes', 
    url: 'https://kubernetes.com', 
    icon: <SiKubernetes />,
    tag: "",
    locked: false,
    desc: 'Container Orchestration' 
  },
  { 
    name: 'RedHat Ansible', 
    url: 'https://www.redhat.com/en/ansible-collaborative', 
    icon: <SiAnsible />,
    tag: "",
    locked: false,
    desc: 'Infrastructure As Code.'
  },
  { 
    name: 'Hashicorp Terraform', 
    url: 'https://developer.hashicorp.com/terraform', 
    icon: <SiTerraform />,
    tag: "",
    locked: false,
    desc: 'Infrastructure As Code'
  },
  { 
    name: 'Hashicorp Vault', 
    url: 'https://hashicorp.com/vault', 
    icon: <FaHdd />, 
    tag: "",
    locked: false,
    desc: 'Zero Trust Secrets Vault'
  }
];

// src/data/services_casdm.jsx
import { FaGit, FaWordpress, FaJenkins, FaDocker, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { SiBroadcom, SiKubernetes, SiAnsible, SiTerraform, SiMysql, SiMariadb, SiPostgresql, SiMongodb,  SiPerl, SiPython, SiPhp, SiDotnet, SiGnubash  } from "react-icons/si";
import { SiGitea } from "react-icons/si";
import { VscCopilot, VscTypeHierarchy, VscTelescope, VscThumbsup, VscCode, VscSymbolClass, VscSettingsGear, VscBug, VscTools, VscSourceControl, VscWand, VscTerminal, VscTerminalCmd, VscTasklist, VscSync, VscChecklist } from "react-icons/vsc";

// 1. Add metadata for the page to use
export const CONFIG = {
  label: "CA SDM Suite", // This is what shows in the NavBar
  title: "CA Service Management",
  subtitle: "Enterprise IT Service Management Solutions",
  section_title: "Core Services",
  bg_color: "rgba(30, 41, 59, 0.8)",
  accentColor: "bg-red-600", // Custom color for this specific service
  // Map an array of indepentent layout zones
  sections: [
    {
      id: "featured",
      title: "Featured Software",
      accentColor: "bg-blue-500",
      layout: "carousel",
      // Pass parameters safely straight to your custom hook options block
      scrollOptions: {
        direction: "left",
        intervalTime: 40,
        step: 1
      },
      items: [
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
      ]
    },
    {
      id: "core",
      title: "Core Services",
      accentColor: "bg-blue-500",
      layout: "carousel",
      scrollOptions: {
        direction: "right", // Controls opposite direction alignment cleanly
        intervalTime: 50
      },
      items: [
        { 
          name: 'Configuration',
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
          locked: false,
          desc: 'HTMPL/PDM_MACRO, SPEL, PERL, ANSI C, REST/SOAP'
        },
        {
          name: 'Best Practices',
          url: '',
          icon: <VscWand />,
          tag: '',
          locked: false,
          desc: 'Self-Healing Server Configurations, CI/CD Pipeline, Release Management'
        },
        {
          name: 'Upgrades',
          url: '',
          icon: <VscThumbsup />,
          tag: '',
          locked: false,
          desc: 'CA Service Desk Manager Suite'
        },
        {
          name: 'Support',
          url: '',
          icon: <VscTelescope />,
          tag: '',
          locked: false,
          desc: 'CA Service Desk Manager Suite'
        },
        {
          name: 'Training',
          url: '',
          icon: <VscCopilot />,
          tag: '',
          locked: false,
          desc: 'CA Service Desk Manager Suite'
        }
      ]
    } 
  ]
};

// 2. Your existing array (keeping the name for compatibility or renaming to DATA)
export const DATA = [
  { 
    name: 'Configuration',
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
    locked: false,
    desc: 'HTMPL/PDM_MACRO, SPEL, PERL, ANSI C, REST/SOAP'
  },
  {
    name: 'Best Practices',
    url: '',
    icon: <VscWand />,
    tag: '',
    locked: false,
    desc: 'Self-Healing Server Configurations, CI/CD Pipeline, Release Management'
  },
  {
    name: 'Upgrades',
    url: '',
    icon: <VscThumbsup />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager Suite'
  },
  {
    name: 'Support',
    url: '',
    icon: <VscTelescope />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager Suite'
  },
  {
    name: 'Training',
    url: '',
    icon: <VscCopilot />,
    tag: '',
    locked: false,
    desc: 'CA Service Desk Manager Suite'
  }
];


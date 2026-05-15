// src/data/services/0002-snow.jsx
import { SiJavascript } from "react-icons/si";
import { VscSymbolClass, VscSettingsGear, VscTypeHierarchy, VscCode, VscWand, VscThumbsup, VscTelescope, VscCopilot } from "react-icons/vsc";
import ServiceNowIcon from "../../assets/service-now-icon.jsx";

// Native Inline Custom SVG Component
const hardServiceNowIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="1em" 
    height="1em" 
    fill="currentColor" // Allows icon color to inherit parent font colors dynamically
    className="inline-block"
  >
    {/* Official ServiceNow vector geometry path tracing */}
    <path d="M19.344 14.88c.84-.792 1.488-1.74 1.488-3.096 0-1.896-1.128-3.024-2.88-3.024H12.96v6.12h5.04c.528 0 .96-.144 1.344-.432l.024.432h1.68l-.12-.432h-.576zm-4.704-4.656h2.712c.96 0 1.464.456 1.464 1.368 0 .888-.504 1.368-1.464 1.368h-2.712v-2.736zM3.456 14.28c.456.408 1.152.6 1.968.6 1.488 0 2.376-.696 2.376-2.016 0-2.28-3.528-1.728-3.528-3.648 0-.696.552-1.152 1.464-1.152.792 0 1.44.24 1.848.6l.456-1.296C7.44 6.84 6.552 6.648 5.64 6.648c-1.608 0-2.832.84-2.832 2.376 0 2.232 3.528 1.632 3.528 3.696 0 .744-.6 1.224-1.632 1.224-.96 0-1.752-.336-2.208-.792l-.456 1.344zm7.224.6h1.68V6.84h-1.68v8.04z" />
  </svg>
);

export const CONFIG = {
  label: "ServiceNow Suite",
  icon: <ServiceNowIcon className="h-10 w-10" />,
  title: "ServiceNow ITSM & Custom Workflows",
  subtitle: "Enterprise Workflow Automation and Service Management Optimization",
  seo: {
    title: "ServiceNow Integration & Implementation - Remote Tech",
    description: "Expert ServiceNow development, configuration, ITSM scaling, and integration solutions.",
    keywords: ["ServiceNow", "ITSM", "Workflow Automation", "JavaScript Scripting", "Service Portal"]
  },
  section_title: "Core ServiceNow Services", // ONLY USED WEHN DATA[] IS POPULATED
  bg_color: "rgba(15, 32, 39, 0.8)",
  accentColor: "bg-green-600",
  sections: [
    {
      id: "featured-modules",
      title: "Featured Software Modules",
      accentColor: "bg-green-500",
      layout: "carousel",
      scrollOptions: {
        direction: "left",
        intervalTime: 40,
        step: 1
      },
      items: [
        {
          name: 'IT Service Management',
          desc: 'ITSM Core Suite',
          icon: <ServiceNowIcon />, // Use custom inline component directly
          locked: false,
          url: 'servicenow.com',
          target: '_blank'
        },
        {
          name: 'IT Operations Management',
          desc: 'ITOM Operations Suite',
          icon: <ServiceNowIcon />,
          locked: false,
          url: 'servicenow.com',
          target: '_blank'
        },
        {
          name: 'IT Asset Management',
          desc: 'ITAM Asset Management',
          icon: <ServiceNowIcon />,
          locked: false,
          url: 'servicenow.com',
          target: '_blank'
        },
        {
          name: 'Strategic Portfolio Mgmt',
          desc: 'SPM Project Planning',
          icon: <ServiceNowIcon />,
          locked: false,
          url: 'servicenow.com',
          target: '_blank'
        }
      ]
    },
    {
      id: "snow-core",
      title: "Core Capabilities",
      accentColor: "bg-green-500",
      layout: "carousel",
      scrollOptions: {
        direction: "right",
        intervalTime: 50
      },
      items: [
        { name: 'Architecture', desc: 'ServiceNow Platform Instance Design', icon: <ServiceNowIcon />, locked: false, url: '' },
        { name: 'Implementation', desc: 'Out-of-box setup and workflows', icon: <VscSymbolClass />, locked: false, url: '' },
        { name: 'Custom App Engine', desc: 'Scoped Applications & Custom Tables', icon: <VscSettingsGear />, locked: false, url: '' },
        { name: 'Integrations', desc: 'REST/SOAP & Mid Server Pipelines', icon: <VscTypeHierarchy />, locked: false, url: '' },
        { name: 'Development', desc: 'Business Rules & Script Includes', icon: <VscCode />, locked: false, url: '' },
        { name: 'Service Portal', desc: 'Widget Customization & Angular', icon: <VscWand />, locked: false, url: '' },
        { name: 'Upgrades', desc: 'Instance patches and skip-log remediations', icon: <VscThumbsup />, locked: false, url: '' },
        { name: 'CMDB & Discovery', desc: 'CI Class Managers & Identification', icon: <VscTelescope />, locked: false, url: '' },
        { name: 'Flow Designer', desc: 'Low-code execution action modules', icon: <VscCopilot />, locked: false, url: '' }
      ]
    }
  ]
};

// LEGACY WAY TO POPULATE CARDS USING DATA[]
// Note: CONFIG.section_title is required with DATA is populated
export const DATA = [];

// src/data/services/0002-snow.jsx
import { SiServicenow, SiJavascript } from "react-icons/si";
import { VscSymbolClass, VscSettingsGear, VscTypeHierarchy, VscCode, VscWand, VscThumbsup, VscTelescope, VscCopilot } from "react-icons/vsc";

export const CONFIG = {
  label: "ServiceNow Suite",
  title: "ServiceNow ITSM & Custom Workflows",
  subtitle: "Enterprise Workflow Automation and Service Management Optimization",
  seo: {
    title: "ServiceNow Integration & Implementation - Remote Tech",
    description: "Expert ServiceNow development, configuration, ITSM scaling, and integration solutions.",
    keywords: ["ServiceNow", "ITSM", "Workflow Automation", "JavaScript Scripting", "Service Portal"]
  },
  section_title: "Core ServiceNow Services",
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
          icon: <SiServicenow />,
          locked: false,
          url: 'servicenow.com',
          target: '_blank'
        },
        {
          name: 'IT Operations Management',
          desc: 'ITOM Operations Suite',
          icon: <SiServicenow />,
          locked: false,
          url: 'servicenow.com',
          target: '_blank'
        },
        {
          name: 'IT Asset Management',
          desc: 'ITAM Asset Management',
          icon: <SiServicenow />,
          locked: false,
          url: 'servicenow.com',
          target: '_blank'
        },
        {
          name: 'Strategic Portfolio Mgmt',
          desc: 'SPM Project Planning',
          icon: <SiServicenow />,
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
        {
          name: 'Architecture',
          desc: 'ServiceNow Platform Instance Design',
          icon: <SiServicenow />,
          locked: false,
          url: ''
        },
        {
          name: 'Implementation',
          desc: 'Out-of-box setup and configuration workflows',
          icon: <VscSymbolClass />,
          locked: false,
          url: ''
        },
        {
          name: 'Custom App Engine',
          desc: 'Scoped Applications & Custom Studio Tables',
          icon: <VscSettingsGear />,
          locked: false,
          url: ''
        },
        {
          name: 'Integrations',
          desc: 'REST/SOAP, IntegrationHub, Mid Server Pipelines',
          icon: <VscTypeHierarchy />,
          locked: false,
          url: ''
        },
        {
          name: 'Development',
          desc: 'Business Rules, Client Scripts, Script Includes',
          icon: <VscCode />,
          locked: false,
          url: ''
        },
        {
          name: 'Service Portal',
          desc: 'Widget Customization, HTML/CSS, Angular Frameworks',
          icon: <VscWand />,
          locked: false,
          url: ''
        },
        {
          name: 'Upgrades',
          desc: 'Instance family patches and skip-log remediations',
          icon: <VscThumbsup />,
          locked: false,
          url: ''
        },
        {
          name: 'CMDB & Discovery',
          desc: 'CI Class Managers, Identification & Reconciliation',
          icon: <VscTelescope />,
          locked: false,
          url: ''
        },
        {
          name: 'Flow Designer',
          desc: 'Low-code execution logic and action engine builds',
          icon: <VscCopilot />,
          locked: false,
          url: ''
        }
      ]
    }
  ]
};

// Map legacy array structure targeting Check 2 requirements smoothly
export const DATA = CONFIG.sections[1].items;


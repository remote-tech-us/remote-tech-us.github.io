// src/data/services/0004-remedy-ars.jsx
import { VscSymbolClass, VscSettingsGear, VscTypeHierarchy, VscCode, VscWand, VscThumbsup, VscTelescope, VscCopilot, VscTools, VscTerminal } from "react-icons/vsc";
import RemedyARSRRR from '../../assets/remedy-ars-rrr.jsx';

// Custom inline SVG rendering a classic server/database stack to represent On-Prem architecture
const RemedySuiteIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="1em" 
    height="1em" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="inline-block align-middle"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v6" />
  </svg>
);

export const CONFIG = {
  label: "Remedy ARS", // Displays neatly in the sorted dropdown list
  icon: <RemedyARSRRR className="h-6 w-6" />,
  title: "BMC Remedy AR System Suite",
  subtitle: "Legacy On-Premises Action Request System & ITIL Service Management Development",
  seo: {
    title: "BMC Remedy ARS On-Prem Service Engineering - Remote Tech",
    description: "Expert BMC Remedy ARS development, Dev Studio workflow customizations, Mid-Tier server setups, and legacy migration tools.",
    keywords: ["BMC Remedy", "Action Request System", "ARS Dev Studio", "On-Premises ITSM", "Mid-Tier Server"]
  },
  section_title: "Core Remedy Frameworks",
  bg_color: "rgba(30, 41, 59, 0.85)",
  accentColor: "bg-orange-600",
  sections: [
    {
      id: "remedy-modules",
      title: "Legacy ITSM On-Prem applications",
      accentColor: "bg-orange-500",
      layout: "carousel",
      scrollOptions: {
        direction: "left",
        intervalTime: 45,
        step: 1
      },
      items: [
        {
          name: 'Incident Management',
          desc: 'Classic ARS Incident Lifecycle Systems',
          icon: <RemedyARSRRR className="h-36 w-36" />,
          locked: false,
          url: '',
          target: '_self'
        },
        {
          name: 'Change Management',
          desc: 'Forward Schedule of Changes & Approval Engines',
          icon: <RemedyARSRRR />,
          locked: false,
          url: '',
          target: '_self'
        },
        {
          name: 'Asset Management',
          desc: 'On-Premises CMDB & Asset Inventory Trackers',
          icon: <RemedyARSRRR />,
          locked: false,
          url: '',
          target: '_self'
        },
        {
          name: 'Problem Management',
          desc: 'Root Cause Analysis and Known Error Databases',
          icon: <RemedyARSRRR />,
          locked: false,
          url: '',
          target: '_self'
        }
      ]
    },
    {
      id: "remedy-development",
      title: "Workflow & Workflow Administration",
      accentColor: "bg-orange-500",
      layout: "carousel",
      scrollOptions: {
        direction: "right",
        intervalTime: 50
      },
      items: [
        {
          name: 'Developer Studio',
          desc: 'Custom Active Links, Filters, Escalations, and Guides configuration',
          icon: <VscCode />,
          locked: false,
          url: ''
        },
        {
          name: 'Schema Architecting',
          desc: 'Regular, Vendor, Join, and View Form database setups',
          icon: <VscSymbolClass />,
          locked: false,
          url: ''
        },
        {
          name: 'Mid-Tier Engineering',
          desc: 'Tomcat optimization, object caching tuning, and web configuration',
          icon: <VscSettingsGear />,
          locked: false,
          url: ''
        },
        {
          name: 'API Integrations',
          desc: 'Legacy C API, Java API hooks, and modern REST web services interfaces',
          icon: <VscTypeHierarchy />,
          locked: false,
          url: ''
        },
        {
          name: 'Remedy Flashboards',
          desc: 'Real-time performance tracking monitors and operational dashboard graphics',
          icon: <VscTelescope />,
          locked: false,
          url: ''
        },
        {
          name: 'Data Import Utility',
          desc: 'Bulk record migration mappings using classic .armx template scripts',
          icon: <VscWand />,
          locked: false,
          url: ''
        },
        {
          name: 'Server Upgrades',
          desc: 'Zero-downtime database structural patches and service package scaling',
          icon: <VscThumbsup />,
          locked: false,
          url: ''
        },
        {
          name: 'Troubleshooting',
          desc: 'SQL, API, and Filter execution log diagnostics and query debugging',
          icon: <VscTools />,
          locked: false,
          url: ''
        }
      ]
    }
  ]
};

// Flatten all multi-section items arrays to guarantee seamless backward grid loops mapping support
export const DATA = CONFIG.sections.flatMap(section => section.items || []);


// src/data/services/0003-azure.jsx
import { SiTerraform, SiAnsible, SiDocker, SiKubernetes } from "react-icons/si";
import { VscSymbolClass, VscSettingsGear, VscTypeHierarchy, VscCode, VscWand, VscThumbsup, VscTelescope, VscCopilot } from "react-icons/vsc";

export const CONFIG = {
  label: "Microsoft Azure",
  title: "Azure Cloud & Infrastructure DevOps",
  subtitle: "Cloud Automation, Hybrid Solutions, and Infrastructure as Code",
  seo: {
    title: "Azure Cloud Architecting & Pipelines - Remote Tech",
    description: "Professional Microsoft Azure cloud setup, automation scripts, Terraform optimization, and CI/CD pipelines.",
    keywords: ["Microsoft Azure", "DevOps", "Terraform IaC", "Cloud Architecture", "Azure Pipelines"]
  },
  section_title: "Core Azure Capabilities",
  bg_color: "rgba(23, 37, 42, 0.8)",
  accentColor: "bg-blue-600",
  sections: [
    {
      id: "featured-services",
      title: "Featured Cloud Native Tech",
      accentColor: "bg-blue-500",
      layout: "carousel",
      scrollOptions: {
        direction: "left",
        intervalTime: 40,
        step: 1
      },
      items: [
        {
          name: 'Azure DevOps Pipelines',
          desc: 'Continuous Integration / Deployment Engines',
          icon: '',
          locked: false,
          url: 'microsoft.com',
          target: '_blank'
        },
        {
          name: 'Terraform IaC Integration',
          desc: 'Dynamic HashiCorp infrastructure blueprints',
          icon: <SiTerraform />,
          locked: false,
          url: 'terraform.io',
          target: '_blank'
        },
        {
          name: 'Ansible Automation',
          desc: 'Playbook cloud server state configuration',
          icon: <SiAnsible />,
          locked: false,
          url: 'ansible.com',
          target: '_blank'
        },
        {
          name: 'Container Ecosystems',
          desc: 'Docker Images & Azure Kubernetes Services',
          icon: <SiKubernetes />,
          locked: false,
          url: 'microsoft.com',
          target: '_blank'
        }
      ]
    },
    {
      id: "azure-core",
      title: "Engineering Services",
      accentColor: "bg-blue-500",
      layout: "carousel",
      scrollOptions: {
        direction: "right",
        intervalTime: 50
      },
      items: [
        {
          name: 'Cloud Architecture',
          desc: 'Virtual Network and Resource Group Topologies',
          icon: <VscSymbolClass />,
          locked: false,
          url: ''
        },
        {
          name: 'Identity & Security',
          desc: 'Azure Active Directory, Key Vaults, and IAM Policies',
          icon: <VscSettingsGear />,
          locked: false,
          url: ''
        },
        {
          name: 'Hybrid Networking',
          desc: 'ExpressRoute, VPN Gateways, Hub-and-Spoke routers',
          icon: <VscTypeHierarchy />,
          locked: false,
          url: ''
        },
        {
          name: 'App Services',
          desc: 'Dynamic scaling WebApps and Serverless Functions',
          icon: <VscCode />,
          locked: false,
          url: ''
        },
        {
          name: 'Resource Monitoring',
          desc: 'Azure Monitor Log Analytics and App Insights',
          icon: <VscTelescope />,
          locked: false,
          url: ''
        },
        {
          name: 'ARM Templates & Bicep',
          desc: 'Native JSON and declarative infrastructure configurations',
          icon: <VscWand />,
          locked: false,
          url: ''
        },
        {
          name: 'Migration Planning',
          desc: 'On-prem server shifts to virtual hosting stacks',
          icon: <VscThumbsup />,
          locked: false,
          url: ''
        },
        {
          name: 'Cost Management',
          desc: 'Consumption budget tracking and optimization strategies',
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


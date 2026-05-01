// src/data/business_careers.jsx
import { FaCode, FaServer, FaTerminal } from 'react-icons/fa';

export const OPEN_POSITIONS = [
  {
    id: 'dev-001',
    title: 'Senior Spel/Htmpl Developer',
    department: 'CA Services',
    location: 'Remote / US',
    type: 'Contract',
    icon: <FaCode />,
    tags: ['Urgent', 'High-Level'],
    desc: 'Specialist for CA Service Desk Manager customization. Must be proficient in SPEL code and HTMPL/PDM_MACRO customization.',
    requirements: [
      '5+ years CA SDM experience',
      'Experience with REST/SOAP Integrations',
      'Self-healing server config knowledge'
    ]
  },
  {
    id: 'dev-002',
    title: 'DevOps Architect',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    icon: <FaServer />,
    tags: ['New'],
    desc: 'Help us scale our self-hosted infrastructure using Kubernetes, Docker, and Ansible.',
    requirements: [
      'Expertise in Infrastructure as Code (Terraform/Ansible)',
      'Experience with Git-based CI/CD',
      'Knowledge of zero-trust security (Vault)'
    ]
  }
];

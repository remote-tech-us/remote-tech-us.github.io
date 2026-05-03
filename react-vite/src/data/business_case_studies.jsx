// src/data/business_case_studies.jsx
import { FaHospital, FaIndustry, FaGlobe } from 'react-icons/fa';

export const CASE_STUDIES = [
  {
    id: "sdm-optimization",
    client: "Global Logistics Corp",
    sector: "Logistics",
    icon: <FaGlobe />,
    title: "CA SDM SPEL Logic Overhaul",
    challenge: "Client was facing 30-second lag times on ticket saves due to inefficient legacy SPEL code and PDM_MACRO bloat.",
    solution: "Refactored the logic engine to use asynchronous web services and optimized database triggers, moving heavy processing away from the UI thread.",
    results: [
      "90% reduction in save latency",
      "Automated 15 manual workflow steps",
      "Zero downtime during migration"
    ],
    tags: ["CA SDM", "SPEL", "Optimization"]
  },
  {
    id: "self-hosted-stack",
    client: "Healthcare Providers North",
    sector: "Medical",
    icon: <FaHospital />,
    title: "Privacy-First Infrastructure Migration",
    challenge: "Strict HIPAA requirements necessitated moving away from public SaaS tools for project management and internal chat.",
    solution: "Deployed a hardened, self-hosted stack featuring Gitea for code, OpenProject for PM, and Rocket.Chat for communication.",
    results: [
      "Full Data Sovereignty achieved",
      "60% reduction in annual licensing costs",
      "End-to-end encryption for all internal comms"
    ],
    tags: ["Self-Hosted", "Security", "Infrastructure"]
  }
];

// src/data/business_resources.jsx
import { FaDatabase, FaProjectDiagram, FaRocketchat, FaGitAlt, FaTools, FaShieldAlt } from 'react-icons/fa';

export const TECH_STACK = [
  {
    category: "DevOps & Hosting",
    icon: <FaTools />,
    items: [
      { name: "Docker & Kubernetes", desc: "Container orchestration for self-healing apps." },
      { name: "Gitea", desc: "Lightweight, self-hosted Git service for code sovereignty." }
    ]
  },
  {
    category: "Collaboration",
    icon: <FaRocketchat />,
    items: [
      { name: "Rocket.Chat", desc: "Enterprise-grade chat without the Slack price tag." },
      { name: "OpenProject", desc: "Full project management lifecycle control." }
    ]
  },
  {
    category: "Legacy Specialists",
    icon: <FaDatabase />,
    items: [
      { name: "CA SDM (Service Desk)", desc: "Expert SPEL/HTMPL customization and logic." },
      { name: "SQL Server / Postgres", desc: "High-availability database management." }
    ]
  }
];

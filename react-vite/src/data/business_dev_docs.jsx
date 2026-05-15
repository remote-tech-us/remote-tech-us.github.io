// src/data/business_dev_docs.jsx
export const DEV_DOCS_CATEGORIES = [
  {
    id: "getting-started",
    title: "Getting Started",
    pages: [
    { 
      id: "intro", 
      title: "Introduction", 
      content: "Welcome to the Remote Tech documentation. Our infrastructure is built on the principle of data sovereignty and open-source excellence." 
      ,supportedViews: ["console", "html", "markdown"]
      ,allowCopy: false
      ,copyText: false
      ,language: "bash"
      ,code: `echo 'Hello World' `
      ,htmlContent: `<div class="p-4 bg-blue-900/30 border border-blue-500 rounded-lg">
                        <h4 class="text-blue-400 font-bold">HTML Preview Mode</h4>
                        <p class="text-sm">This is raw parsed HTML.</p>
                      </div>`
      ,markdownContent: `### Markdown Mode\n\n* Item 1\n* Item 2\n\nYou can use **bold text** here.`
    },
    { 
      id: "architecture", 
      title: "Global Architecture", 
      content: "We leverage Docker and Kubernetes to orchestrate self-healing environments. Our stack is designed to be cloud-agnostic and fully portable." }
    ]
  },
  {
    id: "legacy-systems",
    title: "CA Service Desk",
    pages: [
    { 
      id: "nxenv-best-practices", 
      title: "NX.env Best Practice", 
      content: "Always update NX_tpl to maintain persistents\ntest.", 
      language: "javascript", // Use lower-case language identifiers
      // Store as a component/function instead of a string
      code: `
const config = {
  engine: "self-hosted",
  uptime: "99.9%"
};`
    },
    { 
      id: "spel-best-practices", 
      title: "SPEL Optimization", 
      content: "When writing SPEL, avoid heavy synchronous logic in triggers. Use web service calls for external integrations to prevent UI blocking.",
      language: "spel", // Use lower-case language identifiers
    },
    { 
      id: "htmpl-macros", 
      title: "HTMPL Customization", 
      content: "Always use PDM_INCLUDE and PDM_MACRO to keep your web forms modular and maintainable across CA SDM upgrades.",
      language: "htmpl", // Use lower-case language identifiers
    }
  ]
    
  },
  {
    id: "self-hosting",
    title: "Self-Hosting Guides",
    pages: [
    { 
      id: "gitea-setup", 
      title: "Gitea Deployment", 
      content: "Our Gitea deployment utilizes Postgres as the backend for reliability. Ensure your SSH keys are managed via the Gitea web interface.", 
      language: "yml", // Use lower-case language identifiers
    },
    { 
      id: "rocket-chat", 
      title: "Rocket.Chat Config", 
      content: "To enable high availability, we deploy Rocket.Chat using a ReplicaSet in MongoDB for seamless chat synchronization.",
      language: "yaml", // Use lower-case language identifiers
    }
    ]
  }
];

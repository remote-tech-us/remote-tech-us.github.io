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
      // Store as a component/function instead of a string
      example: () => (
        <div className="bg-gray-900 p-4 rounded-md font-mono text-sm text-left">
          <p>"Code will live<hr />forever<br />!!!!</p>
          <p className="text-purple-400 text-left">const</p> config = {"{"}
          <div className="pl-4">
            engine: <span className="text-yellow-200">"self-hosted"</span>,
          </div>
          <div className="pl-4">
            uptime: <span className="text-yellow-200">"99.9%"</span>
          </div>
          {"}"};
        </div>
      )
    },
    { 
      id: "spel-best-practices", 
      title: "SPEL Optimization", 
      content: "When writing SPEL, avoid heavy synchronous logic in triggers. Use web service calls for external integrations to prevent UI blocking." 
    },
    { 
      id: "htmpl-macros", 
      title: "HTMPL Customization", 
      content: "Always use PDM_INCLUDE and PDM_MACRO to keep your web forms modular and maintainable across CA SDM upgrades." 
    }
    ]
    
  },
  {
    id: "self-hosting",
    title: "Self-Hosting Guides",
    pages: [
      { id: "gitea-setup", title: "Gitea Deployment", content: "Our Gitea deployment utilizes Postgres as the backend for reliability. Ensure your SSH keys are managed via the Gitea web interface." },
      { id: "rocket-chat", title: "Rocket.Chat Config", content: "To enable high availability, we deploy Rocket.Chat using a ReplicaSet in MongoDB for seamless chat synchronization." }
    ]
  }
];

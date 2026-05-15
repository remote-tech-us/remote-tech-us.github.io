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
      ,markdownContent: `
### Markdown Mode

* Item 1
* Item 2

You can use **bold text** here.

Below is the state workflow for routing active API requests:

\`\`\`mermaid
graph TD
    A[Client Request] --> B{Is Token Valid?}
    B -- Yes --> C[Proceed to Route Component]
    B -- No --> D[Redirect to /login]
    D --> E[Clear Cache Session]
\`\`\`

* Make sure your environment variables match before running this flow.
`
    },
{
  id: "architecture",
  title: "Global Architecture",
  content: "We leverage Docker and Kubernetes to orchestrate self-healing environments. This guide breaks down local project initialization, service topography, and production build pipelines.",
  supportedViews: ["console", "html", "markdown"],
  allowCopy: true,
  language: "bash",
  
  // 1. CONSOLE VIEW: Step-by-step setup commands
  code: `# Clone the infrastructure repository
git clone https://github.com/remote-tech-us/platform-infra.git
cd platform-infra

# Initialize environment configurations
cp .env.example .env

# Fire up core dependencies using Docker Compose
docker compose up -d --build

# Verify container runtime states
docker ps`,

  // 2. HTML VIEW: Styled layout showcasing configuration rules
  htmlContent: `<div class="space-y-4">
    <div class="p-5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
      <h4 class="text-emerald-400 font-bold flex items-center gap-2 mb-1">
        <span>🚀</span> Core Architectural Principle
      </h4>
      <p class="text-sm text-gray-300 leading-relaxed">
        Our services run completely stateless. State configurations, cache layers, and persistent volumes are decoupled from processing nodes to ensure instant failover orchestration.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
        <span class="text-xs font-bold text-blue-400 block mb-1">Ingress Controller</span>
        <p class="text-xs text-gray-400">Traefik edges incoming reverse-proxy requests, enforcing TLS terminations and routing pathways natively.</p>
      </div>
      <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
        <span class="text-xs font-bold text-purple-400 block mb-1">State Isolation</span>
        <p class="text-xs text-gray-400">PostgreSQL and Redis instances operate inside dedicated internal mesh networks, locked out from public web access.</p>
      </div>
    </div>
  </div>`,

  // 3. MARKDOWN VIEW: Deployment workflow documentation utilizing your working Mermaid parser
  markdownContent: `
### Orchestration Flow

Setting up the stack triggers automated orchestration hooks across our target nodes. The layout below highlights how an incoming developer request interacts with our self-hosting core components:

\`\`\`mermaid
graph TD
A[Developer Machine] -->|1. git clone & setup| B(Docker Compose Engine)
B -->|2. Pull Base Images| C[Gitea / PostgreSQL]
B -->|3. Establish Internal Mesh| D[Rocket.Chat / Redis]
C -->|4. Health Check Pass| E{Traefik Reverse Proxy}
E -->|Route Traffic| F[Local Dev Environment Launched]
\`\`\`

#### Deployment Prerequisites
* **Docker Engine** v24.0.0 or higher
* **Compose Plugin** v2.20.0+
* Minimum **4GB allocated RAM** inside your local daemon settings for fluent stack execution.
`
}
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

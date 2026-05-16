### Universal Data Extraction Framework

The data-loader utility is optimized to bypass runtime server restrictions by evaluating local assets during compile time. This ensures fast documentation loading speeds and robust type-safe mapping.

#### Key Mechanics

*   **Context Isolation:** Evaluates raw string literals (`?raw`) to avoid runtime executions.
*   **Reactive Filtering:** Computes the dropdown choices dynamically based on your chosen display mode.
*   **Dual-Role Inspector:** Allows structural markup files (`.html`, `.md`) to be parsed as code inside the Console tab, or executed as native components in their respective preview panels.

Below is the state workflow map for how files are processed:

```mermaid
graph TD
    A[Vite Compiles Directory Matrix] --> B{What File Type?}
    B -->|content.json| C[Hydrate Sidebar & Page Titles]
    B -->|.html / .md| D[Register Source Code AND Render Preview Capability]
    B -->|.sh / .yml| E[Route Exclusively to Console Tab List]
    
    F[User Interface Select Switches] --> G{Active Mode?}
    G -->|Console Mode| H[Show Every File as Code Syntax]
    G -->|Markdown Mode| I[Filter Selector to MD Files + Parse Elements]
    G -->|HTML Mode| J[Filter Selector to HTML Files + Render Layout Canvas]

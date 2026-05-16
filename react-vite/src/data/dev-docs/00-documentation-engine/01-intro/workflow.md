### Markdown Mode - This is the workflow.md file

* Item 1
* Item 2

You can use **bold text** here.

Below is the state workflow for routing active API requests:

```mermaid
graph TD
    A[Client Request] --> B{Is Token Valid?}
    B -- Yes --> C[Proceed to Route Component]
    B -- No --> D[Redirect to /login]
    D --> E[Clear Cache Session]

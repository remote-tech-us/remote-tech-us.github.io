The following diagram shows how to modify the schema using Web Screen Painter:
# How to Modify the Schema Using Web Screen Painter

```mermaid
flowchart TD
    A[Service Desk Administrator] --> B{Open Schema Designer on WSP}
    
    %% Outer completely invisible container to hold the floating bold text
    subgraph OUT [ ]
        direction TD
        TITLE["`**Schema Work**`"]
        
        %% Inner actual group box
        subgraph WORK [ ]
            direction LR
            AddTable[Add a Table] ~~~ AddColumn[Add a Column] ~~~ Modify[Modify a Table or Column]
        end
    end
    
    %% Style rules to hide the outer box wrapper and remove inner labels
    style OUT fill:none,stroke:none
    style TITLE fill:none,stroke:none,font-size:16px
    
    B --> WORK
    WORK --> D[Test Schema Modifications]
    D --> E{Schema modifications are correct?}
    
    E -- Yes --> G[Publish Schema Modifications]
    G --> H[Modify Site-Defined Columns]
    E -- No --> F[Revert Schema Modifications]


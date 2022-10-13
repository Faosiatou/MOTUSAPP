```mermaid
sequenceDiagram
    CLIENT->>+MOTUS: 
    MOTUS->>+CLIENT: 
    CLIENT->>+AUTH: 
    AUTH ->>+CLIENT: login
    MOTUS->>+CLIENT: Index.html
    CLIENT->>+MOTUS: quel est le mot du jour?
    MOTUS->>+CLIENT: Mot du jour
    CLIENT->>+CLIENT: Essais, score

```

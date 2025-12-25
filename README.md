# Campus Opportunity & Internship Management Platform

A campus-first platform to manage on-campus internship and placement opportunities using a structured, auditable workflow — while retaining **Google Sheets as the final institutional output**.

This repository follows a **documentation-first** approach. Architecture and system contracts are finalized before implementation.

---

## Project Status

- Architecture: Finalized
- Documentation: Complete
- Implementation: Pending / In Progress

---

## Core Principles

- Google Sheets is the final institutional output
- Firestore is the operational datastore
- No persistent student academic profiles
- Each application is a fresh data snapshot
- Eligibility rules are frozen after publish
- AI is assistive only, never authoritative
- Export is idempotent and auditable
- Frontend is logic-free; backend owns correctness

---

## Documentation Index

All system design and decisions are documented under the `docs/` directory.

### Foundations
- [`00_overview.md`](docs/00_overview.md) — System overview and scope
- [`01_problem_context.md`](docs/01_problem_context.md) — Real-world constraints and motivation
- [`02_system_architecture.md`](docs/02_system_architecture.md) — High-level architecture and principles
- [`03_component_design.md`](docs/03_component_design.md) — Component responsibilities and boundaries

### Core System Contracts
- [`04_data_models.md`](docs/04_data_models.md) — Firestore schemas and mutability rules
- [`05_api_contracts.md`](docs/05_api_contracts.md) — Backend API contracts

### Runtime Behavior
- [`06_data_flow_diagrams.md`](docs/06_data_flow_diagrams.md) — Mermaid flow diagrams
- [`07_export_pipeline.md`](docs/07_export_pipeline.md) — Google Sheets export mechanics

### Governance & Safety
- [`08_ai_usage_and_limits.md`](docs/08_ai_usage_and_limits.md) — AI boundaries and human-in-the-loop guarantees
- [`09_security_and_roles.md`](docs/09_security_and_roles.md) — Role model and access control
- [`10_scalability_and_failure_modes.md`](docs/10_scalability_and_failure_modes.md) — Load assumptions and failure handling

### Forward-Looking
- [`11_future_scope.md`](docs/11_future_scope.md) — Explicit future extensions and non-goals

---

## Repository Structure

```
campus-opportunity-platform/
├── docs/
│   ├── 00_overview.md
│   ├── 01_problem_context.md
│   ├── 02_system_architecture.md
│   ├── 03_component_design.md
│   ├── 04_data_models.md
│   ├── 05_api_contracts.md
│   ├── 06_data_flow_diagrams.md
│   ├── 07_export_pipeline.md
│   ├── 08_ai_usage_and_limits.md
│   ├── 09_security_and_roles.md
│   ├── 10_scalability_and_failure_modes.md
│   └── 11_future_scope.md
└── README.md
```

---

## Next Phase

The next phase of this project focuses on **implementation**, starting backend-first with:

- Auth and role enforcement
- Opportunity lifecycle APIs
- Eligibility engine
- Google Sheets export service

Implementation will strictly follow the contracts defined in the documentation above.

---

## License

To be decided.

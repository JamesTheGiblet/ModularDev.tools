# Praximous Public Roadmap

Welcome to the Praximous public roadmap! Our vision is to create the industry standard for intelligent, developer-friendly API documentation. We believe that documentation shouldn't be an afterthought but a core, living part of the development lifecycle. This document outlines our current focus, our next steps, and our long-term vision.

This roadmap is a living document. It will evolve based on community feedback, market trends, and technological advancements. We invite you to be a part of the conversation.

---

## ✅ Now: Version 1.0 - The Foundation

This is the powerful, stable version of Praximous available today. Our initial focus is on perfecting the core experience of generating high-quality, accurate documentation from your existing codebase. We've built a hybrid platform that combines an intuitive web interface for management with a powerful CLI for automation, catering to both individual developers and large enterprise teams.

### Unified Experience

We provide the right tool for the job, whether you're in a GUI or a terminal.

* **Web-Based Dashboard:** A central, intuitive GUI to manage your documentation projects.
  * **For:** Core, Pro, and Enterprise users.
  * **Features:** Configure repositories, trigger documentation builds, view and share generated documentation, manage user access, and track documentation quality.
* **Powerful CLI:** A full-featured command-line interface designed for developers and automation.
  * **Use Cases:** Integrate documentation generation directly into your CI/CD pipelines (e.g., GitHub Actions, Jenkins, GitLab CI). Run validation checks locally before committing code. Script complex workflows.
* **On-Premises UI:** The Enterprise version is a complete, self-hosted web application, providing maximum control and security.
  * **Benefit:** All data, including source code and generated documentation, remains within your network.

### Core Engine

The heart of Praximous is a robust and reliable documentation generation engine.

* **Multi-Language Rule-Based Extraction:** We parse your source code and comments to extract API information.
  * **Languages:** JavaScript/TypeScript (JSDoc), Python (Docstrings), Java (Javadoc), Go (Godoc).
  * **How it Works:** By analyzing code annotations, function signatures, and type information, we build a precise representation of your API without hallucination. This deterministic approach ensures accuracy.
* **OpenAPI 3.0 Specification Generation:** We generate industry-standard OpenAPI 3.0 specs from the extracted data.
  * **Benefit:** This unlocks the entire OpenAPI ecosystem. Use your generated spec with tools for testing, mocking, client SDK generation, and more.

### AI Capabilities

We layer intelligent features on top of our core engine to enhance and accelerate your workflow.

* **Intelligent Description & Example Generation:** Our AI assists in writing clear, human-friendly documentation.
  * **How it Works:** It analyzes function names, parameters, and code logic to suggest endpoint summaries and parameter descriptions. It can also generate valid request/response body examples based on your data structures.
* **AI Guardrails and Validation:** The AI acts as a reviewer, helping you maintain high standards.
  * **Checks:** It flags incomplete descriptions, identifies mismatches between examples and schemas, and suggests improvements based on API documentation best practices.

### Enterprise Features

Features tailored for the security, scalability, and governance needs of large organizations.

* **On-Premises Deployment (Docker):** Deploy Praximous within your own infrastructure with ease.
  * **Technology:** Delivered as a set of Docker containers, allowing for simple deployment and scaling with tools like Docker Compose or Kubernetes.
* **SSO Integration & Custom Rules:** Integrate seamlessly with your existing enterprise systems.
  * **SSO:** Support for standard identity providers like SAML, Okta, and Azure AD for centralized user management.
  * **Custom Rules:** Define and enforce your organization's own documentation standards. For example, require a specific format for all endpoint descriptions or mandate that every endpoint has a defined error response.

---

## ⏳ Next: The Ecosystem

Our next major focus is on expanding Praximous from a standalone tool into a connected part of the broader developer ecosystem. We want to bring documentation to where you work, breaking down silos and making API information more accessible and useful.

* **Plugin & Extension System:** We will release an official API for building third-party extensions.
  * **Vision:** Foster a community that can add support for more languages (e.g., C#, Ruby, PHP), frameworks (e.g., Django, Spring), and integrations with other developer tools. This will allow Praximous to adapt to any tech stack.
* **API Management Integrations:** Deep, bi-directional integrations with popular platforms.
  * **Platforms:** Postman, Stoplight, SwaggerHub, and other API design and management tools.
  * **Functionality:** Imagine a two-way sync where changes to your code are automatically reflected in your Postman collections, and comments from testers in Stoplight are linked back to the relevant code.
* **Advanced AI Options:** More power and control over the AI that powers Praximous.
  * **Local Models:** For on-premises enterprise customers, we will add support for running local, open-source LLMs (e.g., Llama, Mistral). This enables all AI features to run in a completely air-gapped environment, ensuring maximum data privacy.
  * **Fine-Tuning:** The ability to fine-tune AI models on your own codebase and existing documentation. This will result in highly-contextual, domain-specific suggestions that match your company's style and terminology.
* **Collaboration Tools:** We're building features for teams to work together on documentation directly within the Praximous web dashboard.
  * **Features:** Collaborative editing with real-time cursors, a commenting and suggestion system (like Google Docs), and formal approval workflows to ensure documentation is reviewed and signed off before being published.

---

## 🔭 Future: The Intelligence Platform

Looking further ahead, our vision is to transform Praximous into an intelligent platform that actively assists in the entire API lifecycle, from design and development to deprecation and governance.

* **Predictive Analytics & API Insights:** Praximous will become a proactive partner in API design.
  * **How:** By analyzing API traffic and usage patterns (via integrations), it will provide proactive recommendations in the dashboard. For example: "Endpoint `/v1/users` has a high error rate, consider clarifying its documentation" or "This API is experiencing high latency; have you considered pagination?"
* **Natural Language Interface:** Interact with, query, and even design your APIs using plain English.
  * **Examples:** In the UI, you could type "Show me all endpoints that are deprecated" or "Create a new `POST /widgets` endpoint that accepts a name and a price." The platform would then generate the corresponding code stubs and documentation.
* **Automated Testing & Security:** Leverage your documentation as a source of truth for quality assurance.
  * **Test Generation:** Automatically generate integration test suites (e.g., for Jest, Pytest) that validate your API's implementation against its OpenAPI specification. A failing test means your code and docs are out of sync.
  * **Security Scans:** Automatically scan your API definitions for common security vulnerabilities (e.g., lack of authentication on sensitive endpoints, insecure data exposure).
* **Unified API Governance:** A single pane of glass for discovering, managing, and governing all APIs across a large organization.
  * **Goal:** Create a comprehensive API catalog that helps reduce redundant work, enforce consistent standards, track ownership, and provide leadership with a clear view of the organization's entire API landscape.

---

## 🙌 Get Involved

Your feedback is crucial to shaping the future of Praximous. We are building this for you, and we want to hear from you.

* **Request a Feature:** Have an idea that would make Praximous better? Open an issue on our GitHub repository.
* **Report a Bug:** Help us improve by reporting any issues you find. A detailed bug report is one of the most valuable contributions.
* **Contribute:** We welcome contributions from the community! Check out our `CONTRIBUTING.md` guide to get started with setting up the project and making your first pull request.

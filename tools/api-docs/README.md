# Praximous - API Documentation Generator

## 🚀 Overview

Praximous is an intelligent API documentation generator that combines a powerful web dashboard with a flexible command-line tool. It connects directly to your source code repository, combining rule-based precision with AI-powered enrichment to produce comprehensive, interactive API documentation.

### Documentation, as a byproduct of code

## ✨ Features

- **Web-Based Dashboard:** Manage all your documentation projects, users, and settings from a central, intuitive GUI.
- **Git Repository Integration:** Connect directly to your GitHub, GitLab, or Bitbucket repositories.
- **Rule-Based Foundation:** Deterministic API extraction from your source code (JS/TS, Python, Java, Go) for maximum accuracy.
- **AI Enhancement (Pro Tier):** Intelligently generate descriptions, examples, and parameter explanations to enrich your documentation.
- **Powerful CLI:** A full-featured CLI for power-users and integrating documentation generation into your CI/CD pipelines.
- **Enterprise Ready:** On-premises deployment, SSO, custom rule packs, and advanced security features for enterprise needs.

## 🚀 Quick Start: Web Dashboard

Get started in minutes with our web-based GUI.

1. **Sign Up:** [**Go to app.praximous.dev**](https://www.google.com/search?q=https://app.praximous.dev) and create your free Core account.
2. **Connect Repository:** Authorize Praximous to access the repository you want to document.
3. **Generate Docs:** Configure your project with a few clicks and run your first documentation generation.

That's it\! Your documentation is ready to view and share.

## 🤖 CLI for Automation & CI/CD

For power-users and automation, the Praximous CLI provides full control from your terminal.

### Installation

```bash
npm install -g praximous
```

### Usage

After configuring your project in the web dashboard, you can use the CLI to trigger generation locally or in your CI/CD pipeline.

```bash
# Authenticate the CLI with your Praximous account
praximous login

# Pull project settings from the web dashboard
praximous pull <project-id>

# Run generation
praximous generate
```

### Example CI/CD Integration (GitHub Actions)

```yaml
- name: Generate API Documentation
  run: |
    npm install -g praximous
    praximous generate --token ${{ secrets.PRAXIMOUS_API_TOKEN }}
```

## 💰 Pricing Tiers

Praximous is available in three tiers, all manageable through the web dashboard.

### Core (Free)

- Web Dashboard & CLI
- Connect up to 3 repositories
- 50 endpoints maximum
- Rule-based API extraction
- OpenAPI 3.0 export

### Pro (£4.95/month)

- Everything in Core
- Unlimited repositories & endpoints
- AI-powered descriptions & examples
- Custom branding
- Email support

### Enterprise (£99+/month)

- Everything in Pro
- On-premises deployment
- SSO integration & custom rule packs
- Dedicated support & SLA guarantees

## 🤝 Contributing

We welcome contributions\! Please see our `CONTRIBUTING.md` for details on how to get started.

## 📄 License

Praximous is licensed under the MIT License. See `LICENSE` for details.

-----

\<div align="center"\>

**Praximous** - Because great APIs deserve great documentation.

[Get Started at app.praximous.dev](https://www.google.com/search?q=https://app.praximous.dev) | [Read Docs](https://docs.praximous.dev) | [Contact Support](mailto:support@praximous.dev)

\</div\>

# ModularDev.tools

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Maintained](https://img.shields.io/badge/maintained-yes-brightgreen)

ModularDev.tools is a platform offering a suite of specialized developer tools designed to streamline workflows, enforce consistency, and accelerate the development process.

![ModularDev.tools Homepage](./images/homepage-screenshot.png)

---

## About The Project

Our mission is to supercharge the development workflow by providing powerful, intuitive, and modular tools. We believe that developers should spend less time on repetitive, boilerplate tasks and more time on what truly matters: creating innovative products. This repository contains the main marketing website and the individual tool applications.

---

## Our Tools

We offer a collection of tools to solve common development challenges.

### 🎨 Design System Generator (Praximous)

* **Description:** A full-stack application to visually create, manage, and export a consistent, brand-aligned CSS design system. It features a live editor, real-time previews, user accounts, and Stripe integration for "Pro" features.
* **Status:** Live
* **Learn More:** [View Tool Page](./tools/design-system/index.html)

### 📄 API Documentation Generator (Praximous)

* **Description:** An intelligent tool that generates beautiful, accurate, and interactive API documentation directly from your source code. It combines rule-based extraction with AI-powered enrichment and offers both a web dashboard and a powerful CLI for CI/CD integration.
* **Status:** Live
* **Learn More:** [View Tool Page](./tools/api-docs/index.html)

### 🧩 Component Library

* **Description:** Build and maintain reusable UI component libraries that work across different frameworks.
* **Status:** Coming Soon
* **Learn More:** [View Tool Page](./tools/component-library/index.html)

---

## Technology Stack

This project uses a mix of technologies across the main site and the individual tools.

* **Main Website:**
  * **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Individual Tools (e.g., Design System Generator):**
  * **Backend:** Node.js, Express.js
  * **Database:** PostgreSQL
  * **Services:** Stripe (Payments), AWS S3 (CDN)
  * **Authentication:** JSON Web Tokens (JWT)

---

## Project Structure

A brief overview of the repository's structure.

```text

ModularDev.tools/
├── css/                  # Main website styles
├── images/               # Shared images
├── js/                   # Main website scripts
├── tools/                # Individual tool applications
│   ├── api-docs/         # API Documentation Generator
│   ├── component-library/ # Component Library (WIP)
│   └── design-system/    # Design System Generator
├── about.html
├── contact.html
├── index.html
├── privacy.html
├── pricing.html
└── terms.html
```

---

## ⚠️ Important: Development Server Required

This project uses JavaScript to load reusable components (like the header and footer) and uses root-relative paths (e.g., `/css/main.css`) for assets.

**Because of this, you cannot simply open the `index.html` file directly in your browser (using a `file:///...` path).**

You **must** run the project through a local web server. The easiest way to do this is with the **Live Server** extension for Visual Studio Code. First, open the entire `ModularDev.tools` folder in VS Code, then right-click `index.html` and choose "Open with Live Server".

---

## Getting Started

To get a local copy of the main website up and running, follow these simple steps.

1. Clone the repository:

    ```bash
    git clone https://github.com/ModularDev-Tools/website.git
    cd website
    ```

2. **Open the `ModularDev.tools` folder in your code editor (like VS Code).** Then, use a live-server extension to open `index.html`.
    *(See the "Development Server Required" note above for more details.)*

### For Tool-Specific Development

Each tool in the `/tools` directory is a standalone project with its own dependencies and setup instructions. Please refer to the `README.md` inside each tool's folder for detailed setup guides.

* `./tools/design-system/README.md`
* `./tools/api-docs/README.md`

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

---

## License

Distributed under the MIT License. See the `LICENSE` file for more information.

---

## Contact

Project Link: <https://github.com/ModularDev-Tools/website>

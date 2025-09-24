# Veriscan

### Know Your State. Trust Your System

Veriscan is a high-performance, lightweight File Integrity Monitoring (FIM) solution designed for modern security, DevOps, and operations teams. It provides certainty in a world of constant change by creating a trusted baseline of your systems and instantly detecting any unauthorized or unexpected modifications.

---

## The Problem: The High Cost of Unseen Change

In any complex IT environment, your file systems are under constant pressure from deployments, user activity, automated processes, and potential threats. Without a dedicated monitoring solution, you are exposed to critical blind spots that carry significant risk:

- **🤫 Silent Breaches:** Attackers often modify configuration files, inject backdoors, or alter binaries to establish persistence. These subtle changes can go unnoticed by traditional security tools for months.
- **⚙️ Configuration Drift:** Unplanned changes across servers lead to unstable environments, application failures, and security vulnerabilities that are difficult to troubleshoot.
- **📉 Compliance Gaps:** Regulations like PCI-DSS, HIPAA, and SOX explicitly require monitoring of critical system files. A lack of visibility means a failed audit, hefty fines, and reputational damage.
- **💥 Incident Response Delays:** When an incident occurs, the first questions are "What changed?" and "When?". Without a clear record, incident response teams waste critical time searching for the source of the compromise.

---

## The Veriscan Solution: Certainty Through Verification

Veriscan solves these problems by providing a powerful, reliable, and easy-to-use tool to monitor, verify, and report on file system integrity. It operates on a simple yet powerful principle: establish a source of truth and relentlessly flag any deviation.

- **✅ Establish an Immutable Baseline:** Veriscan performs a deep, recursive scan of your specified directories, using cryptographic SHA-256 hashes to create a unique and verifiable "fingerprint" of every file. This baseline is stored in a secure local database, serving as your system's trusted state.
- **👁️ Gain Instant, Continuous Visibility:** Once the baseline is set, Veriscan's real-time monitoring engine immediately detects any create, write, or delete event. You no longer have to wonder if a critical file has been altered; you will know.
- **📈 Automate Compliance & Auditing:** Generate clear, timestamped reports in multiple formats (HTML, JSON, CSV) that provide auditors with the exact evidence they need to verify compliance, dramatically reducing audit preparation time and stress.

---

## Key Use Cases

Veriscan is a versatile tool that provides value across multiple operational domains:

| Use Case | Description |
| :--- | :--- |
| **Security & Intrusion Detection** | Detect the tell-tale signs of a breach, such as modified system binaries (`/bin`, `/sbin`), altered configuration files (`/etc`), or new files dropped in sensitive locations. |
| **Change Management & Verification** | Validate that software deployments, patches, or configuration updates have been applied correctly and haven't introduced unintended side effects. |
| **Compliance & Auditing** | Fulfill requirements for regulations like PCI-DSS (Requirement 11.5), SOX, HIPAA, and ISO 27001 by maintaining a verifiable audit trail of all changes to critical system files. |
| **Incident Response & Forensics** | During an incident, use Veriscan's diff reports to instantly pinpoint what files were changed, created, or deleted by an attacker, accelerating containment and recovery. |

---

## Core Features

- **Deep System Baselining (`scan`)**
    Perform an initial deep scan to create a comprehensive, cryptographically secure baseline of your file system. This is your "source of truth".

- **Real-Time Monitoring (`watch`)**
    The `watch` command uses the high-performance `fsnotify` engine to monitor directories for changes in real-time, providing immediate feedback on filesystem activity.

- **Intelligent Difference Reporting (`diff`)**
    Run a `diff` to compare the current state of your system against the last known baseline. The output clearly categorizes all changes into Added, Modified, Moved, or Deleted files.

- **Versatile Reporting Engine**
    Export reports in multiple formats to fit any workflow: a human-readable `text` summary, a browser-friendly `html` report, or machine-readable `json` and `csv` for integration with SIEMs or other tools.

- **High-Performance Architecture**
    Veriscan is built in Go and leverages a concurrent worker pool to scan thousands of files per second. It also uses an efficient partial-hashing method for large files to minimize I/O and CPU impact.

- **Resilient Local Database**
    File state information is stored in a robust local SQLite database, eliminating the need for complex external database dependencies.

- **Automated Maintenance**
    The system includes built-in scheduling for database backups and retention policies to automatically clean up old scan data, ensuring reliable, long-term operation.

---

## Pricing Tiers

We offer flexible tiers to suit every need, from individual developers to large-scale enterprises.

| Feature                      | Community            | Professional             | Enterprise              |
| :--------------------------- | :------------------: | :----------------------: | :---------------------: |
| **Core Functionality** |                      |                          |                         |
| Scan, Diff, & Watch Modes    |           ✔          |            ✔             |            ✔            |
| Multiple Report Formats      |           ✔          |            ✔             |            ✔            |
| Scan History Retention       |        7 days        |         365 days         |        Unlimited        |
| Automated Backups            |           -          |            ✔             |            ✔            |
| **Management & Support** |                      |                          |                         |
| Alerting Hooks (Slack, Email)|           -          |            ✔             |            ✔            |
| Centralized Web Dashboard    |           -          |            -             |            ✔            |
| REST API Access              |           -          |            -             |            ✔            |
| Support                      |      Community       | Standard Business Hours  |   24/7 Priority Support |
| **Price** |       **Free** | **$20**</br>/agent/month |     **Contact Us** |

---

## Public Roadmap

Our team is continuously working to enhance Veriscan. Here's what we have planned:

### Q1 2026 (Planned) 🗓️

- **Alerting Hooks:** Native integration for sending reports and real-time alerts to destinations like Slack, PagerDuty, and email.
- **Centralized Configuration:** The ability to manage agent configurations from a central point for easier deployment at scale.

### Q2 2026 (Planned) 🗓️

- **Centralized Web Dashboard:** A comprehensive UI to visualize changes across your entire fleet, manage agents, and review historical scan data from a single pane of glass.
- **REST API:** A full-featured API for programmatically triggering scans, managing baselines, and integrating Veriscan data into other platforms.

### Q3 2026 (In Research) 🧪

- **Role-Based Access Control (RBAC):** Granular permissions for the Web Dashboard and API to support enterprise security policies.
- **Cloud Storage Support:** The ability to run scans and monitor integrity for objects in cloud storage buckets (e.g., AWS S3, Google Cloud Storage).

---

## Getting Started

1. **Initialize Configuration:** Create the default `config.json` and database files.

    ```bash
    ./veriscan init
    ```

2. **Create a Baseline:** Run your first scan to establish the initial state.

    ```bash
    ./veriscan scan
    ```

3. **Monitor for Changes:** Start the real-time monitoring engine.

    ```bash
    ./veriscan watch
    ```

4. **Check for Differences:** After making some changes, run a diff to see a report.

    ```bash
    ./veriscan diff -format html > report.html
    ```

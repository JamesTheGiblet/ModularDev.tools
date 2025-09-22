# Praximous Design System Generator

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/tech-Node.js%20%7C%20Express%20%7C%20Vanilla%20JS-orange)
![Maintained](https://img.shields.io/badge/maintained-yes-brightgreen)

The Praximous Design System Generator is a full-stack web application designed to create, manage, and export a consistent and brand-aligned CSS stylesheet. It provides a live, interactive interface to visually define design tokens and immediately see their effect on common UI components.

This application has evolved from a simple client-side tool into a complete service with user accounts, "Pro" tier subscriptions via Stripe, and an admin dashboard, demonstrating a full-fledged SaaS architecture.

![Screenshot of the Praximous Design System Generator in action.](../../images/Screenshot.png)

---

## The Problem: The Challenge of Brand Consistency

As Praximous scales and develops more digital products, we face several critical challenges:

* **🎨 Brand Dilution:** Without a central style guide, projects can develop inconsistencies in colors, fonts, and spacing, leading to a fragmented and unprofessional user experience.
* **⏳ Wasted Developer Hours:** Developers spend valuable time writing boilerplate CSS, looking up hex codes, and "reinventing the wheel" for basic components in every new project.
* **🔧 High Maintenance Overhead:** A simple brand refresh (e.g., changing the primary color) becomes a monumental task, requiring developers to hunt down and edit multiple stylesheets across dozens of projects.
* **🚧 Designer-Developer Friction:** A gap often exists between a designer's vision and the final coded product. Manually translating design specs into CSS can lead to errors and misinterpretations.

## The Solution: A Single Source of Truth

This Design System Generator solves these problems by becoming the **single source of truth** for all front-end styling at Praximous.

* **✅ Enforces Uniformity:** By generating the *exact* same CSS variables and styles every time, it guarantees that every button, card, and layout across all our applications looks and feels like it's part of the same cohesive brand.
* **🚀 Accelerates Development:** Developers can skip the tedious CSS setup. They simply download the latest `praximous-styles.css` from this tool and can immediately start building features with pre-made, on-brand components.
* **⚙️ Centralizes Management:** Need to update the brand's border radius? Change it here once, click "Export," and the update is ready to be deployed across all projects. What used to take days now takes seconds.
* **🤝 Bridges the Gap:** The visual interface empowers designers and brand managers to make tangible styling decisions. They can perfect the brand's look and feel and export the production-ready code themselves, ensuring a perfect translation from vision to reality.

---

## Key Features

### Core Generator Features

* **Live Visual Editing:** Modify brand colors, fonts, spacing, shadows, and more using the intuitive sidebar controls.
* **Real-time Preview:** See your changes instantly reflected on a comprehensive set of sample UI components.
* **Dark/Light Theme Support:** A built-in theme toggle demonstrates and supports both light and dark mode styling.
* **Accessibility Checker:** The tool provides real-time color contrast warnings to help you build accessible palettes.
* **Multiple Export Options:**
  * **Export CSS:** Generate a clean, well-structured CSS file containing all your defined design tokens.
  * **Export SCSS:** Download just the variables for use in a SASS/SCSS project.
  * **Generate Docs:** Create a self-contained HTML style guide from your current theme.
* **Save & Load Themes:** Save your current settings to a local JSON file and load them back in later, allowing for multiple brand variations.

### Full-Stack & Pro Features

* **User Authentication:** Secure user registration, login, and password reset functionality using JWTs.
* **Stripe Subscriptions:** "Pro" tier functionality powered by Stripe Checkout for recurring subscriptions.
* **Stripe Webhooks:** A secure webhook endpoint to listen for Stripe events (e.g., `checkout.session.completed`, `customer.subscription.deleted`) and automatically update user status in the database.
* **Customer Portal:** Pro users can manage their subscription (update payment methods, cancel, view billing history) through a secure, Stripe-hosted customer portal.
* **Admin Dashboard:** A protected admin area with a paginated and searchable list of all users. Admins can grant/revoke "Pro" status and delete users.
* **Role-Based Access:** The application distinguishes between standard `user` and `admin` roles, with protected routes and UI elements for admins.
* **Simulated Pro Features:** The UI includes interactive modals for advanced features like publishing to a CDN, syncing with Figma, using a Theming API, and applying custom branding to demonstrate the full vision of the product.

---

## Technology Stack

This project is built with a modern, robust stack.

* **Backend:**
  * **Node.js & Express.js:** For the server, API, and routing.
  * **Stripe:** For processing payments and managing subscriptions.
  * **JSON Web Tokens (JWT):** For secure, stateless user authentication.
  * **AWS SDK for S3:** For uploading generated stylesheets to a CDN.
  * **Bcrypt.js:** For hashing user passwords.  
  * **PostgreSQL:** A robust, open-source object-relational database system for production data.

* **Frontend:**
  * **HTML5:** For the semantic structure of the application.
  * **CSS3:** For all styling, leveraging **CSS Custom Properties (Variables)** for powerful and dynamic theming.
  * **Vanilla JavaScript (ES6+):** For all interactivity, DOM manipulation, and API communication. No frontend frameworks are used.

---

## Local Development Setup

### Prerequisites

* Node.js (v18 or later recommended)
* PostgreSQL client tools (for `psql` command-line access). The easiest way to get this is to install PostgreSQL locally from the official website.
* npm (comes with Node.js)
* A code editor like VS Code with the Live Server extension.

### 1. Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ModularDev-Tools/design-system-generator.git
    cd design-system-generator
    ```

2. Install backend dependencies:
    *Note: This includes the AWS SDK for S3.*

    ```bash
    npm install
    ```

### 2. Environment Variables

Create a `.env` file in the root of the project and add the following variables. You will need a Stripe account to get these keys.

```env
# Stripe API Keys (from your Stripe Dashboard)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Stripe Product Price IDs (create a product in your Stripe Dashboard)
PRO_PRICE_ID=price_... # Live mode price ID
PRO_PRICE_ID_TEST=price_... # Test mode price ID

# Application Security
JWT_SECRET=your_super_secret_jwt_string

# AWS S3 Configuration (for the "Publish" feature)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_s3_bucket_region # e.g., us-east-1
S3_BUCKET_NAME=your_unique_s3_bucket_name

# Database Connection (for local development)
# Use the EXTERNAL connection string from your database provider (e.g., Render)
DATABASE_URL=postgresql://praximous_design_system_generator_user:i3vzJ0tXufNsDef2tgcGTITZbdhArAWI@dpg-d36ntcmmcj7s73dov260-a.frankfurt-postgres.render.com/praximous_design_system_generator

# Frontend URL (for local development)
FRONTEND_URL=http://127.0.0.1:5500
```

#### Getting AWS S3 Credentials

The "Publish" feature requires an AWS S3 bucket. Here’s how to get the required credentials:

1. **Create an S3 Bucket:**
    * In the AWS S3 Console, create a new bucket.
    * The **bucket name** is your `S3_BUCKET_NAME`.
    * The **region** (e.g., `us-east-1`) is your `AWS_REGION`.
    * In the "Permissions" tab, **uncheck "Block all public access"**.

2. **Create an IAM User:**
    * In the AWS IAM Console, create a new user.
    * Attach the `AmazonS3FullAccess` policy directly to this user.
    * After creation, generate an **access key**.
    * The **Access key ID** is your `AWS_ACCESS_KEY_ID`.
    * The **Secret access key** is your `AWS_SECRET_ACCESS_KEY`. **Save this immediately, as it will not be shown again.**

3. **Set Bucket Policy:**
    * Go back to your S3 bucket's "Permissions" tab and edit the **Bucket policy**.
    * Add a policy to allow public reads. **Important:** You must replace the placeholder `your_unique_s3_bucket_name` in the `Resource` line with your actual bucket name.

        ```json
        {
            "Version": "2012-10-17",
            "Statement": [ { "Effect": "Allow", "Principal": "*", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::your_unique_s3_bucket_name/*" } ]
        }
        ```

    * For example, if your bucket is named `praximous-styles-prod-123`, the `Resource` line should be:

        ```json
        "Resource": "arn:aws:s3:::praximous-styles-prod-123/*"
        ```

    * **What this policy does:** This policy uses the same structure as the AWS Policy Generator.
        * **Effect: `Allow`**: Grants permission.
        * **Principal: `*`**: The permission is granted to everyone (public access).
        * **Action: `s3:GetObject`**: Allows reading/downloading files.
        * **Resource: `.../*`**: Applies this rule to all files inside your bucket.

        In short, it makes the files in your bucket publicly readable, which is required for the "Publish" feature to work like a CDN.

### 3. Create an Admin User

The application includes a script to automatically create a default admin user based on your environment variables.

1. **Configure Admin Credentials (Optional):** Add the following to your `.env` file. If you don't, it will use default credentials (`admin@example.com` / `default_password`).

    ```env
    ADMIN_EMAIL=your_admin_email@example.com
    ADMIN_PASSWORD=a_very_strong_password
    ```

2. **Run the Seed Script:** Execute the following command from the project root.

    ```bash
    npm run seed
    ```

    The script will check if the admin user already exists. If not, it will create one and print the credentials to the console. You can now log in with this user to access the admin dashboard.

### 4. Running the Application

1. **Start the backend server:**

    ```bash
    npm run dev
    ```

    The server will be running on `http://localhost:4242`.

2. **Start the frontend:**
    * Right-click the `index.html` file in the root directory.
    * Select "Open with Live Server". This will open the application in your browser, typically at `http://127.0.0.1:5500`.

---

## API Endpoints

A summary of the main API routes available in the application.

### Authentication (`/api`)

* `POST /api/signup`: Register a new user.
* `POST /api/login`: Log in an existing user and receive a JWT.
* `POST /api/forgot-password`: Initiate the password reset process.
* `POST /api/reset-password`: Complete the password reset with a valid token.

#### User (`/api`) - *Requires Authentication*

* `POST /api/user/change-password`: Allows a logged-in user to change their password.
* `GET /api/user-status`: Retrieves the current user's "Pro" status.
* `POST /api/create-checkout-session`: Creates a Stripe Checkout session for upgrading to Pro.
* `POST /api/create-customer-portal-session`: Creates a Stripe Customer Portal session for managing a subscription.

#### Admin (`/api/admin`) - *Requires Admin Authentication*

* `GET /api/admin/stats`: Retrieves usage statistics (total users, pro users, etc.).
* `GET /api/admin/users`: Retrieves a paginated and searchable list of all users.
* `PATCH /api/admin/users/:userId/pro-status`: Updates a user's "Pro" status.
* `DELETE /api/admin/users/:userId`: Deletes a user and cancels their Stripe subscription.

#### Public (`/`)

* `GET /config`: Provides public configuration like the Stripe publishable key.
* `POST /webhook`: Receives and processes webhooks from Stripe.

---

## Deployment

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or support, please contact the Praximous development team at <support@praximous.com>.

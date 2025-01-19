💳 Eric's Wallet Web App – Frontend
This is the frontend of Eric's Wallet Web Application, designed for easy management of transactions, budgets, and accounts. It is built using React.js, TypeScript, and Tailwind CSS to ensure a responsive and well-structured interface.

🌟 Main Features
🔐 User Authentication

Secure login and signup
JWT-based session management
💰 Transaction Management

Add, edit, and delete transactions
Filter transactions by account, category, or date
📊 Budget Management

Set spending limits and track expenses
Get alerts when budgets are exceeded
💳 Card Management

Add debit/credit cards manually or via scanning
Validate card details in real time using the Luhn Algorithm
📈 Data Visualization

View income and expenses through charts and graphs (ApexCharts)
🏦 Account Management

Manage multiple accounts (bank, mobile money, cash)
View account balances in one place
📜 Reports

Generate and download reports in CSV or PDF format
🔥 Upcoming Features
QR Code Payments – For faster transactions
Multi-Currency Support – Convert and display transactions in different currencies
Push Notifications – Get alerts for budgets and transactions.

🎨 Design Process
The UI/UX design for this application was created using Figma. The design ensures:

A visually appealing and intuitive interface.
Responsive layouts for both desktop and mobile devices.
User flows optimized for ease of navigation and accessibility.
View the figma design: https://www.figma.com/design/gHcqkX71PJU9w18v2uDMha/Wallet-web-application?node-id=72-316&t=EXmWhb6DZFlCnY4Z-0


🚀 Live Demo Available!

https://wallet-web-nancysabrina.netlify.app/


🛠️ Tech Stack
Frontend Framework: React.js with TypeScript
Styling: Tailwind CSS
State Management: React Context API (or Redux if required for scalability)
Charts: ApexCharts
HTTP Requests: Axios
Card Scanning: Card.io or React Credit Card Input

🛠️ Setup and Installation
Prerequisites
Node.js (v16 or higher)
npm or yarn
Backend API running locally or deployed (required for API integration).
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Nancy-Sabrina-Ishimwe/walletweb.git
cd walletweb

Install dependencies:

npm install

Configure environment variables: Create a .env file in the root directory:

walletweb_BACKEND_URL=http://localhost:5000
walletweb_STRIPE_PUBLIC_KEY=your-stripe-public-key

Start the development server:

npm run dev

📊 Testing the Application:
Manual Testing:
Register a User via the frontend form.
Login and test JWT-based authentication.
Test Transactions: Add and filter transactions.
Budget Management: Add budgets and monitor alerts.
Reports: Generate CSV/PDF reports.
























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

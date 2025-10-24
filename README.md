# Express TypeScript Boilerplate 🚀

A **starter boilerplate** for building modern **Express.js APIs** with **TypeScript**, **MongoDB**, and best practices out-of-the-box. This boilerplate helps developers **kickstart projects quickly** without worrying about setup.

---

## **Why This Boilerplate?**

Setting up a robust Express + TypeScript project with validations, structured architecture, password security, and error handling can be repetitive and error-prone. This boilerplate solves that by providing:

* **Clean MVC structure** – organized controllers, services, and models
* **Type-safe development** with TypeScript
* **Validation** using `class-validator` and DTOs
* **Secure password handling** with bcrypt
* **Centralized error handling** – consistent API responses
* **MongoDB integration** – ready-to-use database connection
* **Request logging middleware** – easy debugging
* **Hot-reload for dev** using `ts-node-dev` / `tsnd`
* **Ready-to-extend** for authentication, role-based access, and more

---

## **Features**

* ✅ TypeScript + Express.js
* ✅ MongoDB database integration
* ✅ MVC project structure
* ✅ DTO-based validation with `class-validator`
* ✅ Password hashing using `bcrypt`
* ✅ Centralized success/failure API responses
* ✅ Global error handling middleware
* ✅ Request logging middleware
* ✅ Environment variable support via `dotenv`
* ✅ Hot reload in development

---

## **Getting Started**

1. Clone the repo:

```bash
git clone https://github.com/your-username/express-ts-boilerplate.git
cd express-ts-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/express-boilerplate
```

4. Run the development server:

```bash
npm run dev
```

5. The API is now running at `http://localhost:3000`

---
import express from "express";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middleware/error.handler.middleware";
import { requestLogger } from "./middleware/request.logger.middleware";

const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(requestLogger);

// Routes
app.use("/api/users", userRoutes);

// Global error handler
app.use(errorHandler);

export default app;

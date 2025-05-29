import express from "express";
import employeeRoutes from "./routes/employees.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/employees", employeeRoutes);

// Catch-all error handler
app.use(errorHandler);

export default app;

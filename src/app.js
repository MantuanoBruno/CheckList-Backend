import express from "express";
import statusRoutes from "../src/api/v1/status/status.routes.js";

const app = express();

// ESSENCIAL: body parser
app.use(express.json());

// Versionamento da API
app.use("/api/v1", statusRoutes);

export default app;

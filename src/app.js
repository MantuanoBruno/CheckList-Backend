import express from "express";
import statusRoutes from "#src/api/v1/status/status.routes.js";
import status from "#src/api/v1/status/status.js";

const app = express();

app.use(express.json);
app.use("/api/v1", statusRoutes, status);

export default app;

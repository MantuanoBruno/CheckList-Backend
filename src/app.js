import express from "express";
import statusRoutes from "./api/v1/status/status.routes.js";

const app = express();

app.use("/api/v1", statusRoutes);

app.listen(3000, () => {
  console.log("Server rodando na porta 3000");
});

export default app;

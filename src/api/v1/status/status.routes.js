import express from "express";
import status from "./status.js";

const router = express.Router();

//router.get("/status", async (req, res) => {
//  console.log(">>> ENTROU NA ROTA /status");
//  return status(req, res);
//});

router.get("/status", (req, res) => {
  return res.status(200).json({ status: "ok" });
});

export default router;

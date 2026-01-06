import express from "express";
import database from "../../../../infra/config/database.js";

const router = express.Router();

router.get("/health", async (req, res) => {
  try {
    await db.query("SELECT 1");
    return res.status(200).json({ status: "ok" });
  } catch (error) {
    return res.status(500).json({ status: "error" });
  }
});

export default router;

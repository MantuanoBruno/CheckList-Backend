const express = require("express");
const router = express.Router();
const db = require("../../../config/database");

router.get("/health", async (req, res) => {
  try {
    await db.query("SELECT 1;");
    return res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("DB error:", error);
    return res.status(500).json({ status: "error" });
  }
});

module.exports = router;

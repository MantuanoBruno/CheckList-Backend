import { Router } from "express";
import status from "./status.js";

const router = Router();

router.get("/status", status);

export default router;

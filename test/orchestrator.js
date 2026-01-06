import retry from "async-retry";
import database from "infra/config/database.js";
//import { start as startServer, stop as stopServer } from "./test-server.js";

async function clearDatabase() {
  await database.query(`
        drop schema if exists public cascade;
        create schema public;
        `);
}

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

async function fetchStatusPage() {
  const response = await fetch(`${BASE_URL}/api/v1/status`);

  if (!response.ok) {
    throw new Error("Server not ready");
  }
}

async function waitForAllServices() {
  await retry(fetchStatusPage, {
    retries: 30,
    minTimeout: 1000,
    maxTimeout: 1000,
  });
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  //stopAllServices,
};

export default orchestrator;

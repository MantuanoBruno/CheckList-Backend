const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "checklist",
  password: "checklist",
  database: "checklist_db",
});

module.exports = pool;

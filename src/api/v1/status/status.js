import database from "#infra/config/database.js";

async function status(request, response) {
  try {
    const updatedAt = new Date().toISOString();

    const versionResult = await database.query("SHOW server_version;");
    const version = versionResult.rows[0].server_version;

    const maxConnectionsResult = await database.query("SHOW max_connections;");
    const maxConnections = parseInt(
      maxConnectionsResult.rows[0].max_connections,
      10
    );

    const databaseName = process.env.POSTGRES_DB;

    const usedConnectionsResult = await database.query(
      "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
      [databaseName]
    );
    const usedConnections = usedConnectionsResult.rows[0].count;

    return response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version,
          max_connections: maxConnections,
          used_connections: usedConnections,
        },
      },
    });
  } catch (error) {
    console.error("Status endpoint failed:", error);

    return response.status(500).json({
      error: "Internal Server Error",
    });
  }
}

export default status;

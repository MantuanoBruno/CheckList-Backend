import orchestrator from "test/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

//afterAll(async () => {
//  await orchestrator.stopAllServices();
//});

describe("GET /api/v1/status", () => {
  test("Lendo o status do sistema", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(parseUpdatedAt);

    expect(responseBody.dependencies.database.version).toEqual("16.0");
    expect(responseBody.dependencies.database.max_connections).toEqual(100);
    expect(responseBody.dependencies.database.used_connections).toEqual(1);
  });
});

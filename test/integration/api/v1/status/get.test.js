const request = require("supertest");
const app = require("../../../../../src/app");
const database = require("../../../../../infra/config/database");

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

beforeEach(() => {
  database.query.mockResolvedValueOnce({ rows: [] });
});

jest.mock("../../../../../infra/config/database", () => ({
  query: jest.fn(),
}));

describe("GET /api/v1/health", () => {
  it("retorna 200 quando o banco esta disponivel", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});

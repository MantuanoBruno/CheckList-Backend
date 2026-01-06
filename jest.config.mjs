import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });

export default {
  testEnvironment: "node",

  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^test/(.*)$": "<rootDir>/test/$1",
    "^infra/(.*)$": "<rootDir>/src/infra/$1",
  },

  clearMocks: true,
  testTimeout: 60000,
};

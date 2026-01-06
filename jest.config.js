/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],

  moduleNameMapper: {
    "^#src/(.*)$": "<rootDir>/src/$1",
    "^#infra/(.*)$": "<rootDir>/infra/$1",
    "^#api/(.*)$": "<rootDir>/src/api/$1",
    "^#test/(.*)$": "<rootDir>/test/$1",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testTimeout: 60000,
};

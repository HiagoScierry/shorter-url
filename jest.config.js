module.exports = {
  roots: ["<rootDir>"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
}

module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: ["<rootDir>/src/**/__tests__/**/*.test.(ts|tsx)", "<rootDir>/src/**/?(*.)(spec|test).(ts|tsx)"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
    moduleFileExtensions: ["ts", "tsx", "json", "node"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
};

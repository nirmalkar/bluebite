/** @type {import('jest').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './', // Next.js app directory
});

const customJestConfig = {
  testEnvironment: 'jsdom', // Set the test environment to jsdom for testing React components
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

module.exports = createJestConfig(customJestConfig);

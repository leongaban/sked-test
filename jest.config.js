module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'server/src/config',
    'tests',
  ],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  modulePathIgnorePatterns: [
    'node_modules',
    'tests',
  ],
  testPathIgnorePatterns: [
    'node_modules',
    'tests',
  ],
  roots: ['<rootDir>/server/tests'],
};

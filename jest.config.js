module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'server/src/config', 'server/src/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  roots: ['<rootDir>/server/tests'],
};

module.exports = {
  collectCoverage: true,
  coverageReporters: [ 'text', 'html' ],
  setupFiles: ['<rootDir>/jest.setup.js', '<rootDir>/jsdom.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/__test__/__snapshots__/']
}
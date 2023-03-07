import type { Config } from 'jest';

const config: Config = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
      ],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
      },
      testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
      //jsdom: a browser-like environment
      testEnvironment: 'jsdom',
}

export default config;
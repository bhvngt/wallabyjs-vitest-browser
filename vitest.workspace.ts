import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      // an example of file based convention,
      // you don't have to follow it
      include: [
        '**/test/**/!(*.browser).{test,spec}.ts',
      ],
      name: 'node',
      environment: 'node',
    },
  },
  {
    test: {
      // an example of file based convention,
      // you don't have to follow it
      include: [
        '**/test/**/*.browser.{test,spec}.ts',
      ],
      name: 'browser',
      browser: {
        enabled: true,
        name: 'chromium',
        headless: true,
        provider: 'playwright',
      },
    },
  },
])
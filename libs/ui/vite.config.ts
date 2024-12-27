import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "browser",
    include: ["test/**/*.browser.test.ts"],
    // it is recommended to define a name when using inline configs
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      headless: true,
      name: "chromium",
    },
  },
});

import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
 
  reporter: 'html',
  
  use: {

    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: '**/setup/*.setup.ts',
      use: {
        ...devices['Desktop Chrome'],
        viewport: {width: 1920, height:1080}
      }
    },

    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        storageState: 'fixtures/auth/userAuthState.json' // Load authenticated state
      },
      dependencies: ['setup'], // Ensure setup runs before this project
    },




  ],

});

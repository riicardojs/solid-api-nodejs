import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    workspace: [
      {
        // will inherit options from this config like plugins and pool
        extends: true,
        test: {
          name: 'unit',
          include: ['**/*.unit.test.ts'],
        },
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          include: ['**/*.e2e.test.ts'],
          environment: 'prisma',
        },
      },
    ],
  },
});

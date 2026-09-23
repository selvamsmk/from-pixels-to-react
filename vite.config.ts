import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

const daySlugs = ['day-1', 'day-2', 'day-3', 'day-4', 'day-5'] as const

export default defineConfig(({ mode }) => {
  const standaloneDay = daySlugs.find((day) => mode === `file-${day}`)
  const inputs = standaloneDay
    ? [standaloneDay]
    : ['index', ...daySlugs]

  return {
    plugins: [
      react(),
      ...(standaloneDay ? [viteSingleFile({ removeViteModuleLoader: true })] : []),
    ],
    build: {
      emptyOutDir: standaloneDay === 'day-1',
      rollupOptions: {
        input: Object.fromEntries(inputs.map((entry) => [entry, entry === 'index' ? 'index.html' : `${entry}/index.html`])),
      },
    },
  }
})

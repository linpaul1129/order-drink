import { fileURLToPath, URL } from 'node:url'

import { type UserConfig, type ConfigEnv, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
import { readFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command.includes('build')
  const configEnv = loadEnv(mode, process.cwd())
  const env = isBuild ? origin[3] || 'dev' : mode
  const version = origin[5] || ''
  const buildDir = version ? `${name}/${version}` : ''
  const localJs = isBuild ? '' : readFileSync(path.resolve(__dirname, `./config/local.js`), "utf-8")
  const initJs = isBuild ? readFileSync(path.resolve(__dirname, `./config/init.js`), "utf-8") : ''
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
  
})

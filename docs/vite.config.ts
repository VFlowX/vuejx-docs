import { defineConfig } from 'vite'
import { searchFix } from './plugin/vite-plugin-searchFix'

export default defineConfig({
  plugins: [searchFix()]
})
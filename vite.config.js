import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174,
    strictPort: false, // 如果端口被占用，尝试下一个可用端口
    host: '0.0.0.0', // 允许外部设备通过IP地址访问
  }
})

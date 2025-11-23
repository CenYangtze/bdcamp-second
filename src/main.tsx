import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import '@arco-design/web-react/dist/css/arco.css'

// 引入 Mock.js 配置（仅在开发环境）
if (import.meta.env.DEV) {
  // 动态导入并等待 Mock.js 初始化完成
  await import('./mock')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

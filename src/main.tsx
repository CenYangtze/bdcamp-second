import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import '@arco-design/web-react/dist/css/arco.css'

// 临时屏蔽 React 19 的 ref 警告（等待 Arco Design 更新）
const originalError = console.error
console.error = (...args: any[]) => {
  if (typeof args[0] === 'string' && args[0].includes('Accessing element.ref')) {
    return
  }
  originalError.call(console, ...args)
}

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

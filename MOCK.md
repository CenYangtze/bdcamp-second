# Mock.js 集成说明

本项目已成功集成 Mock.js 用于模拟后端 API。

## 📦 已安装的包

- `mockjs` - Mock.js 核心库
- `@types/mockjs` - TypeScript 类型定义

## 🗂️ 文件结构

```
src/
├── api/
│   └── products.ts          # API 服务层，封装所有 API 调用
├── mock/
│   ├── index.ts             # Mock.js 配置和路由拦截
│   └── products.ts          # 静态商品数据
├── store/
│   └── productStore.ts      # 使用 API 服务的 Zustand store
└── main.tsx                 # 在开发环境引入 Mock 配置
```

## 🔌 Mock API 接口

### 1. 获取商品列表
```
GET /api/products?category=&keyword=&sortBy=&minPrice=&maxPrice=
```

### 2. 获取商品详情
```
GET /api/product/:id
```

### 3. 添加到购物车
```
POST /api/cart
Body: { productId, quantity, ... }
```

### 4. 创建订单
```
POST /api/order
Body: { items, totalPrice, ... }
```

## ⚙️ 配置说明

### 网络延迟模拟
```typescript
Mock.setup({
  timeout: '200-600' // 200-600ms 随机延迟
})
```

### 开发环境启用
Mock.js 仅在开发环境启用，通过 `import.meta.env.DEV` 判断：

```typescript
// main.tsx
if (import.meta.env.DEV) {
  import('./mock')
}
```

## 🔄 从静态数据迁移到 Mock.js

**之前（静态数据）：**
```typescript
// productStore.ts
import { mockProducts } from '../mock/products'
set({ products: mockProducts })
```

**现在（Mock.js API）：**
```typescript
// productStore.ts
import { fetchProducts } from '../api/products'
const products = await fetchProducts()
set({ products })
```

## 🚀 使用方式

### 在组件中使用
```typescript
const { fetchProducts, filterProducts } = useProductStore()

// 获取所有商品
useEffect(() => {
  fetchProducts()
}, [])

// 筛选商品
filterProducts({
  category: 'digital',
  keyword: 'iPhone',
  sortBy: 'price-asc'
})
```

### 直接调用 API
```typescript
import { fetchProducts, fetchProductById } from '../api/products'

// 获取商品列表
const products = await fetchProducts({ category: 'digital' })

// 获取单个商品
const product = await fetchProductById(1)
```

## 🎲 生成随机商品（可选）

```typescript
import { generateRandomProducts } from '../mock'

// 生成 10 个随机商品
const randomProducts = generateRandomProducts(10)
```

## 🔧 切换到真实 API

生产环境只需修改 `src/api/products.ts` 中的 `API_BASE_URL`：

```typescript
// 开发环境使用 Mock
const API_BASE_URL = '/api'

// 生产环境使用真实 API
const API_BASE_URL = 'https://your-api.com/api'
```

## ✅ 优势

1. **开发体验** - 不依赖后端，前端独立开发
2. **真实模拟** - 模拟网络延迟、错误状态
3. **易于切换** - API 层封装，轻松切换真实接口
4. **类型安全** - 完整的 TypeScript 支持
5. **灵活配置** - 可以模拟各种业务场景

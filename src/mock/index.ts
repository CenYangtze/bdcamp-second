import Mock from 'mockjs'
import { mockProducts } from './products'
import type { Product, FilterParams } from '../types'

// 配置 Mock - 必须在所有 mock 规则之前配置
Mock.setup({
  timeout: '200-600' // 模拟网络延迟 200-600ms
})

console.log('Mock.js setup complete, registering routes...')

// 获取所有商品
Mock.mock(/\/api\/products(\?.*)?$/, 'get', (options: any) => {
  console.log('Mock intercepted /api/products request:', options.url)
  
  const url = new URL(options.url, window.location.origin)
  const params: FilterParams = {
    category: url.searchParams.get('category') || undefined,
    keyword: url.searchParams.get('keyword') || undefined,
    sortBy: (url.searchParams.get('sortBy') as any) || 'default',
    priceRange: url.searchParams.get('minPrice') && url.searchParams.get('maxPrice')
      ? [Number(url.searchParams.get('minPrice')), Number(url.searchParams.get('maxPrice'))]
      : undefined
  }

  let filteredProducts = [...mockProducts]

  // 按关键词筛选
  if (params.keyword) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(params.keyword!.toLowerCase())
    )
  }

  // 按分类筛选
  if (params.category) {
    filteredProducts = filteredProducts.filter(p => p.category === params.category)
  }

  // 按价格区间筛选
  if (params.priceRange) {
    const [min, max] = params.priceRange
    filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max)
  }

  // 排序
  switch (params.sortBy) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'sales':
      filteredProducts.sort((a, b) => b.sales - a.sales)
      break
  }

  console.log('Mock returning products:', filteredProducts.length)
  
  return {
    code: 200,
    message: 'success',
    data: {
      products: filteredProducts,
      total: filteredProducts.length
    }
  }
})

// 获取单个商品详情
Mock.mock(/\/api\/product\/\d+/, 'get', (options: any) => {
  console.log('Mock intercepted /api/product/:id request:', options.url)
  
  const url = options.url
  const match = url.match(/\/api\/product\/(\d+)/)
  if (!match) {
    return {
      code: 400,
      message: 'Invalid product ID',
      data: null
    }
  }
  
  const id = parseInt(match[1])
  const product = mockProducts.find(p => p.id === id)

  if (product) {
    console.log('Mock returning product:', product.name)
    return {
      code: 200,
      message: 'success',
      data: product
    }
  } else {
    return {
      code: 404,
      message: 'Product not found',
      data: null
    }
  }
})

// 模拟购物车操作
Mock.mock(/\/api\/cart/, 'post', (options: any) => {
  const body = JSON.parse(options.body)
  return {
    code: 200,
    message: 'Added to cart successfully',
    data: {
      cartId: Mock.Random.id(),
      ...body
    }
  }
})

// 模拟订单提交
Mock.mock(/\/api\/order/, 'post', (options: any) => {
  const body = JSON.parse(options.body)
  return {
    code: 200,
    message: 'Order created successfully',
    data: {
      orderId: Mock.Random.id(),
      orderNumber: Mock.Random.string('number', 16),
      createTime: new Date().toISOString(),
      ...body
    }
  }
})

// 生成随机商品（可选功能）
export const generateRandomProducts = (count: number = 10): Product[] => {
  const categories = ['digital', 'clothing', 'food', 'home']
  const products: Product[] = []

  for (let i = 0; i < count; i++) {
    const category = Mock.Random.pick(categories)
    const hasDiscount = Mock.Random.boolean()
    const price = Mock.Random.integer(50, 20000)
    
    products.push({
      id: mockProducts.length + i + 1,
      name: Mock.Random.ctitle(5, 20),
      price: price,
      originalPrice: hasDiscount ? price + Mock.Random.integer(100, 2000) : undefined,
      image: `https://images.unsplash.com/photo-${Mock.Random.integer(1500000000000, 1700000000000)}?w=400`,
      images: [
        `https://images.unsplash.com/photo-${Mock.Random.integer(1500000000000, 1700000000000)}?w=800`
      ],
      category: category,
      description: Mock.Random.cparagraph(1, 3),
      stock: Mock.Random.integer(10, 500),
      sales: Mock.Random.integer(100, 10000),
      rating: Mock.Random.float(3.5, 5.0, 1, 1)
    })
  }

  return products
}

console.log('Mock.js initialized successfully!')
console.log('Registered routes:')
console.log('  GET /api/products')
console.log('  GET /api/product/:id')
console.log('  POST /api/cart')
console.log('  POST /api/order')
console.log('Mock products count:', mockProducts.length)

export default Mock

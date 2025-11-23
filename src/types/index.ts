// 商品接口
export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  description?: string
  stock: number
  sales: number
  rating?: number
  specs?: ProductSpec[]
}

// 商品规格
export interface ProductSpec {
  name: string
  options: string[]
}

// 购物车项目
export interface CartItem {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  image: string
  selectedSpecs?: Record<string, string>
}

// 筛选条件
export interface FilterParams {
  category?: string
  priceRange?: [number, number]
  sortBy?: 'default' | 'price-asc' | 'price-desc' | 'sales'
  keyword?: string
}

// 分页参数
export interface PaginationParams {
  current: number
  pageSize: number
  total: number
}
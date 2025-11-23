// 商品规格类型
export interface Specification {
  name: string // 规格名称，如 "颜色"、"尺寸"
  options: string[] // 规格选项，如 ["红色", "蓝色"]
}

// 商品类型
export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number // 原价
  image: string
  images?: string[] // 多张图片
  category: string
  brand?: string
  description?: string
  stock: number
  sales?: number // 销量
  rating?: number // 评分
  specifications?: Specification[] // 商品规格
}

// 购物车商品类型
export interface CartItem {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  image: string
  selectedSpecs?: Record<string, string> // 选中的规格，如 { "颜色": "红色", "尺寸": "L" }
}

// 筛选参数类型
export interface FilterParams {
  category?: string
  priceRange?: [number, number]
  sortBy?: 'default' | 'price-asc' | 'price-desc' | 'sales'
  keyword?: string
}
import axios from 'axios'
import type { Product, FilterParams } from '../types'

// API 基础URL（开发环境使用Mock，生产环境可替换为真实API）
const API_BASE_URL = '/api'

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// API 响应接口
interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

// 获取所有商品
export const fetchProducts = async (filters?: FilterParams): Promise<Product[]> => {
  const params: any = {}
  
  if (filters?.category) params.category = filters.category
  if (filters?.keyword) params.keyword = filters.keyword
  if (filters?.sortBy) params.sortBy = filters.sortBy
  if (filters?.priceRange) {
    params.minPrice = filters.priceRange[0]
    params.maxPrice = filters.priceRange[1]
  }

  const response = await axiosInstance.get<ApiResponse<{ products: Product[]; total: number }>>('/products', { params })
  const result = response.data
  
  if (result.code === 200) {
    return result.data.products
  } else {
    throw new Error(result.message)
  }
}

// 获取单个商品详情
export const fetchProductById = async (id: number): Promise<Product | null> => {
  const response = await axiosInstance.get<ApiResponse<Product>>(`/product/${id}`)
  const result = response.data
  
  if (result.code === 200) {
    return result.data
  } else if (result.code === 404) {
    return null
  } else {
    throw new Error(result.message)
  }
}

// 添加到购物车
export const addToCart = async (cartItem: any) => {
  const response = await axiosInstance.post<ApiResponse<any>>('/cart', cartItem)
  const result = response.data
  
  if (result.code === 200) {
    return result.data
  } else {
    throw new Error(result.message)
  }
}

// 创建订单
export const createOrder = async (orderData: any) => {
  const response = await axiosInstance.post<ApiResponse<any>>('/order', orderData)
  const result = response.data
  
  if (result.code === 200) {
    return result.data
  } else {
    throw new Error(result.message)
  }
}

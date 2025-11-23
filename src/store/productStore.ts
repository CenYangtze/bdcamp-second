import { create } from 'zustand'
import type { Product, FilterParams } from '../types'
import { fetchProducts as apiFetchProducts } from '../api/products'

interface ProductStore {
  products: Product[]
  filteredProducts: Product[]
  currentProduct: Product | null
  loading: boolean
  
  // 获取所有商品
  fetchProducts: () => void
  
  // 根据筛选条件过滤商品
  filterProducts: (filters: FilterParams) => void
  
  // 根据ID获取商品详情
  getProductById: (id: number) => Product | undefined
  
  // 设置当前商品
  setCurrentProduct: (product: Product | null) => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  currentProduct: null,
  loading: false,

  fetchProducts: async () => {
    set({ loading: true })
    try {
      const products = await apiFetchProducts()
      set({ 
        products,
        filteredProducts: products,
        loading: false 
      })
    } catch (error) {
      console.error('Failed to fetch products:', error)
      set({ loading: false })
    }
  },

  filterProducts: async (filters: FilterParams) => {
    set({ loading: true })
    try {
      const filteredProducts = await apiFetchProducts(filters)
      set({ filteredProducts, loading: false })
    } catch (error) {
      console.error('Failed to filter products:', error)
      set({ loading: false })
    }
  },

  getProductById: (id: number) => {
    const { products } = get()
    return products.find(p => p.id === id)
  },

  setCurrentProduct: (product: Product | null) => {
    set({ currentProduct: product })
  }
}))
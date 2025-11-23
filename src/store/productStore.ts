import { create } from 'zustand'
import { Product, FilterParams } from '../types'
import { mockProducts } from '../mock/products'

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

  fetchProducts: () => {
    set({ loading: true })
    // 模拟异步加载
    setTimeout(() => {
      set({ 
        products: mockProducts,
        filteredProducts: mockProducts,
        loading: false 
      })
    }, 300)
  },

  filterProducts: (filters: FilterParams) => {
    const { products } = get()
    let filtered = [...products]

    // 按关键词筛选
    if (filters.keyword) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(filters.keyword!.toLowerCase())
      )
    }

    // 按分类筛选
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category)
    }

    // 按价格区间筛选
    if (filters.priceRange) {
      const [min, max] = filters.priceRange
      filtered = filtered.filter(p => p.price >= min && p.price <= max)
    }

    // 排序
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'sales':
        filtered.sort((a, b) => b.sales - a.sales)
        break
      default:
        break
    }

    set({ filteredProducts: filtered })
  },

  getProductById: (id: number) => {
    const { products } = get()
    return products.find(p => p.id === id)
  },

  setCurrentProduct: (product: Product | null) => {
    set({ currentProduct: product })
  }
}))
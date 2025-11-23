import { create } from 'zustand'
import { FilterParams } from '../types'

interface FilterStore {
  filters: FilterParams
  setCategory: (category: string) => void
  setPriceRange: (range: [number, number]) => void
  setSortBy: (sortBy: FilterParams['sortBy']) => void
  setKeyword: (keyword: string) => void
  resetFilters: () => void
}

const initialFilters: FilterParams = {
  category: undefined,
  priceRange: undefined,
  sortBy: 'default',
  keyword: ''
}

export const useFilterStore = create<FilterStore>((set) => ({
  filters: initialFilters,

  setCategory: (category) => set((state) => ({
    filters: { ...state.filters, category }
  })),

  setPriceRange: (priceRange) => set((state) => ({
    filters: { ...state.filters, priceRange }
  })),

  setSortBy: (sortBy) => set((state) => ({
    filters: { ...state.filters, sortBy }
  })),

  setKeyword: (keyword) => set((state) => ({
    filters: { ...state.filters, keyword }
  })),

  resetFilters: () => set({ filters: initialFilters })
}))
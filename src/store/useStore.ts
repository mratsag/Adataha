import { create } from 'zustand'
import { Category, Product } from '@/types'

interface StoreState {
  categories: Category[]
  products: Product[]
  loading: boolean
  setCategories: (categories: Category[]) => void
  setProducts: (products: Product[]) => void
  setLoading: (loading: boolean) => void
}

export const useStore = create<StoreState>((set) => ({
  categories: [],
  products: [],
  loading: false,
  setCategories: (categories) => set({ categories }),
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
}))
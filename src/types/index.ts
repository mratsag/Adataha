export interface Category {
  id: string
  name: string
  description: string
  image_url: string
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  category_id: string
  images: string
  created_at: string
  updated_at: string
}
// app/kategoriler/[id]/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Category, Product } from '@/types'
import ProductCard from '@/components/products/ProductCard'
import { Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CategoryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [category, setCategory] = useState<Category | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      fetchCategoryAndProducts(params.id as string)
    }
  }, [params.id])

  const fetchCategoryAndProducts = async (categoryId: string) => {
    try {
      // Kategori bilgilerini getir
      const { data: categoryData, error: categoryError } = await supabase
        .from('categories')
        .select('*')
        .eq('id', categoryId)
        .single()

      if (categoryError) throw categoryError
      setCategory(categoryData)

      // Ürünleri getir
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', categoryId)
        .order('name')

      if (productsError) throw productsError
      setProducts(productsData || [])
    } catch (error) {
      console.error('Veri yüklenirken hata:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Kategori bulunamadı
          </h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-blue-600">
          Ana Sayfa
        </Link>
        <span>/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {category.name}
        </h1>
        {category.description && (
          <p className="text-lg text-gray-600 max-w-3xl">
            {category.description}
          </p>
        )}
      </div>

      {/* Products Grid */}
      <section>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-4">
              Bu kategoride henüz ürün bulunmuyor.
            </p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Diğer kategorilere göz at
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
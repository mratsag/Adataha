// app/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Category } from '@/types'
import CategoryCard from '@/components/categories/CategoryCard'
import { Loader2 } from 'lucide-react'

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name')

      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Kategoriler yüklenirken hata:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Profesyonel Cafe & Restaurant Ürünleri
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          İşletmeniz için ihtiyacınız olan tüm ürünleri tek bir yerde bulun. 
          Kaliteli ve güvenilir toptan çözümler.
        </p>
      </div>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Ürün Kategorileri
        </h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}

        {!loading && categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Henüz kategori eklenmemiş.</p>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Kalite Garantisi</h3>
          <p className="text-gray-600">Tüm ürünlerimiz özenle seçilmiş ve kalite standartlarına uygundur.</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Uygun Fiyat</h3>
          <p className="text-gray-600">Toptan alımlarınızda en uygun fiyat garantisi sunuyoruz.</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Profesyonel Destek</h3>
          <p className="text-gray-600">Uzman ekibimiz size en iyi hizmeti sunmak için hazır.</p>
        </div>
      </section>
    </div>
  )
}
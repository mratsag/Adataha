// components/products/ProductCard.tsx
import Image from 'next/image'
import { Product } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { Eye } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Resim URL'lerini parse et
  const imageUrls = product.images ? product.images.split(',').map(url => url.trim()) : []

  return (
    <>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div 
          onClick={() => setShowModal(true)}
          className="relative"
        >
          <div className="aspect-square relative overflow-hidden bg-gray-100">
            {imageUrls.length > 0 ? (
              <Image
                src={imageUrls[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <span className="text-4xl font-bold text-gray-400 opacity-30">
                  {product.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
            </div>
          </div>
          
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {product.description}
              </p>
            )}
          </CardContent>
        </div>
      </Card>

      {/* Product Detail Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-lg">
                  {imageUrls.length > 0 ? (
                    <Image
                      src={imageUrls[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <span className="text-6xl font-bold text-gray-400 opacity-30">
                        {product.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                {imageUrls.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {imageUrls.map((url, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square relative overflow-hidden rounded-md border-2 transition-all ${
                          selectedImage === index ? 'border-blue-600' : 'border-transparent'
                        }`}
                      >
                        <Image
                          src={url}
                          alt={`${product.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {product.description || 'Ürün açıklaması mevcut değil.'}
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
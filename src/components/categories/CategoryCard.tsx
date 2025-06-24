// components/categories/CategoryCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@/types'
import { Card, CardContent } from '@/components/ui/card'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/kategoriler/${category.id}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          {category.image_url ? (
            <Image
              src={category.image_url}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <span className="text-4xl font-bold text-blue-600 opacity-30">
                {category.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          {category.description && (
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {category.description}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
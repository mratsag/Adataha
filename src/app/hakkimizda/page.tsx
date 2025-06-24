// app/hakkimizda/page.tsx
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const features = [
    'Kaliteli ve güvenilir ürünler',
    'Rekabetçi toptan fiyatlar',
    'Hızlı ve güvenli teslimat',
    'Profesyonel müşteri desteği',
    'Geniş ürün yelpazesi',
    'Özel sipariş imkanları'
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Hakkımızda
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cafe ve restaurant sektörüne yönelik toptan ürün tedarikinde güvenilir partneriniz
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sektörün Güvenilir Tedarikçisi
          </h2>
          <p className="text-gray-600 mb-4">
            Toptan Katalog olarak, cafe ve restaurant işletmelerinin ihtiyaç duyduğu 
            tüm ürünleri tek bir çatı altında topluyoruz. Yılların verdiği tecrübe ve 
            müşteri odaklı yaklaşımımızla, işletmenizin başarısına katkıda bulunmayı hedefliyoruz.
          </p>
          <p className="text-gray-600 mb-6">
            Geniş ürün yelpazemiz, kaliteli markalarımız ve rekabetçi fiyatlarımızla 
            sektörde fark yaratıyoruz. Müşterilerimizin memnuniyeti bizim için her 
            zaman önceliklidir.
          </p>
          
          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 opacity-20 mb-4">
                TOPTAN KATALOG
              </div>
              <p className="text-gray-600">Güvenilir İş Ortağınız</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Rakamlarla Biz
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Mutlu Müşteri</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">Ürün Çeşidi</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Marka</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <p className="text-gray-600">Yıl Tecrübe</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
          <p className="text-gray-600">
            Cafe ve restaurant işletmelerine kaliteli, güvenilir ve uygun fiyatlı 
            ürünler sunarak, onların işlerini büyütmelerine ve müşterilerine daha 
            iyi hizmet vermelerine yardımcı olmak.
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
          <p className="text-gray-600">
            Türkiye'nin lider toptan cafe ve restaurant ürünleri tedarikçisi olarak, 
            sektörde standartları belirleyen, yenilikçi ve müşteri odaklı bir şirket 
            olmak.
          </p>
        </div>
      </div>
    </div>
  )
}
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toptan Katalog - Profesyonel Cafe & Restaurant Ürünleri',
  description: 'Cafe ve restaurant işletmeleri için toptan ürün kataloğu. Şuruplar, kahveler, bar sosları ve daha fazlası.',
  keywords: 'toptan, cafe ürünleri, restaurant ürünleri, şurup, kahve, bar sosları',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow bg-gray-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
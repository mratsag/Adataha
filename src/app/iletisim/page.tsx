// app/iletisim/page.tsx
"use client"

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData])

      if (error) throw error

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      // 3 saniye sonra success mesajını kaldır
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Mesaj gönderilirken hata:', error)
      alert('Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          İletişim
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              İletişim Bilgileri
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">0(312) 123 45 67</p>
                  <p className="text-gray-600">0(555) 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                  <p className="text-gray-600">info@toptankatalog.com</p>
                  <p className="text-gray-600">destek@toptankatalog.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                  <p className="text-gray-600">
                    Çankaya, Ankara<br />
                    Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h3>
                  <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-600">Cumartesi: 09:00 - 14:00</p>
                  <p className="text-gray-600">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bize Mesaj Gönderin
            </h2>

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Mesajınızı buraya yazabilirsiniz..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
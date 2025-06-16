"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    whatsapp: "",
    description: "",
    privacyPolicy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      privacyPolicy: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      position: "",
      whatsapp: "",
      description: "",
      privacyPolicy: false,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
        <header className="z-50 backdrop-blur-sm bg-emerald-950 border-b border-amber-400/30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/image/logo.PNG"
                  alt="Fazza Agro Bank Logo"
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
                Fazza Agro Bank
              </span>
            </div>
            <Link href="/">
            <Button variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar Início
            </Button>
            </Link>
          </div>
        </header>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div
            className="w-full bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/image/contato.jpg')",
            }}
          >
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
              <div className="text-center max-w-md">
                <div className="mb-8">
                </div>

                <h2 className="text-4xl font-bold mb-8">
                  Vamos crescer
                  <span className="block bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent leading-tight py-2">
                    Juntos
                  </span>
                </h2>

                <p className="text-lg text-white/90 mb-78 leading-relaxed">
                  Entre em contato conosco e descubra como podemos transformar seu negócio agrícola
                  em soluções financeiras inovadoras.
                </p>

                {/* Contact Info */}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-amber-400/40"></div>
            <div className="absolute bottom-20 left-10 w-1 h-1 rounded-full bg-emerald-400/40"></div>
            <div className="absolute top-1/3 left-8 w-1 h-1 rounded-full bg-amber-400/30"></div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Header Info */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Entre em{" "}
                <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">Contato</span>
              </h1>
              <p className="text-gray-600">Entre em contato conosco e descubra como podemos transformar seu negócio agrícola
                  em soluções financeiras inovadoras.</p>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Entrar em{" "}
                <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">
                  Contato
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                Quer saber mais sobre o nosso banco digital e investimento? Vamos conversar.
              </p>
            </div>

            {/* Decorative dots */}
            <div className="flex justify-center space-x-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Nome *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-amber-400 focus:ring-amber-400/20"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-emerald-400 focus:ring-emerald-400/20"
                  placeholder="Digite seu endereço de e-mail"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700 font-medium">
                  Empresa
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-amber-400 focus:ring-amber-400/20"
                  placeholder="Digite o nome da sua empresa"
                />
              </div>

              {/* Position */}
              <div className="space-y-2">
                <Label htmlFor="position" className="text-gray-700 font-medium">
                  Posição
                </Label>
                <Input
                  id="position"
                  name="position"
                  type="text"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-emerald-400 focus:ring-emerald-400/20"
                  placeholder="Insira sua posição"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-gray-700 font-medium">
                  WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-amber-400 focus:ring-amber-400/20"
                  placeholder="+55 (11) 99999-9999"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-700 font-medium">
                  Mensagem *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-emerald-400 focus:ring-emerald-400/20 min-h-[120px]"
                  placeholder="Conte-nos sobre seu negócio agrícola e como podemos ajudar..."
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyPolicy}
                  onCheckedChange={handleCheckboxChange}
                  className="mt-1 border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                />
                <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                  Eu concordo com o{" "}
                  <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline">
                    Política de Privacidade
                  </Link>{" "}
                  e consente com o processamento dos meus dados pessoais para fins de resposta à minha consulta.
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!formData.privacyPolicy || isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Enviar Mensagem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Additional Info */}
          </div>
        </div>
      </div>
    </div>
  )
}

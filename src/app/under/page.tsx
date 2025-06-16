"use client"

import { ArrowLeft, ArrowRight, Sparkles, Wheat, Clock, Wrench, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function UnderDevelopmentPage() {
  const [progress, setProgress] = useState(15)

  useEffect(() => {
    // Data de início do projeto
    const startDate = new Date("2025-06-01")
    const currentDate = new Date()

    // Diferença em meses
    const diffMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth())

    // A cada 2 meses aumenta 5%
    const extraProgress = Math.floor(diffMonths / 2) * 5
    const calculatedProgress = Math.min(15 + extraProgress, 100) // máximo 100%

    setProgress(calculatedProgress)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30">
{/* Header */}
        <header className="fixed top-0 left-0 w-full z-100 backdrop-blur-sm bg-black/20 border-b border-amber-400/30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/image/logo.png"
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
      <div className="py-38 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-950 ">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-1 h-1 rounded-full bg-amber-400/40 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 rounded-full bg-emerald-400/40 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 rounded-full bg-amber-400/30 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 rounded-full bg-emerald-400/30 animate-pulse"></div>

          {/* Icon Section */}
          <div className="mb-8">
            <div className="relative inline-flex items-center justify-center">
              {/* Main Icon Container */}
              <div className="w-32 h-32 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-full flex items-center justify-center mb-6 relative">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-200 to-emerald-200 rounded-full flex items-center justify-center">
                  <Wrench className="h-12 w-12 text-amber-600" />
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                  <Clock className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-emerald-100 border border-amber-200/50 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-amber-700 text-sm font-medium">System Status</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Estamos Construindo</span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-emerald-500 bg-clip-text text-transparent">
              Algo incrivel
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Nossa inovadora plataforma bancária digital para produtores agrícolas está em desenvolvimento. 
            Estamos construindo o futuro do financiamento agrícola com tecnologia de ponta.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Wheat className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Banco Digital</h3>
              <p className="text-sm text-gray-600">Soluções bancárias modernas adaptadas à agricultura</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-emerald-200/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tecnologia Inteligente</h3>
              <p className="text-sm text-gray-600">Insights financeiros e automação com tecnologia de IA</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Inovação</h3>
              <p className="text-sm text-gray-600">Abordagem revolucionária ao financiamento agrícola</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-2 mb-3">
            <span className="text-sm font-medium text-white/60">Desenvolvimento em Progresso</span>
            </div>
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2">
            <div
                className="bg-gradient-to-r from-amber-500 to-emerald-500 h-2 rounded-full relative"
                style={{ width: `${progress}%` }}
            >
                <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            </div>
        <p className="text-sm text-white/60 mt-2">{progress}% Completo</p>
      </div>
          {/* Call to Action */}
        <div className="space-y-4 px-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="max-w-full bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600 text-white font-semibold text-lg px-6 py-4 shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="truncate">
                Saiba mais & Receba Atualizações
              </span>
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
            </Button>
          </Link>
        </div>

          {/* Decorative separator */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 rounded-full bg-amber-400 animate-pulse"></div>
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
              <div className="w-1 h-1 rounded-full bg-amber-400 animate-pulse"></div>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent"></div>
          </div>

          {/* Expected Launch */}
          <div className="mt-8 bg-gradient-to-r from-emerald-100 to-amber-100 border border-emerald-200/50 rounded-2xl p-6">
            <h3 className="font-semibold bg-gradient-to-r from-emerald-700 to-amber-600 bg-clip-text text-transparent mb-2">
              Lançamento em Breve
            </h3>
          </div>
        </div>
      </div>

{/* Footer - Dark Green */}
      <footer className="bg-emerald-950 text-white py-16 px-4">
        <div className="container mx-auto">
          
          {/* Conteúdo principal */}
          <div className="grid md:grid-cols-1 gap-8 mb-12 place-items-center text-center">
            <div className="max-w-md">
              <div className="flex flex-col items-center mb-6">
                <img
                  src="/image/logo.png"
                  alt="Fazza Agro Bank Logo"
                  className="h-20 w-20 rounded-full mb-2"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
                  Fazza Agro Bank
                </span>
              </div>
              <p className="text-emerald-200 leading-relaxed">
                Transformando a agricultura por meio de soluções bancárias digitais inovadoras com uma abordagem moderna.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-emerald-700 pt-8 text-center">
            <p className="text-emerald-200">
              &copy; 2025 Fazza Agro Bank. All rights reserved.
              <span className="text-amber-400 ml-2">Powered by Innovation</span>
            </p>
          </div>
          </div>
      </footer>
    </div>
  )
}

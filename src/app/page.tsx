// page.tsx

"use client"; // 1. Adicionado para permitir o uso de hooks como useState

import { useState } from "react"; // 2. Importado o hook useState
import {
  ArrowRight,
  Globe,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  Leaf,
  Coins,
  Menu, // 3. Ícone do menu hambúrguer
  X,    // 4. Ícone para fechar o menu
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


export default function FazzaAgroBankLanding() {
  // 5. Estado para controlar a visibilidade do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/image/agricultural-background.jpg')",
        }}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/20 border-b border-amber-400/30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/image/logo.png"
                alt="Fazza Agro Bank Logo"
                className="h-16 w-16 md:h-20 md:w-20 rounded-full" // Tamanho ajustado para mobile
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
                Fazza Agro Bank
              </span>
            </Link>

            {/* Navegação Desktop (sem alterações, continua escondida no mobile) */}
            <nav className="hidden md:flex space-x-8">
              <a href="#solutions" className="text-white/90 hover:text-amber-400 transition-colors duration-300">Soluções</a>
              <a href="#market" className="text-white/90 hover:text-amber-400 transition-colors duration-300">Mercado</a>
              <a href="#plataform" className="text-white/90 hover:text-amber-400 transition-colors duration-300">Plataforma</a>
              <a href="/contact" className="text-white/90 hover:text-amber-400 transition-colors duration-300">Contato</a>
            </nav>

             {/* Botão Começar (escondido em telas pequenas para não poluir) */}
            <Link href="/under" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600 text-white border-0 shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                Começar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {/* 6. Botão do Menu Hambúrguer (só aparece em telas menores que 'md') */}
            <div className="md:hidden">
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* 7. Menu Mobile (tela cheia, aparece quando isMenuOpen é true) */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm md:hidden">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo dentro do menu aberto */}
                     <span className="text-xl font-bold bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
                        Fazza Agro Bank
                     </span>
                    {/* Botão de Fechar */}
                    <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon" className="text-white">
                        <X className="h-7 w-7" />
                    </Button>
                </div>
                {/* Links do Menu */}
                <nav className="flex flex-col items-center justify-center space-y-8 mt-24">
                  <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white/90 hover:text-amber-400 transition-colors duration-300">Soluções</a>
                  <a href="#market" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white/90 hover:text-amber-400 transition-colors duration-300">Mercado</a>
                  <a href="#plataform" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white/90 hover:text-amber-400 transition-colors duration-300">Plataforma</a>
                  <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white/90 hover:text-amber-400 transition-colors duration-300">Contato</a>
                  <Link href="/under" className="mt-8">
                     <Button className="bg-gradient-to-r from-amber-500 to-emerald-500 text-white text-lg px-8 py-6">
                        Começar
                        <ArrowRight className="ml-2 h-4 w-4" />
                     </Button>
                  </Link>
                </nav>
            </div>
          )}
        </header>

        {/* Hero Content */}
        <section className="relative z-10 flex items-center justify-center min-h-screen pt-24 pb-12 px-4">
          <div className="container mx-auto text-center">
            {/* O h1 foi ajustado para escalar melhor em telas pequenas */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Transformando a </span>
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 bg-clip-text text-transparent">
                Agricultura
              </span>
              <br />
              <span className="text-white/90">Por Meio do Banco Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Inclusão financeira para pequenos e médios produtores rurais. Fazza Agro Bank oferece soluções inovadoras que 
              combinam taxas competitivas, transações globais, promovendo inclusão financeira,
              segurança nas transações, proteção contra a volatilidade cambial, e impacto social positivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/under">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold text-lg px-8 sm:px-10 py-4 shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore Nossas Soluções
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              
              <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 sm:px-10 py-4 border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Saber Mais
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* [RESTANTE DO SEU CÓDIGO]... O restante do seu código já está bem estruturado para responsividade e não precisa de grandes alterações. */}

      {/* Introduction Section */}
      <section id="plataform"className="py-14 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-0">
            <img 
              src="/image/logo.png" 
              alt="Logo Fazza Agro Bank" 
              className="w-32 h-auto"
            />
          </div>
          <div className="text-center mb-16 px-4"> {/* Adicionado padding horizontal */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent leading-tight py-2">
              Fazza Agro Bank
            </h2>
            <p className="text-lg text-slate-300 max-w-full mx-auto leading-relaxed">
              O Fazza Agro Bank é um banco digital inovador que promove inclusão financeira e impacto social, 
              atendendo pequenos e médios produtores rurais, microempreendedores e comunidades carentes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 px-4">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-amber-300">Nossa plataforma abrangente</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50 flex-shrink-0"></div>
                  <p className="text-slate-300">Linhas de crédito para o setor agrícola com taxas de juros competitivas.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shadow-lg shadow-amber-400/50 flex-shrink-0"></div>
                  <p className="text-slate-300">Operações digitais com transferências via PIX, PIX Internacional, TED e DOC.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50 flex-shrink-0"></div>
                  <p className="text-slate-300">Integração com USDT para transações globais, proporcionando proteção contra a volatilidade cambial.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shadow-lg shadow-amber-400/50 flex-shrink-0"></div>
                  <p className="text-slate-300">Carteira completa de seguros (saúde, vida e incêndio para residências e empresas).</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50 flex-shrink-0"></div>
                  <p className="text-slate-300">Serviços de câmbio com taxas acessíveis para captação de recursos no exterior.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shadow-lg shadow-amber-400/50 flex-shrink-0"></div>
                  <p className="text-slate-300">Banco Humanitário Fazza, apoiando projetos sociais e programas de educação financeira.</p>
                </div>
              </div>
            </div>
            
            <div className="relative p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center"
                alt="Digital banking technology"
                className="relative rounded-2xl shadow-2xl border border-amber-500/20 w-full h-80 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm mx-4">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-amber-300">Conta Transacional</h4>
              <p className="text-slate-300">
                Uma solução exclusiva para produtores rurais que centraliza e facilita a gestão financeira no campo, proporcionando 
                mais controle, praticidade e segurança nas transações, permitindo uma tomada de decisão mais estratégica e eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Offered */}
      <section id="solutions" className="py-24 px-4 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">
                Soluções Oferecidas
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-emerald-600 mx-auto rounded-full"></div>
            <p className="py-8 text-lg text-slate-600 max-w-3xl mx-auto">
              Soluções financeiras inovadoras projetadas para o setor agrícola e impacto social, promovendo inclusão financeira, 
              acesso facilitado a crédito e transações seguras.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="bg-white border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                 Conta Digital para Produtores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Soluções bancárias digitais abrangentes, projetadas especificamente para produtores agrícolas.
                </p>
              </CardContent>
            </Card>
            {/* Card 2 */}
            <Card className="bg-white border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  Tokenização de Sacas de Café
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Sistema de tokenização que permite aos produtores obter financiamento imediato para sua produção.
                </p>
              </CardContent>
            </Card>
            {/* Card 3 */}
            <Card className="bg-white border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  Cashback Social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Parte das taxas é destinada a projetos sociais, criando um impacto positivo a cada transação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* O restante do código continua aqui... */}
       {/* Market Opportunity Section */}
      <section id="market" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent leading-tight py-2">
              Oportunidade de Mercado
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Posicionada na intersecção da agricultura e da tecnologia blockchain em um mercado em rápido crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Coluna 1 */}
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300">Setor Agrícola Global</h4>
                    <p className="text-2xl font-bold text-amber-400">US$ 10 trilhões</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-amber-500/20 hover:border-amber-400/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Blockchain no Agro</h4>
                    <p className="text-2xl font-bold text-emerald-400">30% de crescimento/ano</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Coluna 2 */}
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-amber-500/20 hover:border-amber-400/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <DollarSign className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Crédito e Seguros</h4>
                    <p className="text-sm text-slate-300">Linhas de crédito acessíveis e direcionadas.</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <Coins className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300">Financiamento e Tokenização</h4>
                    <p className="text-sm text-slate-300">Tokenização de ativos e plataformas de negociação.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para transformar seu negócio agrícola?</h2>
            <p className="text-lg text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Entre em contato e descubra como podemos contribuir para o crescimento sustentável do seu empreendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/under">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                   Explore Nossas Soluções
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/image/logo.png"
              alt="Fazza Agro Bank Logo"
              className="h-20 w-20 rounded-full mb-4"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
              Fazza Agro Bank
            </span>
            <p className="text-emerald-200 leading-relaxed mt-4 max-w-md">
              Transformando a agricultura por meio de soluções bancárias digitais inovadoras com uma abordagem moderna.
            </p>
          </div>
          <div className="border-t border-emerald-700 pt-8 mt-8">
            <p className="text-emerald-200">
              &copy; 2025 Fazza Agro Bank. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>  
  )
}
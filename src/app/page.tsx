import {
  ArrowRight,
  Globe,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  Leaf,
  Coins
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


export default function FazzaAgroBankLanding() {
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
            <nav className="hidden md:flex space-x-8">
              <a
                href="#solutions"
                className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group"
              >
                Solutions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#market"
                className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group"
              >
                Market
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#platform"
                className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group"
              >
                Platform
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="/contact"
                className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            <Link href="/under">
            <Button className="bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600 text-white border-0 shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </header>

        {/* Hero Content */}
        <section className="relative z-10 flex items-center justify-center min-h-[calc(100vh-250px)] px-4">
          <div className="container mx-auto text-center">
            <div className="mb-64">
            </div>
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight break-words">
              <span className="text-white">Transforming </span>

              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 bg-clip-text text-transparent">
                Agriculture
              </span>
              <br />
              <span className="text-white/90">Through the Digital Bank</span>
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Financial inclusion for small and medium-sized rural producers. Fazza Agro Bank offers innovative solutions that 
              combine competitive rates, global transactions, promoting financial inclusion,
              transaction security, protection against currency volatility, and positive social impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/under">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              
              <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Introduction Section */}
      <section id="platform"className="py-14 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-0">
            <img 
              src="/image/logo.png" 
              alt="Logo Fazza Agro Bank" 
              className="w-32 h-auto"
            />
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent leading-tight py-2">
              Fazza Agro Bank
            </h2>
            <p className="text-lg text-slate-300 max-w-full mx-auto leading-relaxed">
              Fazza Agro Bank is an innovative digital bank that promotes financial inclusion and social impact, 
              serving small and medium-sized rural producers, micro-entrepreneurs, and underserved communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-amber-300">Our Comprehensive Platform</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50"></div>
                  <p className="text-slate-300">Credit lines for the agricultural sector with competitive interest rates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shadow-lg shadow-amber-400/50"></div>
                  <p className="text-slate-300">Digital operations with transfers via PIX, International PIX, TED, and DOC.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50"></div>
                  <p className="text-slate-300">Integration with USDT for global transactions, providing protection against currency volatility.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shadow-lg shadow-amber-400/50"></div>
                  <p className="text-slate-300">Complete insurance portfolio (health, life, and fire for homes and businesses).</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50"></div>
                  <p className="text-slate-300">Foreign exchange services with accessible rates for raising funds abroad.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shadow-lg shadow-amber-400/50"></div>
                  <p className="text-slate-300">Fazza Humanitarian Bank, supporting social projects and financial education programs.</p>
                </div>
              </div>
            </div>
            
            {/* Image for About section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center"
                alt="Digital banking technology"
                className="relative rounded-2xl shadow-2xl border border-amber-500/20 w-full h-80 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-amber-300">Transactional Account</h4>
              <p className="text-slate-300">
                An exclusive solution for rural producers that centralizes and facilitates financial management in the field, providing 
                more control, convenience, and security in transactions, allowing for more strategic and efficient decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Offered - Light Green Background */}
      <section id="solutions" className="py-24 px-4 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {" "}
              <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">
                Solutions Offered
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-emerald-600 mx-auto rounded-full"></div>

            <p className="py-8 text-lg text-slate-300 max-w-3xl mx-auto bg-gradient-to-r from-emerald-900 to-emerald-900 bg-clip-text text-transparent">
            Innovative financial solutions designed specifically for the agricultural sector and social impact, promoting financial inclusion, 
            facilitated access to credit, and secure transactions, driving sustainable development and strengthening rural communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                 Digital Account for Producers
                </CardTitle>
                <CardDescription className="text-emerald-600 font-medium">
                  Financial inclusion without borders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                Comprehensive digital banking solutions, specifically designed for agricultural producers, 
                providing access to financial services regardless of location.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  Tokenization of Coffee Bags
                </CardTitle>
                <CardDescription className="text-amber-600 font-medium">
                  Tokenized production for immediate financing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                A revolutionary blockchain-based tokenization system that allows producers 
                to obtain immediate financing for their coffee production.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  Social Cashback
                </CardTitle>
                <CardDescription className="text-emerald-600 font-medium">
                  Supporting global social projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Part of the transaction fees is allocated to social projects in Palestine, Africa, and children&apos;s programs, 
                  creating a positive social impact with every transaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity - White Background */}
      <section id="market" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent leading-tight py-2">
              Market Opportunity
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Positioned at the intersection of agriculture and blockchain technology in a rapidly growing market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="h-full">
            <div className="space-y-6 h-full flex flex-col">
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/30 transition-colors flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300">Global Agricultural Sector</h4>
                    <p className="text-2xl font-bold text-amber-400">$10 trillion</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-amber-500/20 hover:border-amber-400/30 transition-colors flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Blockchain in Agriculture Growth</h4>
                    <p className="text-2xl font-bold text-emerald-400">30% per year</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/30 transition-colors flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-emerald-400 to-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <Leaf className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300">Brazil&apos;s Market Position</h4>
                    <p className="text-sm text-slate-300">A leader in agricultural production, a key market for expansion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="space-y-6 h-full flex flex-col">
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-amber-500/20 hover:border-amber-400/30 transition-colors flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <DollarSign className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Credit and Insurance</h4>
                    <p className="text-sm text-slate-300">Accessible and targeted credit lines.</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/30 transition-colors flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <Coins className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300">Financing and Tokenization</h4>
                    <p className="text-sm text-slate-300">Asset tokenization and trading platforms for 
                      farmers. </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-amber-500/20 hover:border-amber-400/30 transition-colors flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Financial Infrastructure</h4>
                    <p className="text-sm text-slate-300">Specific credit lines and customized insurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* CTA Section - Green Background */}
      <section className="py-24 px-4 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to transform your agricultural business?</h2>
            <p className="text-1xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Want to know how Fazza Agro Bank can benefit your business and offer innovative financial solutions to boost
              productivity in the field? Get in touch and discover how we can contribute to the sustainable growth of your agricultural enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/under">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
              >
                 Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Dark Green */}
      <footer className="bg-emerald-950 text-white py-16 px-4">
        <div className="container mx-auto">
          
          {/* Main Content */}
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
                Transforming agriculture through innovative digital banking solutions with a modern approach.
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


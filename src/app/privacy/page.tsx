// app/politica-de-privacidade/page.tsx
import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Saiba como tratamos seus dados ao preencher nosso formulário de contato.',
};

export default function PoliticaDePrivacidade() {
  return (
        
    <div className="min-h-screen bg-white">
      {/* Header */}
        <header className="z-50 backdrop-blur-sm bg-emerald-950 border-b border-amber-400/30">
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

    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade – Formulário de Contato</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introdução</h2>
        <p>
          Esta Política de Privacidade tem como objetivo esclarecer como as informações fornecidas por você ao preencher nosso
          formulário de contato são coletadas, utilizadas e protegidas.
        </p>
        <p>Ao enviar suas informações, você concorda com os termos desta política.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Dados Coletados</h2>
        <p>Coletamos apenas os dados necessários para o contato:</p>
        <ul className="list-disc list-inside">
          <li>Nome</li>
          <li>E-mail</li>
          <li>Empresa</li>
          <li>Cargo</li>
          <li>Telefone</li>
          <li>Mensagem</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Finalidade do Uso dos Dados</h2>
        <p>
          Os dados fornecidos serão usados exclusivamente para responder à sua mensagem, esclarecer dúvidas ou fornecer
          informações solicitadas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Armazenamento e Segurança</h2>
        <p>
          Seus dados são armazenados de forma segura, com acesso restrito apenas a pessoas autorizadas. Adotamos medidas
          técnicas e administrativas para protegê-los.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Compartilhamento de Dados</h2>
        <p>Não compartilhamos seus dados com terceiros. As informações são utilizadas apenas internamente.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Retenção dos Dados</h2>
        <p>
          Os dados serão mantidos apenas enquanto forem necessários para os fins mencionados, ou conforme obrigações legais.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta política periodicamente. Recomendamos que você a revise ocasionalmente para estar informado.
        </p>
      </section>
    </main>
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
  );
}

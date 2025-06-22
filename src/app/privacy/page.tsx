// app/privacy-policy/page.tsx
import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how we handle your data when you fill out our contact form.',
};

export default function PrivacyPolicy() {
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
              Back to Home
            </Button>
            </Link>
          </div>
        </header>

    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy – Contact Form</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Privacy Policy aims to clarify how the information provided by you when filling out our
          contact form is collected, used, and protected.
        </p>
        <p>By submitting your information, you agree to the terms of this policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Data Collected</h2>
        <p>We only collect the data necessary for contact:</p>
        <ul className="list-disc list-inside">
          <li>Name</li>
          <li>Email</li>
          <li>Company</li>
          <li>Position</li>
          <li>Phone</li>
          <li>Message</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Purpose of Data Use</h2>
        <p>
          The data provided will be used exclusively to respond to your message, clarify doubts, or provide
          requested information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Storage and Security</h2>
        <p>
          Your data is stored securely, with restricted access only to authorized personnel. We adopt
          technical and administrative measures to protect it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
        <p>We do not share your data with third parties. The information is used only internally.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
        <p>
          The data will be kept only as long as necessary for the purposes mentioned, or as required by legal obligations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to this Policy</h2>
        <p>
          We may update this policy periodically. We recommend that you review it occasionally to stay informed.
        </p>
      </section>
    </main>
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
  );
}

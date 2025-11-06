"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingCart } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top notification bar */}
      <div className="hidden lg:block bg-gray-100 px-6 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">
                <strong>Limited Time Offer:</strong> Shop online and get free no-contact delivery
              </p>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-sm hover:text-blue-600">
                FAQ
              </Link>
              <Link href="#" className="text-sm hover:text-blue-600">
                Careers
              </Link>
              <div className="flex gap-4">
                <select className="text-sm bg-transparent border-none cursor-pointer">
                  <option>English</option>
                  <option>Arabic</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                CCTV Security
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden xl:flex gap-8 items-center">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link href="/service" className="hover:text-blue-600">
                Service
              </Link>
              <Link href="/pages" className="hover:text-blue-600">
                Pages
              </Link>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Search size={20} />
              </button>
              <button className="hidden lg:flex p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart size={20} />
              </button>
              <Link
                href="/contact"
                className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Get In Touch
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="xl:hidden mt-4 py-4 border-t border-gray-200 flex flex-col gap-4">
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="block hover:text-blue-600">
                About
              </Link>
              <Link href="/service" className="block hover:text-blue-600">
                Service
              </Link>
              <Link href="/pages" className="block hover:text-blue-600">
                Pages
              </Link>
              <Link href="/blog" className="block hover:text-blue-600">
                Blog
              </Link>
              <Link href="/contact" className="block hover:text-blue-600">
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

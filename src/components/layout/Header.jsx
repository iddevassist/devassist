"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-dark">
            devassist.id
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
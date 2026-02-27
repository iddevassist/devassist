import Container from "../ui/Container";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaThreads, FaEnvelope, FaTiktok, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 border-t border-gray-800">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">devassist.id</h3>
            <p className="text-gray-400 text-sm">
              Solusi profesional untuk kebutuhan akademik dan IT Anda.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about">Tentang Kami</Link>
              </li>
              <li>
                <Link href="#services">Layanan</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact">Kontak</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@devassist.id
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +62 812 3456 7890
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Jakarta, Indonesia
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4 text-2xl">
              {/* Instagram */}
              <a
                href="https://instagram.com/devassist.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              {/* Threads */}
              <a
                href="https://threads.net/@devassist.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition duration-300"
              >
                <FaThreads />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@devassist.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition duration-300"
              >
                <FaTiktok />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/devassist.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition duration-300"
              >
                <FaFacebook />
              </a>

              {/* Email */}
              <a
                href="mailto:iddevassist@gmail.com"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} devassist.id. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

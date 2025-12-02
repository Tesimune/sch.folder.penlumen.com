import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+234 806 915 6572</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>optimumachieversacademy@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>No 822 Alh Bala Danlarabawa Street, Hausawa, Kano.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link href="/about" className="hover:text-white transition-colors block">
                About Us
              </Link>
              <Link href="/events" className="hover:text-white transition-colors block">
                Events
              </Link>
              <Link href="/gallery" className="hover:text-white transition-colors block">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors block">
                Contact
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-gray-300 text-sm">
              Optimum Achievers Academy is dedicated to inspiring excellence in education and shaping future leaders.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Optimum Achievers Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

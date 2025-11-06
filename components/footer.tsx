"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image src="/logo.png" alt={t.associationName} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t.associationName}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.missionText1}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">{t.contactUs}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="whitespace-pre-line">{t.addressValue}</li>
              <li>{t.phone}: +1 (555) 123-4567</li>
              <li>{t.email}: info@elitefootball.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">{t.followUs}</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t.associationName} {t.associationSubtitle}. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}

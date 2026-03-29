"use client"

import { MapPin, Phone, Mail } from "lucide-react"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>
    </svg>
  )
}
import { useI18n } from "@/lib/i18n"

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t bg-gradient-to-b from-background to-orange-950/10">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:py-16">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Spark.it
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            {t("footer.tagline")}
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
              <span>Av. Moreno 123, Tres Arroyos, Buenos Aires</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
              <span>(02983) 123-456</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
              <span>contacto@spark.it</span>
            </div>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{t("footer.solutions")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#soluciones" className="text-muted-foreground transition-colors hover:text-orange-500">
                  ChatBots
                </a>
              </li>
              <li>
                <a href="#soluciones" className="text-muted-foreground transition-colors hover:text-orange-500">
                  {t("features.web.title")}
                </a>
              </li>
              <li>
                <a href="#soluciones" className="text-muted-foreground transition-colors hover:text-orange-500">
                  {t("features.cloud.title")}
                </a>
              </li>
              <li>
                <a href="#soluciones" className="text-muted-foreground transition-colors hover:text-orange-500">
                  {t("features.systems.title")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{t("footer.company")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#por-que" className="text-muted-foreground transition-colors hover:text-orange-500">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#casos" className="text-muted-foreground transition-colors hover:text-orange-500">
                  {t("footer.clients")}
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-muted-foreground transition-colors hover:text-orange-500">
                  {t("nav.process")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{t("footer.connect")}</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/sparkit"
                className="text-muted-foreground transition-colors hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/company/sparkit"
                className="text-muted-foreground transition-colors hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-orange-500">Spark.it</span>, Tres Arroyos. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  )
}

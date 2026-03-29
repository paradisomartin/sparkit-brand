"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function CTA() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />

      <div className="container relative z-10 flex flex-col items-center gap-6 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl max-w-3xl text-balance">
          {t("cta.title")} <span className="text-orange-500">Tres Arroyos</span>?
        </h2>
        <p className="max-w-[42rem] text-pretty leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {t("cta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
            asChild
          >
            <a href="https://wa.me/5492983664378?text=Hola%20Spark.it%2C%20quiero%20agendar%20una%20llamada" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              {t("cta.button")}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-orange-500/50 hover:bg-orange-500/10 hover:border-orange-500"
            asChild
          >
            <a href="https://wa.me/5492983664378" target="_blank" rel="noopener noreferrer">
              {t("nav.contact")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

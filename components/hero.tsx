"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
        </span>
        Tres Arroyos, Buenos Aires
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance block">{t("hero.title")}</span>
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
            Spark.it pruebadeploy12345
          </span>
        </h1>
        <p className="mx-auto max-w-[42rem] text-pretty leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {t("hero.subtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
          asChild
        >
          <a href="https://wa.me/5492983664378?text=Hola%20Spark.it%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
            {t("hero.cta1")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-orange-500/50 hover:bg-orange-500/10 hover:border-orange-500"
          asChild
        >
          <a href="https://wa.me/5492983664378?text=Hola%20Spark.it%2C%20quiero%20agendar%20una%20llamada" target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2 h-4 w-4" />
            {t("hero.cta2")}
          </a>
        </Button>
      </div>

      {/* Trust indicators */}
      <div className="pt-8 flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          {t("hero.subtitle").includes("local") ? "Empresas locales confían en nosotros" : "Local businesses trust us"}
        </p>
        <div className="flex items-center gap-8 opacity-60">
          <div className="text-lg font-semibold">Agrícola Del Sur</div>
          <div className="text-lg font-semibold">Farmacia Central</div>
          <div className="text-lg font-semibold">Hotel Costanero</div>
        </div>
      </div>
    </section>
  )
}

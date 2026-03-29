"use client"

import { Zap, MapPin, Shield, HeadphonesIcon } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Benefits() {
  const { t } = useI18n()

  const benefits = [
    {
      name: t("benefits.tech.title"),
      description: t("benefits.tech.desc"),
      icon: Zap,
    },
    {
      name: t("benefits.local.title"),
      description: t("benefits.local.desc"),
      icon: MapPin,
    },
    {
      name: t("benefits.security.title"),
      description: t("benefits.security.desc"),
      icon: Shield,
    },
    {
      name: t("benefits.support.title"),
      description: t("benefits.support.desc"),
      icon: HeadphonesIcon,
    },
  ]

  return (
    <section id="beneficios" className="container space-y-16 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent" />
      <div className="relative z-10">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            {t("benefits.title")}
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            {t("benefits.subtitle")}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.name}
              className="relative overflow-hidden rounded-xl border bg-background p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/30"
            >
              <div className="mx-auto mb-4 p-3 rounded-xl bg-orange-500/10 w-fit">
                <benefit.icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold mb-2">{benefit.name}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

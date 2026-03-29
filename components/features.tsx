"use client"

import { MessageSquare, Globe, Cloud, Database } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Features() {
  const { t } = useI18n()

  const features = [
    {
      name: t("features.chatbots.title"),
      description: t("features.chatbots.desc"),
      icon: MessageSquare,
    },
    {
      name: t("features.web.title"),
      description: t("features.web.desc"),
      icon: Globe,
    },
    {
      name: t("features.cloud.title"),
      description: t("features.cloud.desc"),
      icon: Cloud,
    },
    {
      name: t("features.systems.title"),
      description: t("features.systems.desc"),
      icon: Database,
    },
  ]

  return (
    <section id="soluciones" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          {t("features.title")}
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          {t("features.subtitle")}
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/30"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-orange-500/10">
                  <feature.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg">{feature.name}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

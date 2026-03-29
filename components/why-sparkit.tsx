"use client"

import { Heart, Users, Lightbulb } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function WhySparkIt() {
  const { t } = useI18n()

  const items = [
    {
      icon: Heart,
      title: t("whySparkit.community.title"),
      desc: t("whySparkit.community.desc"),
    },
    {
      icon: Lightbulb,
      title: t("whySparkit.tech.title"),
      desc: t("whySparkit.tech.desc"),
    },
    {
      icon: Users,
      title: t("whySparkit.results.title"),
      desc: t("whySparkit.results.desc"),
    },
  ]

  return (
    <section id="por-que" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            {t("whySparkit.title")} <span className="text-orange-500">Spark.it</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl border transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-orange-500/10">
                  <item.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

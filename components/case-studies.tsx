"use client"

import { useI18n } from "@/lib/i18n"
import { TrendingUp, Leaf, Heart, Building } from "lucide-react"

export default function CaseStudies() {
  const { t } = useI18n()

  const cases = [
    {
      icon: Leaf,
      company: t("cases.case1.company"),
      industry: t("cases.case1.industry"),
      result: t("cases.case1.result"),
      desc: t("cases.case1.desc"),
      color: "emerald",
    },
    {
      icon: Heart,
      company: t("cases.case2.company"),
      industry: t("cases.case2.industry"),
      result: t("cases.case2.result"),
      desc: t("cases.case2.desc"),
      color: "rose",
    },
    {
      icon: Building,
      company: t("cases.case3.company"),
      industry: t("cases.case3.industry"),
      result: t("cases.case3.result"),
      desc: t("cases.case3.desc"),
      color: "blue",
    },
  ]

  return (
    <section id="casos" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            {t("cases.title")}
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            {t("cases.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/30 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <item.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {item.industry}
                  </span>
                </div>

                {/* Company name */}
                <h3 className="font-bold text-xl mb-3">{item.company}</h3>

                {/* Result highlight */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-semibold text-green-400">{item.result}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

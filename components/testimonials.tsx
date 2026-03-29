"use client"

import { useI18n } from "@/lib/i18n"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const { t } = useI18n()

  const testimonials = [
    {
      quote: t("testimonials.t1.quote"),
      name: t("testimonials.t1.name"),
      role: t("testimonials.t1.role"),
      initials: "MG",
    },
    {
      quote: t("testimonials.t2.quote"),
      name: t("testimonials.t2.name"),
      role: t("testimonials.t2.role"),
      initials: "CR",
    },
    {
      quote: t("testimonials.t3.quote"),
      name: t("testimonials.t3.name"),
      role: t("testimonials.t3.role"),
      initials: "LM",
    },
  ]

  return (
    <section id="testimonios" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-background border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/30"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 p-2 rounded-full bg-orange-500">
                <Quote className="h-4 w-4 text-white" />
              </div>

              {/* Quote text */}
              <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{item.initials}</span>
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

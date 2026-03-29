"use client"

import { useI18n } from "@/lib/i18n"
import { Search, Lightbulb, Code, Rocket, HeadphonesIcon } from "lucide-react"

export default function Process() {
  const { t } = useI18n()

  const steps = [
    {
      icon: Search,
      title: t("process.step1.title"),
      desc: t("process.step1.desc"),
      number: "01",
    },
    {
      icon: Lightbulb,
      title: t("process.step2.title"),
      desc: t("process.step2.desc"),
      number: "02",
    },
    {
      icon: Code,
      title: t("process.step3.title"),
      desc: t("process.step3.desc"),
      number: "03",
    },
    {
      icon: Rocket,
      title: t("process.step4.title"),
      desc: t("process.step4.desc"),
      number: "04",
    },
    {
      icon: HeadphonesIcon,
      title: t("process.step5.title"),
      desc: t("process.step5.desc"),
      number: "05",
    },
  ]

  return (
    <section id="proceso" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            {t("process.title")}
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-orange-500 to-orange-500/50" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Circle with number */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-background border-2 border-orange-500 flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                  }`}
                >
                  <div
                    className={`bg-background border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/30 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-orange-500/10">
                        <step.icon className="h-5 w-5 text-orange-500" />
                      </div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

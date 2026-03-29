"use client"

import { useI18n } from "@/lib/i18n"
import { Clock, Zap, Headphones, Bot, Globe, Rocket, ArrowRight } from "lucide-react"

export default function ProblemSolution() {
  const { t } = useI18n()

  const items = [
    {
      problem: {
        icon: Clock,
        title: t("problemSolution.problem1.title"),
        desc: t("problemSolution.problem1.desc"),
      },
      solution: {
        icon: Zap,
        title: t("problemSolution.solution1.title"),
        desc: t("problemSolution.solution1.desc"),
      },
    },
    {
      problem: {
        icon: Headphones,
        title: t("problemSolution.problem2.title"),
        desc: t("problemSolution.problem2.desc"),
      },
      solution: {
        icon: Bot,
        title: t("problemSolution.solution2.title"),
        desc: t("problemSolution.solution2.desc"),
      },
    },
    {
      problem: {
        icon: Globe,
        title: t("problemSolution.problem3.title"),
        desc: t("problemSolution.problem3.desc"),
      },
      solution: {
        icon: Rocket,
        title: t("problemSolution.solution3.title"),
        desc: t("problemSolution.solution3.desc"),
      },
    },
  ]

  return (
    <section id="problema-solucion" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            {t("problemSolution.title")}
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            {t("problemSolution.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 md:gap-8 items-center"
            >
              {/* Problem */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6 transition-all duration-300 hover:border-red-500/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <item.problem.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-red-400">{item.problem.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.problem.desc}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="p-2 rounded-full bg-orange-500/20">
                  <ArrowRight className="h-5 w-5 text-orange-500" />
                </div>
              </div>
              <div className="flex md:hidden items-center justify-center">
                <div className="p-2 rounded-full bg-orange-500/20 rotate-90">
                  <ArrowRight className="h-5 w-5 text-orange-500" />
                </div>
              </div>

              {/* Solution */}
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-6 transition-all duration-300 hover:border-green-500/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <item.solution.icon className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-green-400">{item.solution.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.solution.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

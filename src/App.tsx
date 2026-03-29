import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WhySparkIt from "@/components/why-sparkit"
import ProblemSolution from "@/components/problem-solution"
import Features from "@/components/features"
import Process from "@/components/process"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import Benefits from "@/components/benefits"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n"

export default function App() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen">
        {/* Background gradients */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-orange-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
          <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] bg-orange-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <WhySparkIt />
          <ProblemSolution />
          <Features />
          <Process />
          {/* <CaseStudies /> */}
          {/* <Testimonials /> */}
          <Benefits />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </div>
    </I18nProvider>
  )
}

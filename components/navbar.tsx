"use client"

import { Button } from "@/components/ui/button"
import { Menu, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const { t, language, setLanguage } = useI18n()

  const navLinks = [
    { href: "#por-que", label: t("nav.whySparkit") },
    { href: "#soluciones", label: t("nav.solutions") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#casos", label: t("nav.cases") },
    { href: "#testimonios", label: t("nav.testimonials") },
    { href: "#faq", label: t("nav.faq") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Spark.it
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu */}
        <div className="lg:hidden flex-1 flex justify-end mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-orange-500"
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="my-4" />
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  {t("nav.bookCall")}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="uppercase">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLanguage("es")}
                className={language === "es" ? "bg-orange-500/10 text-orange-500" : ""}
              >
                Espanol
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-orange-500/10 text-orange-500" : ""}
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" className="hover:text-orange-500">
            {t("nav.contact")}
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            {t("nav.bookCall")}
          </Button>
        </div>
      </div>
    </header>
  )
}

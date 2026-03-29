"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navbar
    "nav.whySparkit": "¿Por qué Spark.it?",
    "nav.solutions": "Soluciones",
    "nav.process": "Proceso",
    "nav.cases": "Casos",
    "nav.testimonials": "Testimonios",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.bookCall": "Agendar Llamada",

    // Hero
    "hero.title": "Innova en Tres Arroyos con",
    "hero.subtitle": "Somos tu aliado tecnológico local, impulsando el crecimiento de las empresas de nuestra ciudad con soluciones digitales de vanguardia.",
    "hero.cta1": "Explorar Soluciones",
    "hero.cta2": "Agendar una Demo",

    // Problem-Solution
    "problemSolution.title": "Del Problema a la Solución",
    "problemSolution.subtitle": "Transformamos los desafíos de tu negocio en oportunidades de crecimiento",
    "problemSolution.problem1.title": "Procesos Manuales Lentos",
    "problemSolution.problem1.desc": "Tareas repetitivas que consumen tiempo y recursos valiosos de tu equipo.",
    "problemSolution.solution1.title": "Automatización Inteligente",
    "problemSolution.solution1.desc": "Flujos de trabajo automatizados que liberan a tu equipo para tareas estratégicas.",
    "problemSolution.problem2.title": "Atención al Cliente Limitada",
    "problemSolution.problem2.desc": "Horarios restringidos y tiempos de espera que frustran a tus clientes.",
    "problemSolution.solution2.title": "ChatBots 24/7",
    "problemSolution.solution2.desc": "Asistencia inmediata a cualquier hora, mejorando la satisfacción del cliente.",
    "problemSolution.problem3.title": "Presencia Digital Débil",
    "problemSolution.problem3.desc": "Sitio web desactualizado que no refleja el valor real de tu negocio.",
    "problemSolution.solution3.title": "Web Moderna y Funcional",
    "problemSolution.solution3.desc": "Diseño profesional que convierte visitantes en clientes.",

    // Why Spark.it
    "whySparkit.title": "¿Por qué",
    "whySparkit.community.title": "Comprometidos con la Comunidad",
    "whySparkit.community.desc": "En Spark.it nos apasiona ver prosperar a Tres Arroyos. Por eso, ofrecemos servicios de desarrollo web, ChatBots y soluciones en la nube diseñados para fortalecer los negocios de la región.",
    "whySparkit.tech.title": "Tecnología al Alcance de Todos",
    "whySparkit.tech.desc": "Creemos que la transformación digital debe ser accesible. Nuestro equipo se dedica a crear proyectos a la medida, con el cuidado y la atención que solo un socio local puede brindar.",
    "whySparkit.results.title": "Resultados Reales y Cercanos",
    "whySparkit.results.desc": "Al trabajar mano a mano con las empresas de Tres Arroyos, nos aseguramos de que cada solución responda a las necesidades específicas de nuestro entorno, impulsando la eficiencia y el crecimiento.",

    // Solutions/Features
    "features.title": "Soluciones Principales",
    "features.subtitle": "Descubre cómo Spark.it puede transformar tu negocio con nuestras tecnologías innovadoras.",
    "features.chatbots.title": "ChatBots Inteligentes",
    "features.chatbots.desc": "Mejora la atención al cliente y agiliza la comunicación con herramientas basadas en IA, desarrolladas para el ritmo de los negocios de Tres Arroyos.",
    "features.web.title": "Desarrollo Web a Medida",
    "features.web.desc": "Creamos sitios web modernos y funcionales, reflejando la esencia de tu empresa y destacándote en el mercado local.",
    "features.cloud.title": "Soluciones en la Nube",
    "features.cloud.desc": "Optimiza tus procesos y reduce costos con servicios en la nube, diseñados para adaptarse a las necesidades de cada negocio de nuestra ciudad.",
    "features.systems.title": "Sistemas de Información",
    "features.systems.desc": "Desde CRMs personalizados hasta plataformas de e-commerce, desarrollamos soluciones que simplifican y mejoran la gestión interna de tu empresa.",

    // Process
    "process.title": "Cómo Trabajamos",
    "process.subtitle": "Un proceso simple y transparente para llevar tu proyecto del concepto a la realidad",
    "process.step1.title": "Descubrimiento",
    "process.step1.desc": "Nos reunimos contigo para entender tu negocio, objetivos y desafíos específicos.",
    "process.step2.title": "Estrategia",
    "process.step2.desc": "Diseñamos una solución personalizada con tiempos claros y presupuesto definido.",
    "process.step3.title": "Desarrollo",
    "process.step3.desc": "Construimos tu solución con metodologías ágiles, manteniéndote informado en cada etapa.",
    "process.step4.title": "Lanzamiento",
    "process.step4.desc": "Implementamos la solución y te capacitamos para sacarle el máximo provecho.",
    "process.step5.title": "Soporte Continuo",
    "process.step5.desc": "Te acompañamos después del lanzamiento con mantenimiento y mejoras continuas.",

    // Case Studies
    "cases.title": "Casos de Éxito",
    "cases.subtitle": "Empresas de Tres Arroyos que ya confían en Spark.it",
    "cases.case1.company": "Agrícola Del Sur",
    "cases.case1.industry": "Agroindustria",
    "cases.case1.result": "+40% eficiencia operativa",
    "cases.case1.desc": "Implementamos un sistema de gestión de inventario en la nube que redujo los tiempos de procesamiento y mejoró la trazabilidad de productos.",
    "cases.case2.company": "Farmacia Central",
    "cases.case2.industry": "Salud",
    "cases.case2.result": "500+ consultas/mes automatizadas",
    "cases.case2.desc": "Desarrollamos un ChatBot que responde consultas sobre disponibilidad de productos y horarios, liberando al personal para atención personalizada.",
    "cases.case3.company": "Hotel Costanero",
    "cases.case3.industry": "Turismo",
    "cases.case3.result": "+65% reservas online",
    "cases.case3.desc": "Creamos un sitio web moderno con sistema de reservas integrado que transformó su presencia digital y aumentó las conversiones.",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Historias reales de empresas que transformaron su negocio",
    "testimonials.t1.quote": "Spark.it entendió perfectamente nuestras necesidades. El ChatBot que desarrollaron nos ahorra horas de trabajo cada semana y nuestros clientes están encantados con la atención inmediata.",
    "testimonials.t1.name": "María González",
    "testimonials.t1.role": "Propietaria, Farmacia Central",
    "testimonials.t2.quote": "Trabajar con un equipo local hace toda la diferencia. Siempre están disponibles cuando los necesitamos y conocen la realidad de hacer negocios en Tres Arroyos.",
    "testimonials.t2.name": "Carlos Rodríguez",
    "testimonials.t2.role": "Gerente, Agrícola Del Sur",
    "testimonials.t3.quote": "Nuestra nueva web no solo se ve profesional, sino que realmente convierte visitantes en huéspedes. La inversión se pagó sola en pocos meses.",
    "testimonials.t3.name": "Laura Martínez",
    "testimonials.t3.role": "Directora, Hotel Costanero",

    // Benefits
    "benefits.title": "Beneficios Clave",
    "benefits.subtitle": "Descubre las ventajas de trabajar con un aliado tecnológico local",
    "benefits.tech.title": "Tecnología de Vanguardia",
    "benefits.tech.desc": "Integramos las últimas tendencias digitales para que tu negocio se mantenga siempre actualizado.",
    "benefits.local.title": "Enfoque Local y Personalizado",
    "benefits.local.desc": "Comprendemos las necesidades de Tres Arroyos y adaptamos cada solución a la realidad de la región.",
    "benefits.security.title": "Seguridad Confiable",
    "benefits.security.desc": "Protegemos tus datos con estándares de seguridad sólidos, para que puedas operar con tranquilidad.",
    "benefits.support.title": "Soporte Cercano",
    "benefits.support.desc": "Estamos aquí para ti. Nuestro equipo responde de forma ágil y eficiente, brindando la cercanía que solo un servicio local puede ofrecer.",

    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Respuestas a las dudas más comunes sobre nuestros servicios",
    "faq.q1": "¿Cuánto tiempo toma desarrollar un proyecto?",
    "faq.a1": "Depende de la complejidad. Un sitio web puede estar listo en 2-4 semanas, mientras que sistemas más complejos pueden tomar 2-3 meses. Siempre acordamos plazos claros antes de comenzar.",
    "faq.q2": "¿Trabajan solo con empresas de Tres Arroyos?",
    "faq.a2": "Aunque nuestro enfoque principal es la comunidad local, también trabajamos con empresas de toda la región y el país. Lo importante es que podamos agregar valor a tu negocio.",
    "faq.q3": "¿Qué pasa después del lanzamiento?",
    "faq.a3": "Ofrecemos planes de soporte y mantenimiento continuo. No te dejamos solo después de entregar el proyecto; nos aseguramos de que todo funcione perfectamente.",
    "faq.q4": "¿Cómo son los precios?",
    "faq.a4": "Cada proyecto es único, por eso ofrecemos presupuestos personalizados. Agenda una llamada gratuita y te daremos una cotización sin compromiso.",
    "faq.q5": "¿Necesito conocimientos técnicos para trabajar con ustedes?",
    "faq.a5": "Para nada. Nos encargamos de toda la parte técnica y te explicamos todo en términos simples. Solo necesitas saber qué quieres lograr con tu negocio.",

    // CTA
    "cta.title": "¿Listo para transformar tu negocio en",
    "cta.subtitle": "Únete a las empresas que ya confían en Spark.it y descubre cómo podemos impulsar tu presencia digital.",
    "cta.button": "Agendar Llamada Gratuita",

    // Footer
    "footer.tagline": "Soluciones tecnológicas para Tres Arroyos y la región.",
    "footer.solutions": "Soluciones",
    "footer.company": "Empresa",
    "footer.connect": "Conecta",
    "footer.aboutUs": "Sobre Nosotros",
    "footer.team": "Nuestro Equipo",
    "footer.clients": "Clientes",
    "footer.copyright": "Todos los derechos reservados.",
  },
  en: {
    // Navbar
    "nav.whySparkit": "Why Spark.it?",
    "nav.solutions": "Solutions",
    "nav.process": "Process",
    "nav.cases": "Cases",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.bookCall": "Book a Call",

    // Hero
    "hero.title": "Innovate in Tres Arroyos with",
    "hero.subtitle": "We are your local technology partner, driving the growth of businesses in our city with cutting-edge digital solutions.",
    "hero.cta1": "Explore Solutions",
    "hero.cta2": "Book a Demo",

    // Problem-Solution
    "problemSolution.title": "From Problem to Solution",
    "problemSolution.subtitle": "We transform your business challenges into growth opportunities",
    "problemSolution.problem1.title": "Slow Manual Processes",
    "problemSolution.problem1.desc": "Repetitive tasks that consume valuable time and resources from your team.",
    "problemSolution.solution1.title": "Intelligent Automation",
    "problemSolution.solution1.desc": "Automated workflows that free your team for strategic tasks.",
    "problemSolution.problem2.title": "Limited Customer Service",
    "problemSolution.problem2.desc": "Restricted hours and wait times that frustrate your customers.",
    "problemSolution.solution2.title": "24/7 ChatBots",
    "problemSolution.solution2.desc": "Immediate assistance at any time, improving customer satisfaction.",
    "problemSolution.problem3.title": "Weak Digital Presence",
    "problemSolution.problem3.desc": "Outdated website that doesn&apos;t reflect your business&apos;s true value.",
    "problemSolution.solution3.title": "Modern & Functional Web",
    "problemSolution.solution3.desc": "Professional design that converts visitors into customers.",

    // Why Spark.it
    "whySparkit.title": "Why",
    "whySparkit.community.title": "Committed to the Community",
    "whySparkit.community.desc": "At Spark.it we are passionate about seeing Tres Arroyos thrive. That&apos;s why we offer web development, ChatBots, and cloud solutions designed to strengthen regional businesses.",
    "whySparkit.tech.title": "Technology for Everyone",
    "whySparkit.tech.desc": "We believe digital transformation should be accessible. Our team is dedicated to creating custom projects with the care and attention only a local partner can provide.",
    "whySparkit.results.title": "Real and Close Results",
    "whySparkit.results.desc": "By working hand in hand with Tres Arroyos businesses, we ensure each solution responds to our environment&apos;s specific needs, driving efficiency and growth.",

    // Solutions/Features
    "features.title": "Core Solutions",
    "features.subtitle": "Discover how Spark.it can transform your business with our innovative technologies.",
    "features.chatbots.title": "Intelligent ChatBots",
    "features.chatbots.desc": "Improve customer service and streamline communication with AI-based tools, developed for the pace of Tres Arroyos businesses.",
    "features.web.title": "Custom Web Development",
    "features.web.desc": "We create modern and functional websites, reflecting your company&apos;s essence and making you stand out in the local market.",
    "features.cloud.title": "Cloud Solutions",
    "features.cloud.desc": "Optimize your processes and reduce costs with cloud services, designed to adapt to each business&apos;s needs in our city.",
    "features.systems.title": "Information Systems",
    "features.systems.desc": "From custom CRMs to e-commerce platforms, we develop solutions that simplify and improve your company&apos;s internal management.",

    // Process
    "process.title": "How We Work",
    "process.subtitle": "A simple and transparent process to take your project from concept to reality",
    "process.step1.title": "Discovery",
    "process.step1.desc": "We meet with you to understand your business, goals, and specific challenges.",
    "process.step2.title": "Strategy",
    "process.step2.desc": "We design a custom solution with clear timelines and defined budget.",
    "process.step3.title": "Development",
    "process.step3.desc": "We build your solution with agile methodologies, keeping you informed at every stage.",
    "process.step4.title": "Launch",
    "process.step4.desc": "We implement the solution and train you to get the most out of it.",
    "process.step5.title": "Ongoing Support",
    "process.step5.desc": "We accompany you after launch with maintenance and continuous improvements.",

    // Case Studies
    "cases.title": "Success Stories",
    "cases.subtitle": "Tres Arroyos businesses that already trust Spark.it",
    "cases.case1.company": "Agrícola Del Sur",
    "cases.case1.industry": "Agribusiness",
    "cases.case1.result": "+40% operational efficiency",
    "cases.case1.desc": "We implemented a cloud inventory management system that reduced processing times and improved product traceability.",
    "cases.case2.company": "Farmacia Central",
    "cases.case2.industry": "Healthcare",
    "cases.case2.result": "500+ queries/month automated",
    "cases.case2.desc": "We developed a ChatBot that answers queries about product availability and hours, freeing staff for personalized attention.",
    "cases.case3.company": "Hotel Costanero",
    "cases.case3.industry": "Tourism",
    "cases.case3.result": "+65% online bookings",
    "cases.case3.desc": "We created a modern website with integrated booking system that transformed their digital presence and increased conversions.",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real stories from businesses that transformed their operations",
    "testimonials.t1.quote": "Spark.it perfectly understood our needs. The ChatBot they developed saves us hours of work each week and our customers love the immediate attention.",
    "testimonials.t1.name": "María González",
    "testimonials.t1.role": "Owner, Farmacia Central",
    "testimonials.t2.quote": "Working with a local team makes all the difference. They&apos;re always available when we need them and understand the reality of doing business in Tres Arroyos.",
    "testimonials.t2.name": "Carlos Rodríguez",
    "testimonials.t2.role": "Manager, Agrícola Del Sur",
    "testimonials.t3.quote": "Our new website not only looks professional, it actually converts visitors into guests. The investment paid for itself in just a few months.",
    "testimonials.t3.name": "Laura Martínez",
    "testimonials.t3.role": "Director, Hotel Costanero",

    // Benefits
    "benefits.title": "Key Benefits",
    "benefits.subtitle": "Discover the advantages of working with a local technology partner",
    "benefits.tech.title": "Cutting-Edge Technology",
    "benefits.tech.desc": "We integrate the latest digital trends to keep your business always up to date.",
    "benefits.local.title": "Local & Personalized Approach",
    "benefits.local.desc": "We understand Tres Arroyos&apos;s needs and adapt each solution to the region&apos;s reality.",
    "benefits.security.title": "Reliable Security",
    "benefits.security.desc": "We protect your data with solid security standards, so you can operate with peace of mind.",
    "benefits.support.title": "Close Support",
    "benefits.support.desc": "We&apos;re here for you. Our team responds quickly and efficiently, providing the closeness only local service can offer.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Answers to the most common questions about our services",
    "faq.q1": "How long does it take to develop a project?",
    "faq.a1": "It depends on complexity. A website can be ready in 2-4 weeks, while more complex systems can take 2-3 months. We always agree on clear deadlines before starting.",
    "faq.q2": "Do you only work with Tres Arroyos businesses?",
    "faq.a2": "Although our main focus is the local community, we also work with companies throughout the region and country. What matters is that we can add value to your business.",
    "faq.q3": "What happens after launch?",
    "faq.a3": "We offer ongoing support and maintenance plans. We don&apos;t leave you alone after delivering the project; we make sure everything works perfectly.",
    "faq.q4": "How is pricing handled?",
    "faq.a4": "Each project is unique, so we offer personalized quotes. Schedule a free call and we&apos;ll give you a no-obligation quote.",
    "faq.q5": "Do I need technical knowledge to work with you?",
    "faq.a5": "Not at all. We handle all the technical stuff and explain everything in simple terms. You just need to know what you want to achieve with your business.",

    // CTA
    "cta.title": "Ready to transform your business in",
    "cta.subtitle": "Join the businesses that already trust Spark.it and discover how we can boost your digital presence.",
    "cta.button": "Book a Free Call",

    // Footer
    "footer.tagline": "Technology solutions for Tres Arroyos and the region.",
    "footer.solutions": "Solutions",
    "footer.company": "Company",
    "footer.connect": "Connect",
    "footer.aboutUs": "About Us",
    "footer.team": "Our Team",
    "footer.clients": "Clients",
    "footer.copyright": "All rights reserved.",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

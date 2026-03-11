import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoAmpla from "@/assets/logo-ampla.png";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const services = [
  "Consultas em Neurologia e Fisiatria",
  "Toxina Botulínica",
  "Infiltrações e outros procedimentos",
  "Consultas domiciliares",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Clínica Vida Ampla - Neurologia e Fisiatria em Aracaju"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40 md:from-foreground/90 md:via-foreground/70 md:to-foreground/30" />
      </div>

      <div className="container mx-auto relative z-10 pt-24 pb-16 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs md:text-sm font-medium mb-4 md:mb-6 border border-primary/30">
                Neurologia · Fisiatria · Acupuntura
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-4 md:mb-6"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Vida Ampla.{" "}
              <span className="text-primary">Saúde Plena.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2 md:space-y-3 mb-8 md:mb-10"
            >
              {services.map((s) => (
                <div key={s} className="flex items-center gap-2 md:gap-3" style={{ color: "hsl(0 0% 85%)" }}>
                  <Plus className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-lg">{s}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-accent transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02]"
              >
                Agende sua consulta
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="/diferenciais"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Nossos diferenciais
              </a>
            </motion.div>
          </div>

          {/* Logo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center"
          >
            <img
              src={logoAmpla}
              alt="Logo Vida Ampla"
              className="w-48 xl:w-64 h-auto opacity-80 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

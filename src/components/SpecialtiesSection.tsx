import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  Brain,
  Syringe,
  HeartPulse,
  Zap,
  ShieldCheck,
  ArrowRight,
  Stethoscope,
  Pill,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const fisiatriaItems = [
  { icon: Activity, text: "Artrose ou Osteoartrose" },
  { icon: HeartPulse, text: "Tratamento de dor e Fibromialgia" },
  { icon: Syringe, text: "Toxina Botulínica e procedimentos minimamente invasivos" },
  { icon: ShieldCheck, text: "Prescrição de órteses & próteses" },
  { icon: Stethoscope, text: "Tratamento de pacientes com doenças incapacitantes" },
  { icon: Pill, text: "Planejamento de Cuidados e Reabilitação" },
];

const neurologiaItems = [
  { icon: Brain, text: "Doença de Parkinson e transtornos do movimento" },
  { icon: Zap, text: "Dor de cabeça (cefaleia) e Epilepsia" },
  { icon: Activity, text: "AVC e doenças cerebrovasculares" },
  { icon: ShieldCheck, text: "Esclerose Múltipla e doenças desmielinizantes" },
  { icon: HeartPulse, text: "Demência e distúrbios cognitivos" },
  { icon: Stethoscope, text: "Tonturas e distúrbios do equilíbrio" },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium text-xs md:text-sm tracking-widest uppercase">
            Especialidades
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mt-2 md:mt-3 text-foreground">
            Cuidado <span className="text-gradient">especializado</span> para você
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Fisiatria */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary" />
              <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Dra. Monique Lima
              </span>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 md:mb-2">
              Fisiatria
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">Medicina Física & Reabilitação</p>
            <div className="space-y-3 md:space-y-4">
              {fisiatriaItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-foreground pt-1.5 md:pt-2 text-xs md:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/fisiatria"
              className="mt-6 md:mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm md:text-base"
            >
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Neurologia */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-500"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-accent" />
              <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Dr. Helton Benevides
              </span>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 md:mb-2">
              Neurologia
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">Neurologia Clínica</p>
            <div className="space-y-3 md:space-y-4">
              {neurologiaItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <span className="text-foreground pt-1.5 md:pt-2 text-xs md:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/neurologia"
              className="mt-6 md:mt-8 inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors text-sm md:text-base"
            >
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

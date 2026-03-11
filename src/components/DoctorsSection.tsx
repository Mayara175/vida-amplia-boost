import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import draMonique from "@/assets/dra-monique.jpg";
import drHelton from "@/assets/dr-helton.jpg";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const doctors = [
  {
    name: "Dra. Monique Lima",
    subtitle: "Medicina Física & Reabilitação",
    specialties: ["Fisiatra", "Acupuntura", "Medicina de manejo da Dor"],
    image: draMonique,
    link: "/fisiatria",
    description:
      "Formada em Medicina pela UFS, especialista em Fisiatria pela UNIFESP, com pós-graduação em Dor pela FMUSP e especialização em Acupuntura.",
  },
  {
    name: "Dr. Helton Benevides",
    subtitle: "Neurologia Clínica e Movimento",
    specialties: ["Neurologista Clínico", "Especialista em Transtornos do Movimento"],
    image: drHelton,
    link: "/neurologia",
    description:
      "Formado em Medicina pela UFS, especialista em Neurologia Clínica pelo IAMSPE, com subespecialização em Transtornos do Movimento.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const DoctorsSection = () => {
  return (
    <section id="quem-somos" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium text-xs md:text-sm tracking-widest uppercase">
            Quem somos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mt-2 md:mt-3 text-foreground">
            Profissionais dedicados ao seu{" "}
            <span className="text-gradient">bem-estar</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Doctor Photo */}
              <div className="relative h-52 sm:h-60 md:h-72 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="p-5 md:p-8 -mt-10 md:-mt-12 relative z-10">
                <span className="text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
                  {doc.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mt-1 mb-2 md:mb-3">
                  {doc.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {doc.description}
                </p>
                <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                  {doc.specialties.map((s) => (
                    <li
                      key={s}
                      className="text-foreground/80 flex items-center gap-2 text-xs md:text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <Link
                    to={doc.link}
                    className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-1 text-sm"
                  >
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    Agendar consulta
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;

import { motion } from "framer-motion";
import { Stethoscope, Brain } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const doctors = [
  {
    name: "Dra. Monique Lima",
    specialties: ["Fisiatra", "Acupuntura", "Medicina de manejo da Dor"],
    icon: Stethoscope,
  },
  {
    name: "Dr. Helton Benevides",
    specialties: ["Neurologista Clínico", "Especialista em Transtornos do Movimento"],
    icon: Brain,
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
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Quem somos</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Profissionais dedicados ao seu <span className="text-gradient">bem-estar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <doc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">{doc.name}</h3>
              <ul className="space-y-2">
                {doc.specialties.map((s) => (
                  <li key={s} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-primary font-semibold hover:text-accent transition-colors"
              >
                Agendar consulta →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;

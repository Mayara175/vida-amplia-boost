import { motion } from "framer-motion";
import { Heart, Users, Leaf, Shield } from "lucide-react";
import doctorsTogether from "@/assets/doctors-together.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const values = [
  {
    icon: Heart,
    title: "Cuidado Integral",
    desc: "Tratamento medicamentoso e não medicamentoso na prevenção e cuidado. Acreditamos que o tratamento deve ser amplo e contextualizado.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    desc: "Sem pressa. Profissionais dedicados com suporte pós-consulta, orientações contínuas e esclarecimento de dúvidas.",
  },
  {
    icon: Leaf,
    title: "Saúde Dinâmica",
    desc: "Prevenir e tratar de forma integrada, onde saúde é um processo dinâmico baseado nas melhores evidências.",
  },
  {
    icon: Shield,
    title: "Multidisciplinar",
    desc: "Neurologista e Fisiatra no mesmo local, com acompanhamento individualizado e visão completa do paciente.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={doctorsTogether}
                alt="Dra. Monique Lima e Dr. Helton Benevides"
                className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl hidden sm:block">
              <p className="text-2xl md:text-3xl font-display font-bold">+10</p>
              <p className="text-xs md:text-sm opacity-90">anos de experiência</p>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-primary font-medium text-xs md:text-sm tracking-widest uppercase">
                Nossos Diferenciais
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 md:mt-3 text-foreground leading-tight">
                Acredite na evolução como um{" "}
                <span className="text-gradient">processo dinâmico</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
                Acreditamos no conceito de saúde de uma forma dinâmica, onde prevenir e tratar não
                podem ser separados. Queremos mostrar que o cuidado pode e deve ser amplo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-8 md:mt-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    <v.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-1 md:mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 md:mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/25"
              >
                Marque hoje sua avaliação
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

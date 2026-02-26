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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={doctorsTogether}
                alt="Dra. Monique Lima e Dr. Helton Benevides"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="text-3xl font-display font-bold">+10</p>
              <p className="text-sm opacity-90">anos de experiência</p>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Nossos Diferenciais
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground leading-tight">
                Acredite na evolução como um{" "}
                <span className="text-gradient">processo dinâmico</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                Acreditamos no conceito de saúde de uma forma dinâmica, onde prevenir e tratar não
                podem ser separados. Queremos mostrar que o cuidado pode e deve ser amplo.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/25"
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

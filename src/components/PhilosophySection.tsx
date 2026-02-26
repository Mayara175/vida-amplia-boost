import { motion } from "framer-motion";
import { Heart, Users, Leaf } from "lucide-react";

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
    desc: "Tratamento medicamentoso e não medicamentoso na prevenção e cuidado.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    desc: "Profissionais dedicados com suporte pós-consulta e orientações contínuas.",
  },
  {
    icon: Leaf,
    title: "Saúde Dinâmica",
    desc: "Prevenir e tratar de forma integrada, com base nas melhores evidências.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Acredite na evolução como um{" "}
            <span className="text-gradient">processo dinâmico</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Acreditamos no conceito de saúde de uma forma dinâmica, onde prevenir e tratar não podem
            ser separados. Queremos mostrar que o cuidado pode e deve ser amplo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-14">
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
    </section>
  );
};

export default PhilosophySection;

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  HeartPulse,
  Syringe,
  ShieldCheck,
  Stethoscope,
  Pill,
  GraduationCap,
  Award,
  Phone,
} from "lucide-react";
import Layout from "@/components/Layout";
import draMoniqueFull from "@/assets/dra-monique-full.jpg";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const specialties = [
  { icon: Activity, title: "Artrose ou Osteoartrose", description: "Anteriormente, pensava-se que a artrose era simplesmente uma doença de 'desgaste'. Sabe-se agora que a OA é um processo muito mais complexo composto por fatores inflamatórios e metabólicos, que leva à destruição da cartilagem articular, rigidez, inchaço e perda de mobilidade." },
  { icon: Syringe, title: "Espasticidade", description: "A espasticidade é um sinal clínico que ocorre em inúmeras condições neurológicas, como derrame, esclerose múltipla, paralisia cerebral, lesão cerebral traumática e lesão medular. Tem um impacto importante no indivíduo, devido à perda de funcionalidade e autonomia." },
  { icon: HeartPulse, title: "Fibromialgia", description: "Na prática clínica, deve-se suspeitar de fibromialgia em pacientes com dor multifocal não totalmente explicada por lesão ou inflamação. Como os caminhos da dor por todo o corpo são amplificados, a dor pode ocorrer em qualquer lugar." },
  { icon: ShieldCheck, title: "Prescrição de Órteses & Próteses", description: "Avaliação e prescrição individualizada de órteses e próteses para melhorar a funcionalidade, autonomia e qualidade de vida do paciente." },
  { icon: Stethoscope, title: "Tratamento de Dor", description: "Abordagem multidisciplinar para manejo da dor crônica, incluindo tratamentos medicamentosos e não medicamentosos, com foco na qualidade de vida do paciente." },
  { icon: Pill, title: "Toxina Botulínica", description: "Aplicação de toxina botulínica para tratamento de espasticidade, distonia e outras condições neuromusculares, com técnica precisa e individualizada." },
];

const credentials = [
  { icon: GraduationCap, text: "Medicina pela Universidade Federal de Sergipe (UFS) - 2012" },
  { icon: Award, text: "Especialização em Medicina Física e Reabilitação (Fisiatria) pela UNIFESP" },
  { icon: Award, text: "Pós-graduação em Dor pela FMUSP" },
  { icon: Award, text: "Intervenção em Dor pelo Grupo Cetrus" },
  { icon: Award, text: "Especialização em Acupuntura pelo CEIMEC" },
];

const FisiatriaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Medicina Física & Reabilitação
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 leading-tight">
                Dra. Monique Lima
              </h1>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed max-w-lg">
                Fisiatra · Acupuntura · Medicina de Manejo da Dor. Dedicada ao cuidado integral e
                reabilitação de pacientes, com foco em tratamento da dor e recuperação funcional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/25"
                >
                  <Phone className="w-5 h-5" />
                  Agendar Consulta
                </a>
                <Link
                  to="/neurologia"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-medium border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-foreground"
                >
                  Ver Neurologia
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md">
                  <img
                    src={draMoniqueFull}
                    alt="Dra. Monique Lima - Fisiatra"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border hidden md:block">
                  <p className="text-sm text-muted-foreground">Especialidade</p>
                  <p className="text-lg font-display font-bold text-foreground">Fisiatria</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Formação <span className="text-gradient">Acadêmica</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="bg-card rounded-3xl p-8 md:p-10 border border-border">
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Dra. Monique Lima</strong>, nasceu e cresceu na cidade de Aracaju e se formou em Medicina pela Universidade Federal de Sergipe (UFS) em 2012. Em 2015, se mudou para São Paulo para se especializar em Medicina Física e Reabilitação (Fisiatria) pela UNIFESP e desbravar um novo mundo em uma especialidade pouco conhecida e importante. Complementou sua formação em São Paulo com pós-graduação em Dor pela FMUSP e Intervenção em Dor pelo Grupo Cetrus, além de também se especializar em Acupuntura pelo CEIMEC. Retornou para Aracaju em 2021 para fundar a AMPLA – Saúde Integrada.
            </p>
            <div className="space-y-4">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground pt-2 text-sm">{c.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties Detail */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Fique por dentro
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
              Principais assuntos da <span className="text-gradient">Fisiatria</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto text-center max-w-2xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Agende sua consulta com a Dra. Monique
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Saiba mais sobre os principais temas, deixe seu comentário e marque sua avaliação.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/25"
            >
              <Phone className="w-5 h-5" />
              Agendar agora
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FisiatriaPage;

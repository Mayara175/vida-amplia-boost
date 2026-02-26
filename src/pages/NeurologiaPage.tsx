import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Zap,
  Activity,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  GraduationCap,
  Award,
  Phone,
} from "lucide-react";
import Layout from "@/components/Layout";
import drHeltonFull from "@/assets/dr-helton-full.jpg";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const specialties = [
  { icon: HeartPulse, title: "Dor de Cabeça (Cefaleia)", description: "Investigação e tratamento das diversas formas de cefaleia, incluindo enxaqueca, cefaleia tensional e outras cefaleias primárias e secundárias, com abordagem individualizada." },
  { icon: Brain, title: "Doença de Parkinson", description: "Diagnóstico e acompanhamento da Doença de Parkinson e outros transtornos do movimento, com tratamento medicamentoso e orientação multidisciplinar para manter a qualidade de vida." },
  { icon: Activity, title: "Tremor", description: "Avaliação e diagnóstico diferencial dos diversos tipos de tremor, incluindo tremor essencial, tremor parkinsoniano e outros tremores, com tratamento direcionado." },
  { icon: ShieldCheck, title: "Alzheimer e Outras Demências", description: "Investigação, diagnóstico e acompanhamento das demências, com foco no suporte ao paciente e à família, orientações e tratamento para desacelerar a progressão." },
  { icon: Zap, title: "Epilepsia", description: "Diagnóstico e tratamento das epilepsias, com controle das crises através de medicação adequada e acompanhamento contínuo." },
  { icon: Stethoscope, title: "AVC e Doenças Cerebrovasculares", description: "Prevenção, diagnóstico e acompanhamento pós-AVC, com foco na reabilitação e prevenção de novos eventos vasculares cerebrais." },
];

const credentials = [
  { icon: GraduationCap, text: "Medicina pela Universidade Federal de Sergipe (UFS) - 2013" },
  { icon: Award, text: "Especialização em Neurologia Clínica pelo IAMSPE - São Paulo" },
  { icon: Award, text: "Subespecialização em Transtornos do Movimento" },
  { icon: Award, text: "Co-fundador da AMPLA - Saúde Integrada (2021)" },
];

const NeurologiaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-medium text-sm tracking-widest uppercase">
                Neurologia Clínica e Movimento
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 leading-tight">
                Dr. Helton Benevides
              </h1>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed max-w-lg">
                Neurologista Clínico · Especialista em Transtornos do Movimento. Dedicado ao
                diagnóstico e tratamento de doenças neurológicas com cuidado humanizado e baseado
                em evidências.
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
                  to="/fisiatria"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-medium border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-foreground"
                >
                  Ver Fisiatria
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
                    src={drHeltonFull}
                    alt="Dr. Helton Benevides - Neurologista"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border hidden md:block">
                  <p className="text-sm text-muted-foreground">Especialidade</p>
                  <p className="text-lg font-display font-bold text-foreground">Neurologia</p>
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
              <strong className="text-foreground">Dr. Helton Benevides</strong>, nasceu na cidade de Aracaju onde cresceu. Se formou em Medicina pela Universidade Federal de Sergipe (UFS) em 2013. Em 2016, resolveu completar sua formação indo para São Paulo para se especializar em Neurologia Clínica no IAMSPE. Ainda em São Paulo finalizou sua subespecialização em Transtornos do Movimento antes de retornar em 2021 para Aracaju e montar a AMPLA para unir a Neurologia Geral, os Transtornos do Movimento com a Fisiatria no acompanhamento mais completo.
            </p>
            <div className="space-y-4">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-accent" />
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
            <span className="text-accent font-medium text-sm tracking-widest uppercase">
              Fique por dentro
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
              Principais assuntos da <span className="text-gradient">Neurologia</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent/5">
        <div className="container mx-auto text-center max-w-2xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Agende sua consulta com o Dr. Helton
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

export default NeurologiaPage;

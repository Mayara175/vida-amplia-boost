import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Clock,
  MapPin,
  CreditCard,
  Users,
  Shield,
  Syringe,
  Eye,
  Phone,
  HelpCircle,
} from "lucide-react";
import Layout from "@/components/Layout";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";
const MAPS_URL =
  "https://www.google.com/maps/place/Ampla+Sa%C3%BAde+Integrada/@-10.9463753,-37.0631173,14.75z/data=!4m5!3m4!1s0x0:0x1dd51d5e21a92acb!8m2!3d-10.9449715!4d-37.0609903";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const diferenciais = [
  {
    icon: Monitor,
    title: "Telemedicina",
    subtitle: "Programação de retorno sem sair do conforto de casa",
    description:
      "A Telemedicina chegou para ficar na saúde. Sabemos que a avaliação presencial é indispensável, mas muitos casos — pela conveniência e facilidade para pacientes cadeirantes, com mobilidade reduzida ou que moram em locais distantes — associamos a telemedicina nas avaliações de exames, no controle após o início de alguma medicação e após procedimentos, com a mesma qualidade dos atendimentos presenciais.",
  },
  {
    icon: Users,
    title: "Conveniência",
    subtitle: "Acompanhamento integrado",
    description:
      "Acompanhamento no mesmo local com Neurologista e Fisiatra, com acompanhamento individualizado. Integramos as especialidades para um cuidado mais completo e eficiente.",
  },
  {
    icon: Clock,
    title: "Sem Pressa",
    subtitle: "Foco total em você",
    description:
      "Nosso foco é você. Sem a pressa de consultas rápidas. Ouvir o que você tem a nos falar e descobrir sua melhor linha de cuidado. Dedicamos o tempo necessário para entender suas necessidades.",
  },
  {
    icon: MapPin,
    title: "Conforto",
    subtitle: "Ambiente acolhedor",
    description:
      "Consultas agendadas, personalizadas, sem uma multidão de pessoas aguardando em um mesmo local. Certeza de atendimento no horário que você escolheu. Ambiente projetado para seu conforto.",
  },
];

const conceito = [
  {
    icon: Shield,
    title: "Prevenção",
    description:
      "Promover e educar tanto pacientes como cuidadores e equipe que acompanha cada indivíduo no prevenir como medida de redução de riscos e antecipação de complicações.",
  },
  {
    icon: Syringe,
    title: "Tratamento",
    description:
      "Tratamento Amplo, não apenas com medicações, mas com orientações, encaminhamentos para terapias, exercícios, procedimentos. Integração do cuidado. Tratamento medicamentoso acompanhado do tratamento não medicamentoso!",
  },
  {
    icon: Users,
    title: "Reabilitação",
    description:
      "Orientação ampla e contextualizada dos ganhos que o indivíduo poderá obter em uma abordagem multidisciplinar para recuperação, compensações e funcionalidade.",
  },
  {
    icon: Eye,
    title: "Intervenção",
    description:
      "Intervenções minimamente invasivas são super bem-vindas, sempre praticadas com indicação adequada. Toda intervenção precisa estar dentro de um contexto fisiopatológico e com os sintomas do indivíduo.",
  },
];

const faqs = [
  {
    question: "O que afinal tem na Ampla?",
    answer:
      "Equipe com conceito multi e interdisciplinar com objetivo de otimizar o cuidado e tratamento das principais enfermidades neurológicas, psicológicas, de dor e que afetem a qualidade de vida do indivíduo.",
  },
  {
    question: "O que um Fisiatra faz?",
    answer:
      "Organiza, entende e intervém nas deficiências do indivíduo, capacitando-o fisicamente. A Fisiatria é a especialidade médica focada em reabilitação.",
  },
  {
    question: "Tem retorno após as consultas?",
    answer:
      "Muitas primeiras avaliações precisam ser reavaliadas por conta de exames de investigação ou avaliação pós-procedimento. O retorno em até 30 dias é gratuito, podendo ser presencial ou por telemedicina.",
  },
  {
    question: "Emite Nota Fiscal?",
    answer:
      "Todas as consultas e procedimentos são Particulares. A Nota Fiscal é emitida para que o paciente possa solicitar reembolso e também como forma de abatimento no Imposto de Renda (IRPF).",
  },
  {
    question: "Aceita Cartão de crédito?",
    answer:
      "Já aceitamos alguns Cartões de crédito e débito. Converse com nossa equipe e descubra quais são os pacotes e linhas de cuidado que melhor se encaixam para você.",
  },
  {
    question: "Vocês tem Fisioterapia junto?",
    answer:
      "Não temos espaço (ainda) para montar uma equipe de Fisioterapia especializada, mas temos grandes parceiros que nos ajudam no acompanhamento e seguimentos de muitos dos nossos pacientes.",
  },
];

const DiferenciaisPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Por que a Vida Ampla?
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 leading-tight">
              Nossos <span className="text-gradient">Diferenciais</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              Conheça o que nos torna únicos no cuidado com a sua saúde. Priorizamos conforto,
              conveniência e excelência no atendimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais Grid */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-3xl p-8 md:p-10 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <d.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  {d.subtitle}
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-1 mb-4">
                  {d.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Converse com nossa equipe e veja como podemos te ajudar →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Venha conhecer a <span className="text-gradient">Ampla</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[clinic1, clinic2, clinic3].map((img, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={img}
                  alt={`Consultório Vida Ampla ${i + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mt-8">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/25"
            >
              <MapPin className="w-4 h-4" />
              Ver no Google Maps
            </a>
          </motion.div>
        </div>
      </section>

      {/* Nosso Conceito */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Nosso Conceito
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
              Os pilares da <span className="text-gradient">Vida Ampla</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {conceito.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.question}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border hover:border-primary/30 transition-all"
              >
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-open:bg-primary/20 transition-colors">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold flex-1">{faq.question}</span>
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 pl-20">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto text-center max-w-2xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato e agende sua consulta. Nossa equipe está pronta para receber você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all shadow-lg shadow-primary/25"
              >
                <Phone className="w-5 h-5" />
                Agendar Consulta
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-medium border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-foreground"
              >
                <MapPin className="w-5 h-5" />
                Localização
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DiferenciaisPage;

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";
const MAPS_URL =
  "https://www.google.com/maps/place/Ampla+Sa%C3%BAde+Integrada/@-10.9463753,-37.0631173,14.75z/data=!4m5!3m4!1s0x0:0x1dd51d5e21a92acb!8m2!3d-10.9449715!4d-37.0609903";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Contato</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Fale <span className="text-gradient">conosco</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Nossa equipe está à disposição para agendamento de consultas e suporte pós-consulta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="space-y-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="text-foreground font-semibold">(79) 99951-3121</p>
              </div>
            </a>

            <a
              href="mailto:atendimento@vidaampla.com.br"
              className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="text-foreground font-semibold">atendimento@vidaampla.com.br</p>
              </div>
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Endereço</p>
                <p className="text-foreground font-semibold">Horizonte Jardins Office, Sala 1520</p>
                <p className="text-muted-foreground text-sm">Av. Dr. José Machado de Souza, nº 120 - Jardins</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-3xl border border-border p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                Acompanhe nas redes
              </h3>
              <p className="text-muted-foreground mb-6">
                Conteúdos de cuidado, promoção de saúde e qualidade de vida baseados nas melhores
                evidências.
              </p>
              <p className="text-primary font-semibold text-lg mb-6">@vidaampla</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/vidaampla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/vidaampla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://br.linkedin.com/company/ampla-sa%C3%BAde-integrada"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

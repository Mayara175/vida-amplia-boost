import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Clock } from "lucide-react";

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
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium text-xs md:text-sm tracking-widest uppercase">
            Contato
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mt-2 md:mt-3 text-foreground">
            Fale <span className="text-gradient">conosco</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg mt-3 md:mt-4 max-w-xl mx-auto">
            Nossa equipe está à disposição para agendamento de consultas e suporte pós-consulta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          <motion.a
            {...fadeUp}
            transition={{ duration: 0.6 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0 p-5 md:p-8 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center sm:mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">WhatsApp</p>
              <p className="text-foreground font-semibold text-sm md:text-base">(79) 99951-3121</p>
            </div>
          </motion.a>

          <motion.a
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="mailto:atendimento@vidaampla.com.br"
            className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0 p-5 md:p-8 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center sm:mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Mail className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">E-mail</p>
              <p className="text-foreground font-semibold text-xs md:text-sm truncate">atendimento@vidaampla.com.br</p>
            </div>
          </motion.a>

          <motion.a
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0 p-5 md:p-8 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center sm:mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">Endereço</p>
              <p className="text-foreground font-semibold text-xs md:text-sm">Horizonte Jardins Office</p>
              <p className="text-muted-foreground text-[10px] md:text-xs mt-0.5 md:mt-1">Sala 1520 · Em frente ao Shopping Jardins</p>
            </div>
          </motion.a>
        </div>

        {/* Map + Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-8 md:mt-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl md:rounded-2xl overflow-hidden border border-border h-56 md:h-72"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.123456789!2d-37.0631173!3d-10.9449715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1dd51d5e21a92acb!2sAmpla%20Sa%C3%BAde%20Integrada!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Vida Ampla"
            />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-xl md:rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-between gap-6"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2 md:mb-3">
                Acompanhe nas redes
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                Conteúdos de cuidado, promoção de saúde e qualidade de vida baseados nas melhores
                evidências.
              </p>
              <p className="text-primary font-semibold text-base md:text-lg mb-4 md:mb-6">@vidaampla</p>
            </div>

            <div>
              <div className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm mb-4">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Av. Dr. José Machado de Souza, nº 120 · Jardins · Aracaju/SE</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://www.instagram.com/vidaampla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </a>
                <a
                  href="https://www.facebook.com/vidaampla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </a>
                <a
                  href="https://br.linkedin.com/company/ampla-sa%C3%BAde-integrada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

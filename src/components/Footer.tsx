import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import logoAmpla from "@/assets/logo-ampla.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10 md:py-14 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <img src={logoAmpla} alt="Vida Ampla" className="h-7 md:h-8 w-auto brightness-200" />
              <span className="text-lg md:text-xl font-display font-bold text-primary">Vida Ampla</span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed" style={{ color: "hsl(0 0% 65%)" }}>
              Saúde Integrada. Neurologia, Fisiatria e Acupuntura em Aracaju.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-primary mb-3 md:mb-4 text-sm md:text-base">Páginas</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {[
                { label: "Início", to: "/" },
                { label: "Fisiatria", to: "/fisiatria" },
                { label: "Neurologia", to: "/neurologia" },
                { label: "Diferenciais", to: "/diferenciais" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs md:text-sm hover:text-primary transition-colors"
                    style={{ color: "hsl(0 0% 65%)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm" style={{ color: "hsl(0 0% 65%)" }}>
              <li>(79) 99951-3121</li>
              <li className="break-all">atendimento@vidaampla.com.br</li>
              <li>Horizonte Jardins Office, Sala 1520</li>
              <li>Av. Dr. José Machado de Souza, nº 120</li>
              <li>Jardins · Aracaju/SE</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-bold text-primary mb-3 md:mb-4 text-sm md:text-base">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/vidaampla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/vidaampla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://br.linkedin.com/company/ampla-sa%C3%BAde-integrada"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-5 md:pt-6 text-center">
          <p className="text-[10px] md:text-xs" style={{ color: "hsl(0 0% 50%)" }}>
            © {new Date().getFullYear()} Vida Ampla — Saúde Integrada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

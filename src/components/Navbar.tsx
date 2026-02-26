import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoAmpla from "@/assets/logo-ampla.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Fisiatria", href: "/fisiatria" },
  { label: "Neurologia", href: "/neurologia" },
  { label: "Diferenciais", href: "/diferenciais" },
  { label: "Contato", href: "/#contato" },
];

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const renderLink = (link: { label: string; href: string }, className: string) => {
    if (link.href.startsWith("/#")) {
      return (
        <a
          key={link.href}
          href={link.href}
          className={className}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className={`${className} ${isActive(link.href) ? "text-primary" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAmpla} alt="Vida Ampla" className="h-10 w-auto" />
          <span className="text-xl font-display font-bold text-gradient">Vida Ampla</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            renderLink(
              link,
              "text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            )
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors shadow-lg shadow-primary/25"
          >
            <Phone className="w-4 h-4" />
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container mx-auto py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                renderLink(
                  link,
                  "text-foreground/80 hover:text-primary transition-colors py-2"
                )
              )}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

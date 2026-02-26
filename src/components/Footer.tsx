const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-display font-bold text-primary">Vida Ampla</span>
        <p className="text-sm" style={{ color: "hsl(0 0% 70%)" }}>
          © {new Date().getFullYear()} Vida Ampla — Saúde Integrada. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

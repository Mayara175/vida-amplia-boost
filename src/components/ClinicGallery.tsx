import { motion } from "framer-motion";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";

const images = [
  { src: clinic1, alt: "Consultório Vida Ampla - Recepção" },
  { src: clinic2, alt: "Consultório Vida Ampla - Sala de atendimento" },
  { src: clinic3, alt: "Consultório Vida Ampla - Estrutura" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ClinicGallery = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-8 md:mb-12">
          <span className="text-primary font-medium text-xs md:text-sm tracking-widest uppercase">
            Nossa Estrutura
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 md:mt-3 text-foreground">
            Conheça a <span className="text-gradient">Vida Ampla</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 sm:h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;

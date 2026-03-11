import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/6LMQPUVOXOCFD1";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[hsl(142,70%,45%)] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </motion.a>
  );
};

export default WhatsAppButton;

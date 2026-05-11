import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/22670757713"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter via WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition hover:scale-110"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

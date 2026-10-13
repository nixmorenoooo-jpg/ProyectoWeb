import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573046311009"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
      aria-label="Escribir por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;
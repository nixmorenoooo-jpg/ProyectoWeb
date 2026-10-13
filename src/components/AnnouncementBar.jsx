import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa6";

function AnnouncementBar() {
  const messages = [
    "Envíos gratis en compras superiores a $150.000 COP",
    "Pago contraentrega en toda Colombia",
    "Compra hoy y paga después con ADDI",
  ];

  // Se repiten dos veces para que el letrero parezca infinito
  const loop = [...messages, ...messages];

  return (
    <div className="bg-black text-white text-sm flex items-center">
      <div className="flex-1 overflow-hidden py-2">
        <div className="flex w-max animate-marquee">
          {loop.map((msg, index) => (
            <p key={index} className="px-12 whitespace-nowrap">
              {msg}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 px-4">
        <FaInstagram />
        <FaTiktok />
        <FaFacebook />
      </div>
    </div>
  );
}

export default AnnouncementBar;
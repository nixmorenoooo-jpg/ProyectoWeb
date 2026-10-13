import { useState } from "react";
import { MapPin, Mail, Smartphone, Clock, ChevronRight } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaCcAmex,
  FaCcDinersClub,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa6";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSubscribed(true);
    setEmail("");
  };

  const helpLinks = [
    "Buscar...",
    "Términos del servicio",
    "Política de reembolso",
    "Tarjeta de Regalo",
    "Compras al por mayor",
  ];

  const contact = [
    { icon: MapPin, text: "Calle 48B # 77B-22 - Estadio" },
    { icon: Mail, text: "sogno.sas87@gmail.com" },
    { icon: Smartphone, text: "+57 304 6311009" },
    { icon: Clock, text: "10:30am - 6:00pm, Lunes - Viernes" },
  ];

  const payments = [FaCcAmex, FaCcDinersClub, FaCcMastercard, FaCcVisa];

  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-8">
      <div className="w-[90%] md:w-[75%] max-w-[1440px] mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
          {/* Novedades */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Novedades</h3>
            <p className="text-base mb-5 max-w-md">
              Suscríbete para recibir promociones y descuentos todo el año. Solo
              deja tu email.
            </p>

            {subscribed ? (
              <p className="text-base text-green-600">
                ¡Gracias por suscribirte! 🎉
              </p>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex max-w-md bg-gray-100 border border-gray-200 rounded"
                >
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm bg-transparent outline-none"
                  />
                  <button type="submit" className="px-4" aria-label="Suscribirse">
                    <ChevronRight size={18} />
                  </button>
                </form>
                <p className="text-sm mt-4">
                  Al suscribirte aceptas nuestros{" "}
                  <a href="#" className="underline">Términos del servicio.</a>
                </p>
              </>
            )}
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Ayuda</h3>
            <ul className="space-y-4 text-base">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Contacto</h3>
            <ul className="space-y-4 text-base">
              {contact.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <item.icon size={18} />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Redes */}
        <div className="flex gap-5 text-xl mt-16">
          <a href="https://www.facebook.com/Sogno.85" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://www.instagram.com/sogno.87/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@sogno087" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
        </div>

        {/* Copyright y pagos */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6 text-sm">
          <p>© 2026 Sogno87 - Tienda de Ropa Online | Moda Urbana | Colombia.</p>
          <ul className="flex gap-2 text-3xl text-gray-700">
            {payments.map((Icon, index) => (
              <li key={index}><Icon /></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
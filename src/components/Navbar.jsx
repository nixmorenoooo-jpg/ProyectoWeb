import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "AFFIRMATION", dropdown: false },
    { label: "HOMBRE", dropdown: true },
    { label: "MUJER", dropdown: true },
    { label: "SALE", dropdown: false },
    { label: "COLECCIONES", dropdown: true },
    { label: "PACKS", dropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="grid grid-cols-3 items-center px-6 h-16">
        <div>
          <img
            src="/images/Logo.webp"
            alt="Sogno87"
            className={`h-6 transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <ul className="hidden md:flex justify-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a href="#" className="flex items-center gap-1 hover:underline">
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-5 col-start-3">
          <Search size={20} />
          <User size={20} />
          <ShoppingBag size={20} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
function Hero() {
  const categories = [
    "Camisetas",
    "Sets",
    "Tops y Bodies",
    "Pantalones/Jeans",
    "Buzos y Chaquetas",
    "Camisillas",
    "Sudaderas",
  ];

  const sides = [
    { label: "MUJER", image: "/images/bannerMujer.webp", position: "left-12" },
    { label: "HOMBRE", image: "/images/bannerHombre.webp", position: "right-12" },
  ];

  return (
    <section>
      {/* Franja blanca de categorías */}
      <ul className="hidden md:flex justify-between px-10 py-3 text-xs bg-white border-b border-gray-200">
        {categories.map((category) => (
          <li key={category}>
            <a href="#" className="hover:underline">{category}</a>
          </li>
        ))}
      </ul>

      {/* Banner */}
      <div className="relative">
        <div className="grid grid-cols-2 h-[420px] md:h-[calc(100vh-150px)] overflow-hidden">
          {sides.map((side) => (
            <div key={side.label} className="relative overflow-hidden">
              <img
                src={side.image}
                alt={`Affirmation ${side.label}`}
                className="w-full h-full object-cover"
              />
              <a
                href="#"
                className={`absolute bottom-10 ${side.position} text-white text-xl tracking-wide hover:underline`}
              >
                {side.label} →
              </a>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <img src="/images/Logo.webp" alt="Sogno87" className="w-40 md:w-80" />
          <p className="text-white tracking-[0.3em] mt-2">AFFIRMATION</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
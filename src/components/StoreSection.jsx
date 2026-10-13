function StoreSection() {
  const address = "Cl. 48B #77B-22, Laureles - Estadio, Medellín, Antioquia";
  const mapsLink = "https://maps.app.goo.gl/2ppgGeEoCnhZEKe89";
  const mapEmbed =
    "https://www.google.com/maps?q=Cl.+48B+%2377B-22,+Laureles+-+Estadio,+Medell%C3%ADn,+Antioquia,+Colombia&z=16&output=embed";

  return (
    <section className="w-[90%] md:w-[75%] max-w-[1440px] mx-auto py-16 grid grid-cols-1 md:grid-cols-[2.1fr_1fr] gap-5">
      {/* Foto con texto */}
      <div className="relative min-h-[420px] md:h-[460px] rounded-2xl overflow-hidden">
        <img
          src="/images/tienda.webp"
          alt="Tienda Sogno87 Medellín Estadio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 p-8 text-white">
          <p className="text-[10px] tracking-widest mb-2">NUESTRA TIENDA</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Tienda Medellín - Estadio
          </h2>
          <p className="mt-4 text-sm">
            Sogno 87 | Tienda de Ropa Urbana | Streetwear
          </p>
          <p className="text-sm">{address}</p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-white text-black text-xs tracking-widest px-6 py-3 rounded-md hover:bg-gray-200"
          >
            VER EN MAPS
          </a>
        </div>
      </div>

      {/* Mapa */}
      <div className="rounded-2xl overflow-hidden min-h-[300px] md:h-[460px]">
        <iframe
          title="Mapa de la tienda Sogno87"
          src={mapEmbed}
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default StoreSection;
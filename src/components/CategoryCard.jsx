function CategoryCard({ category }) {
  return (
    <a href="#" className="group relative block aspect-[3/4] overflow-hidden">
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-cover"
      />

      {/* Capa oscura para que el texto blanco se lea */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-3 text-white">
        <h3 className="text-xl md:text-2xl font-bold uppercase text-center px-2">
          {category.title}
        </h3>
        <span className="border border-white px-8 py-2 text-xs tracking-wide group-hover:bg-white group-hover:text-black transition-colors">
          VER TODO
        </span>
      </div>
    </a>
  );
}

export default CategoryCard;
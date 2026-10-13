import { useState } from "react";
import { Eye } from "lucide-react";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  const currentImage =
    hovered && product.hoverImage ? product.hoverImage : product.image;

  return (
    <article>
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <a href="#" className="block">
          <img
            src={currentImage}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover rounded-sm"
          />
        </a>
        <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow">
          <Eye size={16} />
        </button>
      </div>

      <h3 className="mt-3 text-sm">{product.name}</h3>
      <p className="text-sm">${product.price.toLocaleString("es-CO")} COP</p>

      <div className="flex gap-2 mt-2">
        {product.sizes.map((size) => (
          <button
            key={size}
            className="w-8 h-8 rounded-full border border-gray-300 text-xs hover:border-black"
          >
            {size}
          </button>
        ))}
      </div>
    </article>
  );
}

export default ProductCard;
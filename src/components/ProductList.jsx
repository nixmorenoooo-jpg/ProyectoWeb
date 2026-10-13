import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList() {
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const move = (direction) => {
    const slider = sliderRef.current;
    const step = slider.firstElementChild.offsetWidth + 16;
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;

    if (direction === 1 && atEnd) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: direction * step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => move(1), 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="w-[90%] max-w-[1800px] mx-auto py-16">
      <p className="text-xs tracking-widest text-gray-500">AFFIRMATION</p>

      <div className="flex items-end justify-between mb-8">
        <h2 className="text-4xl md:text-5xl font-semibold">ALL NEW FOR AFFIRMATION</h2>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm underline">
            Ver toda la colección →
          </a>
          <button
            onClick={() => move(-1)}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => move(1)}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-[70%] md:w-[calc(25%-12px)]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
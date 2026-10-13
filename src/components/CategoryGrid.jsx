import CategoryCard from "./CategoryCard";
import categories from "../data/categories";

function CategoryGrid() {
  return (
    <section className="w-[90%] max-w-[1800px] mx-auto py-16">
      <p className="text-xs tracking-widest text-gray-500">EXPLORE OUR WORLD</p>
      <h2 className="text-4xl md:text-5xl font-semibold mb-8">
        AFFIRMATION CATEGORIES
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
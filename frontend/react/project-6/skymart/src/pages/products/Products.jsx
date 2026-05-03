import { NavLink } from "react-router-dom";
import { Search, ChevronDown, Star, ShoppingCart } from "lucide-react";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">All Products</h1>
        <p className="text-white/40 text-sm">50 products found</p>
      </div>

      {/* FILTER BAR */}
      <div className="bg-[#111] border border-white/10 rounded-2xl p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* SEARCH */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 h-10 bg-transparent border border-white/10 rounded-xl outline-none focus:border-indigo-500"
            />
          </div>

          {/* CATEGORY FILTER */}
          <div className="relative">
            <select className="h-10 px-3 pr-8 bg-transparent border border-white/10 rounded-xl">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
          </div>

          {/* SORT */}
          <div className="relative">
            <select className="h-10 px-3 pr-8 bg-transparent border border-white/10 rounded-xl">
              <option>Featured</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
          </div>
        </div>

        {/*
          👉 ADD FUNCTIONALITY HERE
          - search state
          - category filter
          - sorting logic

          WHY:
          This controls product rendering dynamically
        */}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <NavLink
            key={i}
            to={`/products/${item}`}
            className="flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden group hover:border-[1px] hover:border-indigo-300"
          >
            {/* IMAGE */}
            <div className="relative aspect-square bg-white">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                className="w-full h-full object-contain p-6 group-hover:scale-110 transition"
              />

              <span className="absolute top-2 left-2 text-xs bg-black/60 px-2 py-1 rounded">
                electronics
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="text-white/30 text-[10px] uppercase">electronics</p>

              <h3 className="text-sm text-white/80 line-clamp-2 flex-1">
                Product Title Here
              </h3>

              {/* RATING */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="text-[10px] text-white/30">(120)</span>
              </div>

              {/* PRICE + BUTTON */}
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <span className="font-bold text-indigo-400">$99.99</span>

                <button className="flex items-center gap-1 px-3 py-1 text-xs bg-indigo-500 rounded-lg hover:bg-indigo-600">
                  <ShoppingCart className="w-3 h-3" />
                  Add
                </button>
              </div>
            </div>

            {/*
              👉 ADD FUNCTIONALITY HERE
              - Add to cart logic
              - Navigate to product detail

              WHY:
              Each card is interactive component
            */}
          </NavLink>
        ))}
      </div>

      {/*
        👉 ADD FUNCTIONALITY HERE
        - Fetch products from API
        - Map real data instead of dummy array

        WHY:
        This is currently static UI
      */}
    </div>
  );
};

export default Products;

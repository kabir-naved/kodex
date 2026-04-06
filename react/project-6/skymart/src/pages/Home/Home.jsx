import { NavLink } from "react-router-dom";
import { ArrowRight, Package, TrendingUp, Star, Tag } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-6">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-8 sm:p-12 mb-10">
        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-8">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-indigo-400 text-sm uppercase mb-3">
              Good morning 👋
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Welcome back,
              <br />
              <span className="text-indigo-500">Naved!</span>
            </h1>

            <p className="text-white/40 max-w-md">
              Discover today's picks — curated products.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <NavLink
                to="/products"
                className="bg-indigo-500 px-4 py-2 rounded-xl flex items-center gap-2"
              >
                Shop Now <ArrowRight size={16} />
              </NavLink>

              <NavLink
                to="/products"
                className="border border-white/20 px-4 py-2 rounded-xl"
              >
                View All
              </NavLink>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="flex flex-col gap-3">
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl px-6 py-4 text-center">
              <p className="text-3xl font-bold text-indigo-500">20+</p>
              <p className="text-white/40 text-xs">Products Available</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-xl font-bold">Free</p>
              <p className="text-white/40 text-xs">Delivery ₹999+</p>
            </div>
          </div>
        </div>

        {/*
          👉 ADD FUNCTIONALITY HERE
          - Fetch user name dynamically
          - Fetch product count from API

          WHY:
          Makes hero dynamic instead of static UI
        */}
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {/* CARD */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex gap-4">
          <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center">
            <Package />
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-white/50 text-sm">Cart Items</p>
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex gap-4">
          <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
            <TrendingUp />
          </div>
          <div>
            <p className="text-2xl font-bold">$0.00</p>
            <p className="text-white/50 text-sm">Cart Value</p>
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex gap-4">
          <div className="w-12 h-12 bg-yellow-500/10 text-yellow-400 rounded-xl flex items-center justify-center">
            <Star />
          </div>
          <div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-white/50 text-sm">Top Products</p>
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex gap-4">
          <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center">
            <Tag />
          </div>
          <div>
            <p className="text-2xl font-bold">6</p>
            <p className="text-white/50 text-sm">Categories</p>
          </div>
        </div>

        {/*
          👉 ADD FUNCTIONALITY HERE
          - Cart count from context
          - Cart total price
          - Dynamic stats from API

          WHY:
          These are real-time dashboard values
        */}
      </div>

      {/* CATEGORY SECTION */}
      <section>
        <div className="flex justify-between mb-5">
          <h2 className="text-xl font-bold">Shop by Category</h2>

          <NavLink
            to="/products"
            className="text-indigo-400 flex items-center gap-1"
          >
            View All <ArrowRight size={14} />
          </NavLink>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "electronics",
            "clothing",
            "furniture",
            "home",
            "sports",
            "accessories",
          ].map((cat) => (
            <NavLink
              key={cat}
              to={`/products?category=${cat}`}
              className="bg-white text-black rounded-2xl p-5 text-center hover:-translate-y-1 transition"
            >
              <div className="text-3xl mb-2">📦</div>
              <p className="font-semibold capitalize">{cat}</p>
              <p className="text-xs text-gray-500">items</p>
            </NavLink>
          ))}
        </div>

        {/*
          👉 ADD FUNCTIONALITY HERE
          - Dynamic category list from API
          - Product count per category

          WHY:
          Avoid hardcoding categories
        */}
      </section>
    </div>
  );
};

export default Home;

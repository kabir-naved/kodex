import { NavLink } from "react-router-dom";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-10 max-w-7xl mx-auto">
      {/* HERO */}
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-bounce">
          <Zap className="w-7 h-7 text-black fill-black" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-5">
          About <span className="text-indigo-500">SkyMart</span>
        </h1>

        <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>

        {/* 👉 Replace static text with API data (CMS)
            WHY: Editable content without redeploy */}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {[
          { icon: Package, value: "20K+", label: "Products" },
          { icon: Users, value: "50K+", label: "Customers" },
          { icon: Star, value: "4.9", label: "Rating" },
          { icon: Truck, value: "99%", label: "Delivery" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#111] border border-white/10 rounded-2xl p-5 text-center"
          >
            <item.icon className="mx-auto mb-2 text-indigo-400" />
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-white/30 text-xs mt-1">{item.label}</p>
          </div>
        ))}

        {/* 👉 Replace with dynamic stats from backend
            WHY: Real-time numbers */}
      </div>

      {/* STORY */}
      <div className="bg-[#111] border border-white/10 rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>

        <div className="space-y-4 text-white/50 text-sm leading-relaxed">
          <p>
            SkyMart started in 2022 as a small side project — two engineers
            tired of slow e-commerce.
          </p>
          <p>
            Today we serve 50,000+ customers across categories like electronics
            and fashion.
          </p>
          <p>We focus on speed, transparency, and great experience.</p>
        </div>

        {/* 👉 Fetch story content from API
            WHY: scalable content management */}
      </div>

      {/* VALUES */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What We Stand For
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: ShieldCheck,
              title: "Trust",
              desc: "Verified products only",
            },
            {
              icon: Truck,
              title: "Speed",
              desc: "Fast delivery",
            },
            {
              icon: HeartHandshake,
              title: "Community",
              desc: "User-driven",
            },
            {
              icon: Star,
              title: "Quality",
              desc: "Best curated products",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 flex gap-4"
            >
              <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                <item.icon className="text-indigo-400" />
              </div>

              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* 👉 Can come from API or config
              WHY: reusable values system */}
        </div>
      </section>

      {/* TEAM */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Meet the Team</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: "Aryan", role: "CEO", color: "bg-indigo-500" },
            { name: "Priya", role: "Product", color: "bg-blue-500" },
            { name: "Rohan", role: "Engineer", color: "bg-purple-500" },
            { name: "Sneha", role: "Design", color: "bg-rose-500" },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-2xl p-5 text-center"
            >
              <div
                className={`w-12 h-12 ${m.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
              >
                {m.name[0]}
              </div>
              <p className="text-sm">{m.name}</p>
              <p className="text-white/30 text-xs">{m.role}</p>
            </div>
          ))}

          {/* 👉 Replace with real team data (API)
              WHY: scalable team management */}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to shop?</h2>

        <p className="text-white/40 text-sm mb-6">
          Explore thousands of products at unbeatable prices.
        </p>

        <NavLink
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 rounded-xl font-bold hover:bg-indigo-600"
        >
          Browse Products <ArrowRight size={18} />
        </NavLink>

        {/* 👉 Add analytics tracking here (click tracking)
            WHY: measure conversion */}
      </div>
    </div>
  );
};

export default About;

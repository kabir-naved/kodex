import { Zap } from "lucide-react";

const Greet = () => {

    const detail = [
      { value: "20K+", label: "Products" },
      { value: "50K+", label: "Users" },
      { value: "4.9★", label: "Rating" },
    ];
  return (
    <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white/10 p-12 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Logo */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center">
          <Zap className="text-black fill-black w-5 h-5" />
        </div>
        <span className="font-bold text-2xl">
          Sky<span className="text-indigo-500">Mart</span>
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <p className="text-indigo-400 text-sm font-medium mb-4 tracking-widest uppercase">
          Welcome back
        </p>

        <h1 className="font-bold text-5xl leading-tight mb-6">
          Shop the future. <br />
          <span className="text-indigo-500">Today.</span>
        </h1>

        <p className="text-white/40 text-base max-w-sm leading-relaxed">
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {detail.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
            >
              <p className="font-bold text-xl text-indigo-400">{item.value}</p>
              <p className="text-white/40 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Greet;

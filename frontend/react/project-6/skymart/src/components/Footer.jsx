const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 text-center mt-20 text-white">
      {/* BRAND */}
      <p className="text-xl font-bold text-indigo-400 mb-1">SkyMart</p>

      {/* COPYRIGHT */}
      <p className="text-white/30 text-xs">
        © 2025 SkyMart • Built with React + Redux + TanStack Query
      </p>

      {/*
        👉 OPTIONAL FUNCTIONALITY

        - Make "SkyMart" clickable (navigate to home)
        - Add dynamic year:
            new Date().getFullYear()

        WHY:
        Keeps footer reusable & dynamic
      */}
    </footer>
  );
};

export default Footer;

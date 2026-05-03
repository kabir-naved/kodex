function Navbar({ setShowForm, showForm }) {
  return (
    <nav className="w-full shadow-sm px-4 md:px-16 lg:px-32 py-3 navbar">
      {/* Logo */}
      <div>
        <h3 className="text-(--primary-color) font-bold text-2xl md:text-3xl">
          SOCIAL
        </h3>
      </div>

      {/* Search */}
      <div className="hidden md:block w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 border border-gray-300 rounded-xl outline-none 
          focus:border-[#E8EAED] focus:ring-2 focus:ring-[#6200EE]
          transition-all duration-300 bg-[#F8FAFC]"
        />
      </div>

      {/* Button */}
      <div>
        <button
          className="cursor-pointer px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 md:gap-3 text-white bg-(--primary-color) rounded-md shadow-sm hover:scale-101 hover:bg-[#6a00ff] transition-all duration-300 ease-in-out"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {/* toggle forms  */}
          {showForm ? (
            <span className="font-medium hidden sm:block">SHOW POST</span>
          ) : (
            <>
              <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
                <span className="text-lg leading-none">+</span>
              </div>
              <span className="font-medium hidden sm:block">CREATE POST</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

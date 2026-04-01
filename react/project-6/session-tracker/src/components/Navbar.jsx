import { Search, Bell, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-bottom">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-4 w-full mx-auto">
        <div className="flex items-center gap-4 sm:gap-8">
          <span className="font-headline font-black text-xl sm:text-2xl tracking-tight text-primary block sm:hidden">
            Tracker
          </span>
          <div className="relative hidden sm:block">
            {/* SEARCH */}
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-outline "
              size={18}
            />
            <input
              className="border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 outline-blue-300 
              transition-all bg-blue-100 transition-colors hover:bg-blue-200 duration-300"
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <button className="text-on-surface-variant hover:text-primary transition-colors ">
            {/* BELL */}
            <Bell size={20} className="hover:text-blue-600 duration-150" />
          </button>
          <button className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors">
            {/* SETTING */}
            <Settings size={20} className="hover:text-blue-600 duration-150" />
          </button>
          <div className="h-8 w-8 sm:h-10 sm:w-10  rounded-full overflow-hidden border-2 border-surface-container-highest shrink-0">
            <img
              alt="User profile"
              src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

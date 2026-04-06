import { NavLink, useNavigate } from "react-router-dom";
import { Zap, ShoppingCart, LogOut, Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* LOGO */}
        <NavLink to="/home" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center">
            <Zap className="text-black fill-black w-4 h-4" />
          </div>
          <span className="font-bold text-lg">
            Sky<span className="text-indigo-500">Mart</span>
          </span>
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-indigo-400" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/home/products"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-indigo-400" : ""}`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/home/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-indigo-400" : ""}`
            }
          >
            About
          </NavLink>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 shrink-0">
          {/* USER PROFILE */}
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
            <div className="w-6 h-6 bg-indigo-500 rounded-lg flex items-center justify-center text-black text-xs font-bold">
              N
            </div>
            <span className="text-sm text-white/70 truncate">Naved Kabir</span>
          </div>

          {/* CART BUTTON */}
          <button className="relative p-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all">
            <ShoppingCart className="w-5 h-5" />
          </button>

          {/* 
            👉 ADD FUNCTIONALITY HERE
            - Open cart sidebar / modal
            - Navigate to cart page
            
            WHY:
            Cart is global feature → controlled from navbar
          */}

          {/* LOGOUT BUTTON */}
          <button
            title="Logout"
            className="p-2.5 bg-white/10 hover:bg-red-500/20 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400"
          >
            <LogOut className="w-4 h-4" />
          </button>

          {/*
            👉 ADD FUNCTIONALITY HERE
            - Clear auth context
            - Remove user from localStorage
            - Redirect to login
            
            WHY:
            Auth logic should be triggered globally
          */}

          {/* MOBILE MENU */}
          <button className="md:hidden p-2.5 bg-white/10 border border-white/10 rounded-xl">
            <Menu className="w-5 h-5" />
          </button>

          {/*
            👉 ADD FUNCTIONALITY HERE
            - Toggle mobile sidebar/menu
            
            WHY:
            Mobile navigation needs separate UI state
          */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

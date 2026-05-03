import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Library,
  Timer,
  Settings,
  PlusCircle,
  HelpCircle,
  LogOut,
} from "lucide-react";

const SideBar = () => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { id: "library", label: "Library", icon: Library, path: "/library" },
    { id: "sessions", label: "Study", icon: Timer, path: "/study" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <>
      <div className="pt-8 flex bg-surface-container-low flex-col">
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-center lg:justify-start gap-4 mb-2 px-2 py-2 rounded-lg transition-all duration-150
        ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-200"}`
              }
            >
              <item.icon size={18} />
              <span className="hidden lg:block">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto w-full">
          <div className="flex flex-col">
            {/* Help */}
            <button className="mb-4 py-2 px-2 flex items-center justify-center lg:justify-start gap-4 rounded-lg hover:bg-blue-200 transition-all duration-150 w-full">
              <HelpCircle size={18} />
              <span className="hidden lg:inline">Help</span>
            </button>

            {/* Logout */}
            <button className=" hover:bg-red-400 px-5 py-3 flex items-center justify-center lg:justify-start gap-4 rounded-lg bg-gray-200 transition-all duration-150 w-fit mt-2">
              <LogOut size={18} />
              <span className="hidden lg:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

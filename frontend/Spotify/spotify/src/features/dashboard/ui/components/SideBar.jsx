import React from "react";
import { Library, Plus } from "lucide-react";

function Sidebar({ collapsed, setCollapsed }) {

  return (
    <div
      className={` text-white transition-all duration-300 rounded-lg p-2 ${
        collapsed ? "w-auto" : "w-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 text-sm font-semibold hover:text-gray-300"
        >
          <Library size={20} />
          {!collapsed && <span>Your Library</span>}
        </button>

        {!collapsed && (
          <button className="p-1 hover:bg-[#1f1f1f] rounded flex gap-2 items-center">
            <Plus size={18} />
            <span>Create</span>
          </button>
        )}
      </div>

      {/* Content */}
      {!collapsed && (
        <div className="px-3 space-y-4">
          {/* Card 1 */}
          <div className="bg-[#1f1f1f] p-3 rounded-lg">
            <h3 className="font-semibold text-sm">
              Create your first playlist
            </h3>
            <p className="text-xs text-gray-400">It's easy, we'll help you</p>
            <button className="mt-2 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
              Create playlist
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1f1f1f] p-2 rounded-lg">
            <h3 className="font-semibold text-sm">Let's find some podcasts</h3>
            <p className="text-xs text-gray-400">We'll keep you updated</p>
            <button className="mt-2 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
              Browse podcasts
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

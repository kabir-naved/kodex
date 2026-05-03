import React from "react";
import { useSelector } from "react-redux";

function GlobalError() {
    const {error} = useSelector((store) => store.error)
    if(!error) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md mx-4 bg-[#1f1f1f] border border-green-500/30 rounded-2xl shadow-2xl p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-green-400">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="text-sm text-zinc-400 mt-2">
          An unexpected error occurred. Please try again later.
        </p>

        {/* Button (UI only) */}
        <button className="mt-6 w-full bg-green-500/10 border border-green-500/40 text-green-400 py-2 rounded-xl hover:bg-green-500/20 transition">
          Try Again
        </button>
      </div>
    </div>
  );
}

export default GlobalError;

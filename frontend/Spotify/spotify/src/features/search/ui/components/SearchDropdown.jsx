export default function SearchDropdown({ searchedSong }) {
  return (
    <div
      className={`absolute top-full left-0 w-full mt-2 
        bg-[#1f1f1f] border border-zinc-800 
        rounded-2xl shadow-xl 
        max-h-60 overflow-y-auto z-50 
        animate-in fade-in zoom-in-95 duration-150
        scrollbar-thin scrollbar-thumb-zinc-700 no-scrollbar`}
    >
      <div className="py-1">
        {searchedSong?.length > 0 ? (
          searchedSong.map((elem) => (
            <div
              key={elem.url}
              className="flex items-center gap-3 px-4 py-2.5 
                cursor-pointer transition
                hover:bg-[#2a2a2a] active:scale-[0.98]"
            >
              <img
                src={elem.thumbnail}
                alt={elem.title}
                className="w-10 h-10 rounded-md object-cover"
              />

              <div className="flex flex-col overflow-hidden">
                <span className="text-sm text-white truncate">
                  {elem.title}
                </span>
                <span className="text-xs text-zinc-400 truncate">
                  {elem.artist}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="px-4 py-3 text-sm text-zinc-400">
            No results found
          </div>
        )}
      </div>
    </div>
  );
}

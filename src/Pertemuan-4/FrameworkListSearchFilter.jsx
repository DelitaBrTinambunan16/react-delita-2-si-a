import { useState, useMemo } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklarasi state **/
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");


  /** Logika Tag Unik untuk Dropdown **/
  const allTags = useMemo(() => {
    const tags = new Set();
    frameworkData.forEach((item) => item.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  /** Logika Search & Filter **/
  const filteredFrameworks = frameworkData.filter((framework) => {
    const _searchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);
      framework.details.developer.toLocaleLowerCase().includes(_searchTerm)

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-[#fff5f7] p-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black text-pink-500 mb-4 tracking-tight drop-shadow-sm">
            🌸 Pinky Frameworks 🌸
          </h1>
          <p className="text-pink-400 font-medium text-lg">
            Temukan framework impianmu dengan sentuhan warna yang lembut.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-center">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Cari framework..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 bg-white border-2 border-pink-100 rounded-2xl shadow-sm 
                         focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none transition-all
                         placeholder:text-pink-200"
            />
            <span className="absolute left-4 top-4 text-xl">🔍</span>
          </div>

          <div className="relative w-full md:w-1/4">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full p-4 bg-white border-2 border-pink-100 rounded-2xl shadow-sm 
                         focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none 
                         transition-all cursor-pointer appearance-none text-pink-600 font-semibold"
            >
              <option value="">Semua Kategori</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            <span className="absolute right-4 top-5 pointer-events-none text-pink-300 text-xs">▼</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFrameworks.length > 0 ? (
            filteredFrameworks.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white border border-pink-50 p-8 rounded-[2.5rem] shadow-sm 
                           hover:shadow-2xl hover:shadow-pink-200/50 hover:-translate-y-3 
                           transition-all duration-500 ease-out flex flex-col overflow-hidden"
              >
                {/* Decorative Soft Pink Bubble */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink-50 rounded-full group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-gray-800 group-hover:text-pink-500 transition-colors duration-300">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Developer Info */}
                <div className="mt-auto pt-6 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs italic font-bold text-pink-500">
                      {item.details.developer.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[10px] text-pink-300 uppercase tracking-widest font-bold leading-none">Creator</p>
                      <p className="text-sm font-bold text-gray-700">{item.details.developer}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 px-4 bg-pink-500 text-white font-black rounded-2xl
                               shadow-lg shadow-pink-200 hover:bg-pink-600 hover:shadow-pink-300 
                               active:scale-95 transition-all duration-300 text-xs uppercase tracking-widest"
                  >
                    Kunjungi Situs →
                  </a>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white border border-pink-100 text-pink-400 px-3 py-1 text-[9px] font-black uppercase rounded-full shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-pink-100">
              <p className="text-pink-300 text-xl font-bold italic">Oops! Framework tidak ditemukan... 🌸</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
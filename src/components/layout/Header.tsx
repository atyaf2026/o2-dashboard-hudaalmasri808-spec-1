import React from 'react';

export function Header() {
  return (
    <header className="h-20 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <div className="w-full h-11 bg-zinc-100 rounded-lg flex items-center px-4 text-zinc-500 text-sm border border-transparent focus-within:border-indigo-500 focus-within:bg-white transition-all">
            <span className="mr-2">🔍</span>
            header content (search analytics...)
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="cursor-pointer hover:text-zinc-600">🔔</span>
          <span className="cursor-pointer hover:text-zinc-600">❓</span>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <span>+</span> Add
        </button>
      </div>
    </header>
  );
}

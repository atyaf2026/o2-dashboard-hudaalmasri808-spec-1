import React from 'react';

export function Sidebar() {
  return (
    <aside className="w-72 border-r bg-white flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-6 h-20 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">O2</div>
        <h2 className="font-bold text-xl tracking-tight text-zinc-900">O2 Dashboard</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <div className="text-zinc-500 font-medium px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg">side bar content (active)</div>
        <div className="text-zinc-500 font-medium px-4 py-2 hover:bg-zinc-50 rounded-lg">side bar content</div>
        <div className="text-zinc-500 font-medium px-4 py-2 hover:bg-zinc-50 rounded-lg">side bar content</div>
        <div className="text-zinc-500 font-medium px-4 py-2 hover:bg-zinc-50 rounded-lg">side bar content</div>
      </nav>
      <div className="p-6 border-t space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-200 rounded-full" />
          <div className="text-sm">
            <p className="font-semibold text-zinc-900">Mohammed Alhalabi</p>
            <p className="text-zinc-500 text-xs text-nowrap">User Settings</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

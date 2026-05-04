"use client";

import './globals.css';
import { usePathname } from 'next/navigation';
import { 
  Home, BarChart2, Users, FileText, Settings, LayoutGrid, 
  HelpCircle, LogOut, Search, Bell, HelpCircle as HelpIcon, Plus 
} from 'lucide-react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // دالة لتحديد تنسيق الرابط النشط (Active Link)
  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-[14px] ${
      isActive 
      ? "bg-[#eef2ff] text-[#4f46e5]" 
      : "text-[#64748b] hover:bg-slate-50 font-semibold"
    }`;
  };

  return (
    <html lang="en">
      <head>
        {/* استدعاء خط Plus Jakarta Sans ليكون مطابقاً للفيجما */}
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#f8fafc] flex min-h-screen font-['Plus_Jakarta_Sans',sans-serif] text-[#1e293b]">
        
        {/* --- 1. القائمة الجانبية (Sidebar) --- */}
        <aside className="w-[280px] bg-white border-r border-slate-100 flex flex-col sticky top-0 h-screen shrink-0 z-20">
          
          {/* Logo Section */}
          <div className="p-8 pb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <LayoutGrid size={22} />
            </div>
            <span className="font-extrabold text-[19px] tracking-tight text-[#0f172a]">O2 Dashboard</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 space-y-1">
            <Link href="/" className={getLinkStyle("/")}>
              <Home size={20} /> Home
            </Link>
            
            <Link href="/analytics" className={getLinkStyle("/analytics")}>
              <BarChart2 size={20} /> Analytics
            </Link>

            <Link href="/users" className={getLinkStyle("/users")}>
              <Users size={20} /> Users
            </Link>

            <Link href="/reports" className={getLinkStyle("/reports")}>
              <FileText size={20} /> Reports
            </Link>

            <Link href="/settings" className={getLinkStyle("/settings")}>
              <Settings size={20} /> Settings
            </Link>
          </nav>

          {/* User & Footer Section */}
          <div className="p-6 border-t border-slate-50 space-y-2">
            <div className="flex items-center gap-3 px-2 mb-4 cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
              <div className="w-9 h-9 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-xs">MA</div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-slate-700">Mohammed Alhalabi</span>
                <span className="text-[10px] text-slate-400 font-medium">User Settings</span>
              </div>
            </div>
            
            <button className="flex items-center gap-3 px-4 py-2 w-full text-[#64748b] hover:text-indigo-600 text-[13px] font-semibold transition-all">
              <HelpCircle size={18} /> Support
            </button>
            <button className="flex items-center gap-3 px-4 py-2 w-full text-[#ef4444] hover:bg-red-50 rounded-xl text-[13px] font-bold transition-all">
              <LogOut size={18} /> Log Out
            </button>
          </div>
        </aside>

        {/* --- 2. منطقة المحتوى الرئيسي (Navbar + Page Content) --- */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* شريط البحث العلوي (Top Navbar) */}
          <header className="h-[72px] bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-10 px-10 flex items-center justify-between">
            <div className="relative w-[400px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search analytics..." 
                className="w-full bg-[#f1f5f9] border-none rounded-xl py-2.5 pl-11 pr-4 text-[13px] focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" 
              />
            </div>
            
            <div className="flex items-center gap-5">
              {/* Notification Bell with Red Dot */}
              <div className="relative cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors">
                <Bell size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#ef4444] rounded-full border-2 border-white"></span>
              </div>
              <HelpIcon size={20} className="text-slate-400 cursor-pointer hover:text-indigo-600 transition-colors" />
              <div className="h-6 w-[1px] bg-slate-100 mx-1"></div>
              
              {/* Add Button */}
              <button className="bg-[#4f46e5] text-white px-5 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
                <Plus size={18} /> Add
              </button>
            </div>
          </header>

          {/* محتوى الصفحات مع مسافات (Padding) مريحة */}
          <main className="p-10 max-w-[1600px] mx-auto w-full">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
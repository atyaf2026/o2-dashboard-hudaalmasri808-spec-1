import React from 'react';
import Link from 'next/link'; // ضروري لعمل التنقل بين الصفحات
import { 
  HiOutlineHome, HiOutlineChartBar, HiOutlineUsers, 
  HiOutlineClipboardList, HiOutlineCog, HiOutlineLogout, 
  HiOutlineQuestionMarkCircle 
} from "react-icons/hi";

const Sidebar = () => {
  // تعريف المصفوفة داخل الدالة لضمان وصول الـ map لكلمة item
  const menuItems = [
    { name: "Home", icon: <HiOutlineHome />, path: "/", active: true },
    { name: "Analytics", icon: <HiOutlineChartBar />, path: "/analytics", active: false },
    { name: "Users", icon: <HiOutlineUsers />, path: "/users", active: false },
    { name: "Reports", icon: <HiOutlineClipboardList />, path: "/reports", active: false },
    { name: "Settings", icon: <HiOutlineCog />, path: "/settings", active: false },
  ];

  return (
    <aside className="w-[260px] h-screen sticky top-0 left-0 bg-white border-r border-gray-100 flex flex-col p-6 shrink-0 z-10">
      
      {/* 1. القسم العلوي: اللوجو والمنيو */}
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
            <span className="text-xl font-bold">O2</span>
          </div>
          <span className="text-lg font-bold text-slate-800">O2 Dashboard</span>
        </div>

        {/* روابط القائمة مع استخدام Link و item بشكل صحيح */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                  item.active 
                    ? "bg-indigo-50 text-indigo-600" 
                    : "text-gray-400 hover:bg-gray-50 hover:text-indigo-600"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-sm">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* 2. المنطقة المرنة (تدفع البروفايل للأسفل) */}
      <div className="flex-1"></div>

      {/* 3. القسم السفلي: البروفايل وأزرار التحكم */}
      <div className="w-full pt-6 border-t border-gray-100 bg-white">
        
        {/* معلومات المستخدم */}
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-50 shrink-0">
            <img 
              src="/Pucture.jpg" 
              alt="Huda Almasri Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="text-sm font-bold text-slate-800 truncate">Huda Almasri</h4>
            <p className="text-[10px] text-gray-400 truncate">User Settings</p>
          </div>
        </div>

        {/* أزرار الدعم وتسجيل الخروج */}
        <div className="space-y-1">
          <div className="flex items-center gap-4 px-4 py-2 text-gray-400 hover:bg-gray-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-colors">
            <HiOutlineQuestionMarkCircle className="text-xl" />
            <span className="text-sm font-medium">Support</span>
          </div>
          
          <div className="flex items-center gap-4 px-4 py-2 text-red-500 hover:bg-red-50 rounded-xl cursor-pointer transition-colors">
            <HiOutlineLogout className="text-xl" />
            <span className="text-sm font-medium">Log Out</span>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
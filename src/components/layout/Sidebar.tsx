import { JSX } from "react";
import { HiOutlineHome, HiOutlineChartBar, HiOutlineUsers, HiOutlineClipboardList, HiOutlineCog, HiOutlineLogout, HiOutlineQuestionMarkCircle } from "react-icons/hi";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  active: boolean;
}

const Sidebar = () => {
  const menuItems: MenuItem[] = [
    { name: "Home", icon: <HiOutlineHome />, active: true },
    { name: "Analytics", icon: <HiOutlineChartBar />, active: false },
    { name: "Users", icon: <HiOutlineUsers />, active: false },
    { name: "Reports", icon: <HiOutlineClipboardList />, active: false },
    { name: "Settings", icon: <HiOutlineCog />, active: false },
  ];

  return (
    <aside className="w-[256px] h-screen bg-white border-r border-gray-100 flex flex-col p-6 sticky top-0">
      {/* 1. قسم اللوجو في الأعلى */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
          <span className="text-xl font-bold">O2</span>
        </div>
        <span className="text-lg font-bold text-slate-800">O2 Dashboard</span>
      </div>

      {/* 2. قسم الروابط - يأخذ المساحة المتاحة ويدفع ما تحته للأسفل */}
      <nav className="flex-1 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
              item.active 
                ? "bg-indigo-50 text-indigo-600" 
                : "text-gray-500 hover:bg-gray-50 hover:text-indigo-600"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </nav>

      {/* 3. القسم السفلي - مثبت في نهاية السايد بار */}
      <div className="mt-auto pt-6 border-t border-gray-100 bg-white">
        
        {/* معلومات المستخدم */}
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
            <img 
              src="/Pucture.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Mohammed Alhalabi</h4>
            <p className="text-xs text-gray-400">User Settings</p>
          </div>
        </div>

        {/* أزرار الدعم والخروج */}
        <div className="space-y-1">
          <div className="flex items-center gap-4 px-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-colors">
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
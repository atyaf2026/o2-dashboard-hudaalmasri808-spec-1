"use client";

import React, { useState } from 'react';
import { 
  User, Bell, Shield, Palette, Camera, 
  Sun, Moon, Save, Trash2, ChevronRight 
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Header مع زر الحفظ العلوي */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-[#1e293b]">Settings</h1>
        <button className="bg-[#4f46e5] text-white px-6 py-2 rounded-xl text-[12px] font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* القائمة الجانبية الداخلية (Tabs) */}
        <aside className="w-full lg:w-[240px] space-y-1">
          {[
            { id: 'Profile', icon: <User size={18}/> },
            { id: 'Notifications', icon: <Bell size={18}/> },
            { id: 'Security', icon: <Shield size={18}/> },
            { id: 'Appearance', icon: <Palette size={18}/> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-bold transition-all ${
                activeTab === tab.id 
                ? "bg-white text-[#4f46e5] shadow-sm border border-slate-100" 
                : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3">
                {tab.icon} {tab.id}
              </div>
              {activeTab === tab.id && <ChevronRight size={14} />}
            </button>
          ))}
        </aside>

        {/* منطقة الإعدادات الرئيسية */}
        <div className="flex-1 space-y-6">
          
          {/* 1. Profile Information Section */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-1">Profile Information</h3>
            <p className="text-slate-400 text-[11px] mb-8">Update your account's profile information and email address.</p>
            
            <div className="flex flex-col md:flex-row gap-10">
              {/* Profile Photo */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner bg-slate-100">
                    <img src="https://ui-avatars.com/api/?name=Mohammed+Alhalabi&background=4f46e5&color=fff&size=128" alt="Profile" />
                  </div>
                  <button className="absolute bottom-1 right-1 bg-[#4f46e5] text-white p-2 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform">
                    <Camera size={14} />
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-700">Profile Photo</p>
                  <p className="text-[9px] text-slate-400">JPG or PNG. Max 2MB.</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex-1 space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Name</label>
                  <input type="text" defaultValue="Mohammed Alhalabi" className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all" />
                  <p className="text-[9px] text-slate-300">Your real name as it will appear on reports.</p>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input type="email" defaultValue="mohammed.h@o2.edu" className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Bio</label>
                  <textarea rows={3} defaultValue="Front-end developer trainee passionate about building clean and functional user interfaces." className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all resize-none" />
                  <p className="text-[9px] text-slate-300">Brief description for your profile.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Appearance Section */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-1">Appearance</h3>
            <p className="text-slate-400 text-[11px] mb-8">Customize how the dashboard looks and feels to suit your workspace.</p>
            
            <div className="space-y-6">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Dashboard Theme</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-[#4f46e5] bg-indigo-50/30 p-4 rounded-2xl flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-amber-500"><Sun size={20}/></div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Light Mode</p>
                      <p className="text-[10px] text-slate-400 font-medium">Default bright workspace</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-4 border-[#4f46e5] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#4f46e5] rounded-full"></div>
                  </div>
                </div>
                
                <div className="border-2 border-slate-50 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-xl shadow-sm text-slate-100"><Moon size={20}/></div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Dark Mode</p>
                      <p className="text-[10px] text-slate-400 font-medium">Easier on the eyes at night</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Primary Brand Color</label>
                <div className="flex gap-3">
                  {['#4f46e5', '#10b981', '#ef4444', '#f59e0b', '#1e293b'].map((color, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 shadow-sm ${i === 0 ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`} style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Notifications Bar */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-700">Notifications</h4>
              <p className="text-[11px] text-slate-400">Current: All email notifications enabled</p>
            </div>
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-500 hover:bg-slate-50 transition-all shadow-sm">Manage</button>
          </section>

          {/* 4. Danger Zone */}
          <section className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">Delete Account</h4>
              <p className="text-[11px] text-red-400">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <button className="bg-red-500 text-white px-5 py-2 rounded-xl text-[11px] font-bold shadow-lg shadow-red-100 hover:bg-red-600 transition-all flex items-center gap-2">
              <Trash2 size={16} /> Deactivate
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}
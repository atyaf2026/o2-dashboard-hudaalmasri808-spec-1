"use client";

import React, { useState } from 'react';
import { 
  User, Bell, Shield, Palette, Camera, 
  Sun, Moon, Save, Trash2, ChevronRight 
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* 1. Header مع زر الحفظ الأزرق الصغير */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <h1 className="text-xl font-bold text-slate-800">Settings</h1>
        <button className="bg-[#4f46e5] hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-[12px] font-bold flex items-center gap-2 transition-all">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
        
        {/* 2. القائمة الجانبية اليسرى (Tabs) */}
        <aside className="space-y-1">
          {[
            { id: 'Profile', icon: <User size={18}/> },
            { id: 'Notifications', icon: <Bell size={18}/> },
            { id: 'Security', icon: <Shield size={18}/> },
            { id: 'Appearance', icon: <Palette size={18}/> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-bold transition-all ${
                activeTab === tab.id 
                ? "bg-white text-indigo-600 shadow-sm border border-slate-100" 
                : "text-slate-400 hover:text-slate-500 hover:bg-slate-50"
              }`}
            >
              {tab.icon} {tab.id}
            </button>
          ))}
        </aside>

        {/* 3. منطقة الإعدادات اليمنى */}
        <div className="space-y-6">
          
          {/* قسم Profile Information */}
          <section className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-1">Profile Information</h3>
            <p className="text-slate-400 text-[11px] mb-8">Update your account profile information and email address.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
              {/* Profile Photo */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100">
                    <img src="/Pucture.jpg" alt="Profile" className="w-full h-full object-cover"/>
                  </div>
                  <div className="absolute bottom-1 right-1 bg-indigo-600 p-1.5 rounded-full border-2 border-white text-white shadow-sm">
                    <Camera size={12} />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-700">Profile Photo</p>
                  <p className="text-[9px] text-slate-400 uppercase">JPG or PNG. Max 2MB.</p>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500">Name</label>
                  <input type="text" defaultValue="Huda Almasri" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-300 transition-all" />
                  <p className="text-[9px] text-slate-300">Your real name as it will appear on reports.</p>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500">Email Address</label>
                  <input type="email" defaultValue="hudaalmasri@808gmail.com" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-300 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500">Bio</label>
                  <textarea rows={3} defaultValue="Front-end developer trainee passionate about building clean and functional user interfaces." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-300 transition-all resize-none" />
                  <p className="text-[9px] text-slate-300">Brief description for your profile.</p>
                </div>
              </div>
            </div>
          </section>

          {/* قسم Appearance */}
          <section className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-1">Appearance</h3>
            <p className="text-slate-400 text-[11px] mb-8">Customize how the dashboard looks and feels to suit your workspace.</p>
            
            <div className="space-y-6">
              <p className="text-[11px] font-bold text-slate-500">Dashboard Theme</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-indigo-600 bg-indigo-50/20 p-4 rounded-2xl flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-indigo-600"><Sun size={20}/></div>
                    <div>
                      <p className="text-[13px] font-bold text-slate-700">Light Mode</p>
                      <p className="text-[10px] text-slate-400">Default bright workspace</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 border-indigo-600 bg-white"></div>
                </div>
                
                <div className="border border-slate-100 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-900 rounded-xl shadow-sm text-slate-100"><Moon size={20}/></div>
                    <div>
                      <p className="text-[13px] font-bold text-slate-700">Dark Mode</p>
                      <p className="text-[10px] text-slate-400">Easier on the eyes at night</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-slate-200 bg-white"></div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-bold text-slate-500">Primary Brand Color</p>
                <div className="flex gap-3">
                  {['#4f46e5', '#10b981', '#ef4444', '#f59e0b', '#1e293b'].map((color, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-all ${i === 0 ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`} style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* قسم Notifications الصغير */}
          <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-[14px] font-bold text-slate-800">Notifications</h4>
              <p className="text-[11px] text-slate-400">Current: All email notifications enabled</p>
            </div>
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-500 hover:bg-slate-50">Manage</button>
          </section>

          {/* قسم Delete Account بلون أحمر خفيف */}
          <section className="bg-red-50/30 p-8 rounded-[32px] border border-red-100 flex items-center justify-between">
            <div>
              <h4 className="text-[14px] font-bold text-red-600 mb-1">Delete Account</h4>
              <p className="text-[11px] text-red-400">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-[12px] font-bold shadow-sm transition-all">
              Deactivate
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}
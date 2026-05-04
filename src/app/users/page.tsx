"use client";

import React from 'react';
import { 
  Search, Filter, Download, Plus, MoreHorizontal, 
  Shield, GraduationCap, Users, UserCheck, UserPlus, Clock
} from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* 1. Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-[#1e293b]">Users Management</h1>
          <p className="text-slate-400 text-sm">Manage trainee accounts, roles, and platform permissions.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-500 bg-white hover:bg-slate-50 transition-all shadow-sm">
            <Filter size={14}/> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-500 bg-white hover:bg-slate-50 transition-all shadow-sm">
            <Download size={14}/> Export
          </button>
        </div>
      </div>

      {/* 2. الأربع بطاقات العلوية (Stats Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'TOTAL USERS', val: '1,284', sub: '+12%', sCol: 'emerald' },
          { label: 'ACTIVE NOW', val: '432', dot: true, sCol: 'emerald' },
          { label: 'PENDING INVITES', val: '18', sCol: 'slate' },
          { label: 'NEW TRAINEES', val: '54', sCol: 'slate' }
        ].map((card, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{card.label}</p>
            <div className="flex items-center gap-2">
              <h4 className="text-2xl font-black text-slate-800">{card.val}</h4>
              {card.sub && <span className="text-[10px] font-bold text-emerald-500">{card.sub}</span>}
              {card.dot && <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>}
            </div>
          </div>
        ))}
      </div>

      {/* 3. الجدول (Main Table) */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white border-b border-slate-50">
            <tr className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">
              <th className="px-8 py-5 w-[40%]">Name</th>
              <th className="px-8 py-5 text-center">Role</th>
              <th className="px-8 py-5 text-center">Status</th>
              <th className="px-8 py-5">Join Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { name: 'Rivera', email: 'rivera@o2dashboard.com', role: 'Admin', rCol: 'indigo', status: 'Active', sCol: 'emerald', date: 'Oct 24, 2023' },
              { name: 'Chen', email: 'c.@o2dashboard.com', role: 'Student', rCol: 'slate', status: 'Active', sCol: 'emerald', date: 'Nov 12, 2023' },
              { name: 'Knight', email: 'knight@o2dashboard.com', role: 'Student', rCol: 'slate', status: 'Inactive', sCol: 'slate', date: 'Dec 21, 2023' },
              { name: 'Smyth', email: 's.s@o2dashboard.com', role: 'Student', rCol: 'slate', status: 'Pending', sCol: 'amber', date: 'Jan 14, 2024' },
              { name: 'Rodriguez', email: 'r.@o2dashboard.com', role: 'Admin', rCol: 'indigo', status: 'Active', sCol: 'emerald', date: 'Feb 22, 2024' }
            ].map((user, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-all">
                <td className="px-8 py-5">
                   <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-slate-700">{user.name}</span>
                      <span className="text-[11px] text-slate-400 font-medium">{user.email}</span>
                   </div>
                </td>
                <td className="px-8 py-5 text-center">
                   <span className={`text-[10px] font-bold px-3 py-1 rounded-lg bg-${user.rCol}-50 text-${user.rCol}-600`}>{user.role}</span>
                </td>
                <td className="px-8 py-5 text-center">
                   <div className="flex items-center justify-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full bg-${user.sCol}-500`}></span>
                      <span className={`text-[11px] font-bold text-${user.sCol}-600`}>{user.status}</span>
                   </div>
                </td>
                <td className="px-8 py-5 text-xs text-slate-400 font-medium">{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t border-slate-50 flex justify-between items-center px-8">
           <span className="text-[10px] text-slate-400 font-bold">Showing 1 to 5 of 1,284 users</span>
           <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-lg shadow-indigo-100">1</button>
              {[2, 3, '...', 257].map((n, i) => (
                <button key={i} className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-xs font-bold text-slate-400 hover:bg-slate-50">{n}</button>
              ))}
           </div>
        </div>
      </div>

      {/* 4. الجزء السفلي: Role Permissions & Invite Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Role Permissions */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
           <h3 className="font-bold text-slate-800 text-base mb-6">Role Permissions</h3>
           <div className="space-y-4">
              {[
                { label: 'Administrator', icon: <Shield size={18}/> },
                { label: 'Standard Student', icon: <GraduationCap size={18}/> }
              ].map((role, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50/50 rounded-2xl border border-slate-50 group hover:border-indigo-100 transition-all cursor-pointer">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-xl text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">{role.icon}</div>
                      <span className="text-sm font-bold text-slate-700">{role.label}</span>
                   </div>
                   <button className="text-[11px] font-bold text-indigo-600 hover:underline">Edit Policy</button>
                </div>
              ))}
           </div>
        </div>

        {/* Invite Entire Cohort */}
        <div className="bg-[#5c4df3] p-8 rounded-3xl shadow-xl shadow-indigo-200 relative overflow-hidden flex flex-col justify-center">
           <div className="relative z-10">
              <h3 className="font-bold text-white text-xl mb-2">Invite your entire cohort</h3>
              <p className="text-indigo-100 text-[12px] leading-relaxed mb-6 max-w-[80%]">
                Import users directly from CSV or sync with your existing learning management system.
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl text-xs font-black shadow-sm hover:bg-indigo-50 transition-all">
                Bulk Upload Users
              </button>
           </div>
           {/* دوائر ديكور في الخلفية */}
           <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-[-20%] left-[-5%] w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}
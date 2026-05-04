"use client";

import React from 'react';
import { 
  TrendingUp, Zap, BarChart3, ShieldCheck, CheckCircle2, 
  Clock, ChevronDown, ShoppingBag, MoreHorizontal, Filter, Download, Database, Cloud, Key, Activity
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* 1. الترحيب (Header Section) */}
      <div className="flex flex-col gap-1 mb-2">
        <h1 className="text-2xl font-bold text-[#1e293b]">Welcome back, Mohammed</h1>
        <p className="text-slate-400 text-sm">Here is what happening with your projects today.</p>
      </div>

      {/* 2. البطاقات العلوية (Top Stats Cards) - كما في الفيجما */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Total Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><TrendingUp size={18}/></div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+12.5%</span>
          </div>
          <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-tight">Total Revenue</p>
          <h4 className="text-2xl font-bold text-slate-800">$48,290.00</h4>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/20"></div>
        </div>

        {/* Active Sessions */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Zap size={18}/></div>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Active</span>
          </div>
          <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-tight">Active Sessions</p>
          <h4 className="text-2xl font-bold text-slate-800">1,284</h4>
          <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 italic">42 users online now</p>
        </div>

        {/* System Performance */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div>
               <p className="text-slate-400 text-[11px] font-semibold uppercase">System Performance</p>
               <h4 className="text-lg font-bold text-slate-800">99.9% Uptime</h4>
            </div>
            <div className="flex gap-1">
               <span className="text-[9px] font-bold bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded italic">24h</span>
               <span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded italic">7d</span>
            </div>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. الوسط: الرسم البياني الكبير و الطلبات الأخيرة */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Performance Over Time */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-8">
              <div>
                 <h3 className="font-bold text-slate-800 text-base">Performance Over Time</h3>
                 <p className="text-[11px] text-slate-400">Transaction volume compared to last month</p>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-500">
                Monthly <ChevronDown size={14} />
              </button>
           </div>
           
           {/* محاكاة للرسم البياني الموجي في الفيجما */}
           <div className="relative h-48 w-full bg-slate-50/50 rounded-2xl mb-8 overflow-hidden">
              <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path d="M0,80 C100,20 200,120 400,40 L400,100 L0,100 Z" fill="url(#gradient)" fillOpacity="0.1" />
                <path d="M0,80 C100,20 200,120 400,40" stroke="#6366f1" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
           </div>

           <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: 'USERS', val: '2.4k' },
                { label: 'CLICK RATE', val: '18.2%' },
                { label: 'BOUNCE', val: '24%' },
                { label: 'GOAL', val: 'Reached', col: 'indigo-600' }
              ].map((item, i) => (
                <div key={i}>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                   <p className={`text-sm font-black ${item.col ? 'text-indigo-600' : 'text-slate-800'}`}>{item.val}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800 text-base">Recent Orders</h3>
              <button className="text-indigo-600 text-[11px] font-bold">View all</button>
           </div>
           <div className="space-y-6">
              {[
                { id: '#3492', time: '2 minutes ago', price: '$242.22', status: 'Paid', sCol: 'emerald' },
                { id: '#3491', time: '1 hour ago', price: '$1,122.22', status: 'Pending', sCol: 'amber' },
                { id: '#3490', time: '3 hours ago', price: '$84.52', status: 'Paid', sCol: 'emerald' },
                { id: '#3489', time: 'Yesterday', price: '$342.22', status: 'Canceled', sCol: 'slate' }
              ].map((order, i) => (
                <div key={i} className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 text-slate-400 rounded-xl"><ShoppingBag size={16}/></div>
                      <div>
                         <p className="text-xs font-bold text-slate-700">Order {order.id}</p>
                         <p className="text-[10px] text-slate-400 font-medium">{order.time}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-xs font-black text-slate-800">{order.price}</p>
                      <span className={`text-[9px] font-bold text-${order.sCol}-600`}>{order.status}</span>
                   </div>
                </div>
              ))}
              <div className="mt-4 h-24 bg-slate-100 rounded-2xl animate-pulse"></div>
           </div>
        </div>
      </div>

      {/* 4. الجدول السفلي: Asset Distribution */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 flex justify-between items-center border-b border-slate-50">
          <div>
             <h3 className="font-bold text-slate-800 text-base">Asset Distribution</h3>
             <p className="text-[11px] text-slate-400 mt-0.5">Detailed inventory and status across geographic regions</p>
          </div>
          <div className="flex gap-2">
             <button className="flex items-center gap-2 px-4 py-2 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-500 hover:bg-slate-50"><Filter size={14}/> Filter</button>
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-[11px] font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100"><Download size={14}/> Export CSV</button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th className="px-8 py-4">Asset Name</th>
              <th className="px-8 py-4">Category</th>
              <th className="px-8 py-4">Owner</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Date</th>
              <th className="px-8 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { name: 'Main DB Cluster (NA-1)', cat: 'Database', own: 'John Doe', status: 'Operational', sCol: 'emerald', date: 'Oct 22, 2023', icon: <Database size={14}/> },
              { name: 'Static CDN Assets (EU-W)', cat: 'Storage', own: 'M. Alhalabi', status: 'Active', sCol: 'blue', date: 'Oct 18, 2023', icon: <Cloud size={14}/> },
              { name: 'Legacy Auth Gateway', cat: 'Infrastructure', own: 'Sarah K.', status: 'Maintenance', sCol: 'amber', date: 'Oct 15, 2023', icon: <Key size={14}/> },
              { name: 'Redis Cache Node 24', cat: 'Performance', own: 'System', status: 'Degraded', sCol: 'rose', date: 'Oct 14, 2023', icon: <Activity size={14}/> }
            ].map((row, i) => (
              <tr key={i} className="group hover:bg-slate-50/50 transition-all">
                <td className="px-8 py-5">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">{row.icon}</div>
                      <span className="text-xs font-bold text-slate-700">{row.name}</span>
                   </div>
                </td>
                <td className="px-8 py-5 text-xs text-slate-500 font-medium">{row.cat}</td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-white shadow-sm"></div>
                      <span className="text-xs text-slate-600 font-semibold">{row.own}</span>
                   </div>
                </td>
                <td className="px-8 py-5">
                   <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border border-${row.sCol}-100 bg-${row.sCol}-50 text-${row.sCol}-600 flex w-fit items-center gap-1.5`}>
                      <span className={`w-1 h-1 rounded-full bg-${row.sCol}-600 animate-pulse`}></span> {row.status}
                   </span>
                </td>
                <td className="px-8 py-5 text-xs text-slate-400 font-medium">{row.date}</td>
                <td className="px-8 py-5 text-center">
                   <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-300"><MoreHorizontal size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-slate-50/50 border-t border-slate-50 flex justify-between items-center px-8">
           <span className="text-[10px] text-slate-400 font-bold uppercase">Showing 4 of 24 assets</span>
           <div className="flex gap-2">
              <button className="w-6 h-6 rounded bg-white border border-slate-100 text-[10px] font-bold text-indigo-600 shadow-sm">1</button>
              <button className="w-6 h-6 rounded bg-white border border-slate-100 text-[10px] font-bold text-slate-400">2</button>
              <button className="w-6 h-6 rounded bg-white border border-slate-100 text-[10px] font-bold text-slate-400">3</button>
           </div>
        </div>
      </div>
    </div>
  );
}
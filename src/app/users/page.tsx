"use client";

import React from 'react';
import { 
  DollarSign, Zap, MoreHorizontal, Filter, Download, 
  Clock, Database, Cloud, ShieldCheck, Activity, ShoppingBag,
  ChevronLeft, ChevronRight, Plus
} from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="flex-1 bg-[#f8fafc] min-h-screen p-4 lg:p-8 font-sans text-slate-900">
      
      {/* 1. Welcome Section */}
      <div className="mb-8 pt-4">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, H</h1>
        <p className="text-slate-500 text-sm mt-1">Here what happening with your projects today.</p>
      </div>

      {/* 2. Top Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><DollarSign className="w-6 h-6" /></div>
            <span className="text-emerald-500 text-[11px] font-bold bg-emerald-50 px-2 py-1 rounded-lg">+12.5%</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Revenue</p>
          <h2 className="text-2xl font-bold mt-1 text-slate-800">$48,290.00</h2>
          <div className="mt-4 h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 w-2/3"></div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Zap className="w-6 h-6" /></div>
            <span className="text-blue-500 text-[11px] font-bold bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-tight">Active</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Sessions</p>
          <h2 className="text-2xl font-bold mt-1 text-slate-800">1,284</h2>
          <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
            <Activity className="w-3 h-3 text-blue-400" /> 42 users online now
          </p>
        </div>

        {/* System Performance */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-center mb-2">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">System Performance</p>
            <div className="flex gap-2 text-[10px] font-bold">
              <span className="text-slate-900 border-b-2 border-indigo-500 pb-1">24h</span>
              <span className="text-slate-300">7d</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">99.9% Uptime</h2>
          <div className="flex items-end gap-2 h-16 mt-6">
              {[40, 70, 55, 90, 60, 80, 50, 95, 75, 100].map((h, i) => (
                <div key={i} style={{height: `${h}%`}} className={`flex-1 rounded-lg ${i > 7 ? 'bg-indigo-600' : 'bg-indigo-100'}`}></div>
              ))}
          </div>
        </div>
      </div>

      {/* 3. Performance & Recent Orders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Performance Chart Card */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold text-lg text-slate-800">Performance Over Time</h3>
              <p className="text-xs text-slate-400">Transaction volume compared to last month</p>
            </div>
            <select className="bg-slate-50 text-xs font-bold py-2 px-3 rounded-xl border-none outline-none text-slate-600">
              <option>Monthly</option>
            </select>
          </div>
          
          <div className="w-full h-64 relative mt-4">
            <svg viewBox="0 0 800 200" className="w-full h-full preserve-3d">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,150 C100,140 200,180 300,120 C400,60 500,150 600,100 C700,50 800,80 800,80 L800,200 L0,200 Z" 
                fill="url(#chartGradient)" 
              />
              <path 
                d="M0,150 C100,140 200,180 300,120 C400,60 500,150 600,100 C700,50 800,80 800,80" 
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 mt-8 pt-6 border-t border-slate-50 text-center">
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Users</p><p className="font-bold text-slate-800">2.4k</p></div>
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Click Rate</p><p className="font-bold text-slate-800">18.2%</p></div>
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Bounce</p><p className="font-bold text-slate-800">24%</p></div>
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Goal</p><p className="font-bold text-indigo-600">Reached</p></div>
          </div>
        </div>

        {/* Recent Orders List */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-slate-800">Recent Orders</h3>
            <button className="text-indigo-600 text-xs font-bold hover:underline">View all</button>
          </div>
          <div className="space-y-6 flex-1">
            {[
              { id: '3492', price: '242.22', time: '2 mins ago', status: 'Paid', color: 'emerald' },
              { id: '3491', price: '1,122.22', time: '1 hour ago', status: 'Pending', color: 'amber' },
              { id: '3482', price: '84.32', time: '3 hours ago', status: 'Paid', color: 'emerald' },
              { id: '3489', price: '342.22', time: 'Yesterday', status: 'Canceled', color: 'slate' }
            ].map((order, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-all">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Order #{order.id}</p>
                    <p className="text-[11px] text-slate-400">{order.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-800">${order.price}</p>
                  <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-md bg-${order.color}-50 text-${order.color}-600`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-8 h-32 bg-gradient-to-br from-[#b8ada0] to-[#9e9284] rounded-2xl relative overflow-hidden flex items-center justify-center shadow-md group cursor-pointer">
               <div className="absolute inset-0 bg-white/5 skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-700"></div>
               <div className="w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. System Health & Upcoming Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><ShieldCheck className="w-5 h-5" /></div>
                   <div>
                      <h3 className="font-bold text-slate-800">System Health</h3>
                      <p className="text-xs text-slate-400">Real-time status monitor</p>
                   </div>
                </div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-200"></div>
             </div>
             <div className="space-y-4">
                {[
                  { name: 'Database Engine', status: 'OPTIMAL', color: 'emerald' },
                  { name: 'API Gateway', status: 'OPERATIONAL', color: 'emerald' },
                  { name: 'Asset Storage', status: 'HIGH LOAD', color: 'amber' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-50">
                     <span className="text-xs font-bold text-slate-600">{s.name}</span>
                     <span className={`text-[9px] font-bold px-2 py-1 rounded-lg bg-${s.color}-50 text-${s.color}-600`}>{s.status}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><Clock className="w-5 h-5" /></div>
                   <div>
                      <h3 className="font-bold text-slate-800">Upcoming Tasks</h3>
                      <p className="text-xs text-slate-400">Deadlines & priorities</p>
                   </div>
                </div>
                <MoreHorizontal className="text-slate-300 w-5 h-5 cursor-pointer" />
             </div>
             <div className="space-y-4">
                {[
                  { title: 'Review quarterly projections', date: 'Due in 2 hours', p: 'HIGH', pCol: 'red' },
                  { title: 'Sync with marketing team', date: 'Tomorrow at 10:00 AM', p: 'MEDIUM', pCol: 'blue' },
                  { title: 'Update system documentation', date: 'Friday, Oct 24', p: 'LOW', pCol: 'slate' },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                     <div className="w-5 h-5 border-2 border-slate-200 rounded-md group-hover:border-indigo-500 transition-colors"></div>
                     <div className="flex-1">
                        <p className="text-sm font-bold text-slate-700">{t.title}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{t.date}</p>
                     </div>
                     <span className={`text-[8px] font-bold px-2 py-0.5 rounded bg-${t.pCol}-50 text-${t.pCol}-600`}>{t.p}</span>
                  </div>
                ))}
             </div>
          </div>
      </div>

      {/* 5. Asset Distribution Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg text-slate-800">Asset Distribution</h3>
            <p className="text-xs text-slate-400 mt-1">Detailed inventory and status across geographic regions</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold border border-slate-100 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto px-4">
          <table className="w-full text-left">
            <thead>
              <tr className="uppercase text-[10px] font-bold text-slate-400 tracking-widest">
                <th className="px-6 py-5">Asset Name</th>
                <th className="px-6 py-5">Category</th>
                <th className="px-6 py-5">Owner</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'Main DB Cluster (NA-21)', cat: 'Database', owner: 'John Doe', status: 'Operational', date: 'Oct 22, 2023', sCol: 'emerald', icon: <Database className="w-4 h-4" /> },
                { name: 'Static CDN Assets (EU-W)', cat: 'Storage', owner: 'M. Alhalabi', status: 'Active', date: 'Oct 18, 2023', sCol: 'blue', icon: <Cloud className="w-4 h-4" /> },
                { name: 'Legacy Auth Gateway', cat: 'Infrastructure', owner: 'Sarah K.', status: 'Maintenance', date: 'Oct 15, 2023', sCol: 'amber', icon: <ShieldCheck className="w-4 h-4" /> },
                { name: 'Redis Cache Node 24', cat: 'Performance', owner: 'System', status: 'Degraded', date: 'Oct 14, 2023', sCol: 'red', icon: <Activity className="w-4 h-4" /> }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/40 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl bg-${row.sCol}-50 text-${row.sCol}-600 group-hover:scale-110 transition-transform`}>{row.icon}</div>
                      <span className="text-sm font-bold text-slate-800 tracking-tight">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-[11px] text-slate-500 font-bold">{row.cat}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600 border-2 border-white shadow-sm">{row.owner.charAt(0)}</div>
                        <span className="text-xs text-slate-600 font-bold">{row.owner}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 text-[9px] font-bold text-${row.sCol}-600 bg-${row.sCol}-50 px-3 py-1 rounded-full`}>
                      <span className={`w-1 h-1 bg-${row.sCol}-500 rounded-full ${row.status === 'Operational' || row.status === 'Active' ? 'animate-pulse' : ''}`}></span> {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-[11px] text-slate-400 font-bold">{row.date}</td>
                  <td className="px-6 py-5 text-center">
                    <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-slate-300" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-8 py-6 bg-slate-50/30 flex items-center justify-between">
           <span className="text-[11px] font-bold text-slate-400">Showing 4 of 24 assets</span>
           <div className="flex items-center gap-3">
             <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
             <div className="flex gap-2">
                <button className="w-8 h-8 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-[11px] font-bold shadow-md shadow-indigo-100">1</button>
                <button className="w-8 h-8 bg-white text-slate-400 hover:text-indigo-600 rounded-xl flex items-center justify-center text-[11px] font-bold border border-slate-100 transition-all">2</button>
                <button className="w-8 h-8 bg-white text-slate-400 hover:text-indigo-600 rounded-xl flex items-center justify-center text-[11px] font-bold border border-slate-100 transition-all">3</button>
             </div>
             <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors"><ChevronRight className="w-5 h-5" /></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
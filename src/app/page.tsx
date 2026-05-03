"use client";

import React from 'react';
import { 
  DollarSign, Zap, MoreHorizontal, Filter, Download, 
  Clock, Database, Cloud, ShieldCheck, Activity, ShoppingBag,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="flex-1 bg-[#f8fafc] min-h-screen p-4 lg:p-8 font-sans text-slate-900">
      
      {/* 1. Welcome Section */}
      <div className="mb-8 pt-4">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Mohammed</h1>
        <p className="text-slate-500 text-sm">Here what happening with your projects today.</p>
      </div>

      {/* 2. Top Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><DollarSign className="w-5 h-5" /></div>
            <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Total Revenue</p>
          <h2 className="text-2xl font-bold mt-1">$48,290.00</h2>
        </div>

        {/* Active Sessions */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Zap className="w-5 h-5" /></div>
            <span className="text-blue-500 text-[10px] font-bold bg-blue-50 px-2 py-1 rounded-full uppercase">Active</span>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Active Sessions</p>
          <h2 className="text-2xl font-bold mt-1">1,284</h2>
        </div>

        {/* System Performance */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">System Performance</p>
            <div className="flex gap-2 text-[10px] font-bold">
              <span className="text-slate-900 border-b-2 border-indigo-500 cursor-pointer">24h</span>
              <span className="text-slate-400 cursor-pointer">7d</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold">99.9% Uptime</h2>
          <div className="flex items-end gap-1.5 h-12 mt-4">
             {[40, 70, 55, 90, 60, 80, 50, 95, 75, 100].map((h, i) => (
               <div key={i} style={{height: `${h}%`}} className={`flex-1 rounded-t-sm ${i > 7 ? 'bg-indigo-600' : 'bg-indigo-100'}`}></div>
             ))}
          </div>
        </div>
      </div>

      {/* 3. Performance & Recent Orders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Performance Chart Card */}
        <div className="lg:col-span-2 bg-white p-0 rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 pb-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800">Performance Over Time</h3>
                <p className="text-xs text-slate-400">Transaction volume compared to last month</p>
              </div>
              <button className="bg-slate-50 text-[11px] font-bold py-1.5 px-3 rounded-lg text-slate-500 border border-slate-100">Monthly</button>
            </div>
          </div>
          
          <div className="w-full h-64 mt-4">
            <img 
              src="/chart.png" 
              alt="Performance Graph" 
              className="w-full h-full object-fill" 
            />
          </div>

          <div className="grid grid-cols-4 p-6 text-center border-t border-slate-50 bg-white">
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Users</p><p className="font-bold text-sm">2.4k</p></div>
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Click Rate</p><p className="font-bold text-sm">18.2%</p></div>
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Bounce</p><p className="font-bold text-sm">24%</p></div>
            <div><p className="text-[10px] text-slate-400 uppercase font-bold">Goal</p><p className="font-bold text-sm text-indigo-600">Reached</p></div>
          </div>
        </div>

        {/* Recent Orders List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Recent Orders</h3>
            <button className="text-indigo-600 text-xs font-bold hover:underline">View all</button>
          </div>
          <div className="space-y-6 flex-1">
            {[
              { id: '3492', price: '242.22', time: '2m ago', status: 'Paid', color: 'emerald' },
              { id: '3491', price: '1,122.22', time: '1h ago', status: 'Pending', color: 'amber' },
              { id: '3482', price: '684.32', time: '3h ago', status: 'Paid', color: 'emerald' },
              { id: '3489', price: '342.22', time: 'Yesterday', status: 'Canceled', color: 'slate' }
            ].map((order, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Order #{order.id}</p>
                    <p className="text-xs text-slate-400">{order.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-800">${order.price}</p>
                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-${order.color}-50 text-${order.color}-600`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}

            {/* المستطيل البني (أيقونة العرض أو الإعلان) */}
            <div className="w-full h-32 mt-4 rounded-2xl bg-gradient-to-br from-[#b8ada0] to-[#9e9284] shadow-md relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-white/5 skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Asset Distribution Table (القائمة الكاملة) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-800">Asset Distribution</h3>
            <p className="text-xs text-slate-400 mt-1">Detailed inventory and status across geographic regions</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-sm transition-all active:scale-95">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 uppercase text-[10px] font-bold text-slate-400 tracking-wider">
                <th className="px-6 py-4">Asset Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
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
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${row.sCol}-50 text-${row.sCol}-600 group-hover:scale-110 transition-transform`}>{row.icon}</div>
                      <span className="text-sm font-bold text-slate-800">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-medium">{row.cat}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500">{row.owner.charAt(0)}</div>
                        <span className="text-xs text-slate-600 font-medium">{row.owner}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold text-${row.sCol}-600 bg-${row.sCol}-50 px-2.5 py-1 rounded-full`}>
                      <span className={`w-1.5 h-1.5 bg-${row.sCol}-500 rounded-full ${row.status === 'Operational' || row.status === 'Active' ? 'animate-pulse' : ''}`}></span> {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400 font-medium">{row.date}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-1 hover:bg-slate-100 rounded transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-slate-300" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer الترقيم (Pagination) */}
        <div className="px-6 py-4 bg-white border-t border-slate-50 flex items-center justify-between">
           <span className="text-[11px] font-bold text-slate-400">Showing 4 of 24 assets</span>
           <div className="flex items-center gap-2">
             <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
             <div className="flex gap-1">
                <button className="w-7 h-7 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-[11px] font-bold shadow-sm">1</button>
                <button className="w-7 h-7 bg-white text-slate-400 hover:text-slate-900 rounded-lg flex items-center justify-center text-[11px] font-bold transition-colors">2</button>
                <button className="w-7 h-7 bg-white text-slate-400 hover:text-slate-900 rounded-lg flex items-center justify-center text-[11px] font-bold transition-colors">3</button>
             </div>
             <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors"><ChevronRight className="w-4 h-4" /></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
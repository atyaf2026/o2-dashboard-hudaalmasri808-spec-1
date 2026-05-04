import React from 'react';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Greeting Section */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Welcome back, Mohammed</h1>
        <p className="text-zinc-500">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Section Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-32 border rounded-xl bg-white p-6 flex items-center justify-center text-zinc-400">
          Stats card placeholder
        </div>
        <div className="h-32 border rounded-xl bg-white p-6 flex items-center justify-center text-zinc-400">
          Stats card placeholder
        </div>
        <div className="h-32 border rounded-xl bg-white p-6 flex items-center justify-center text-zinc-400">
          Stats card placeholder
        </div>
      </div>

      {/* Main Grid Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-96 border rounded-xl bg-white p-6 flex items-center justify-center text-zinc-400">
          Performance Over Time (Chart Placeholder)
        </div>
        <div className="h-96 border rounded-xl bg-white p-6 flex items-center justify-center text-zinc-400">
          Recent Orders (List Placeholder)
        </div>
      </div>

      {/* Secondary Grid Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 border rounded-xl bg-white p-6 flex items-center justify-center text-zinc-400">
          System Health Placeholder
        </div>
        <div className="h-64 border rounded-xl bg-white p-6 flex items-center justify-center text-zinc-400">
          Upcoming Tasks Placeholder
        </div>
      </div>

      {/* Table Placeholder */}
      <div className="border rounded-xl bg-white p-6 h-96 flex items-center justify-center text-zinc-400">
        Asset Distribution (Table Placeholder)
      </div>
    </div>
  );
}

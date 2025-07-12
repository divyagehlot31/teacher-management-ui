'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function DashboardPage() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="ml-60 p-6 w-full bg-white">
<Header toggleSidebar={() => {}} />

        {/* Dashboard Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🏠 Dashboard</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">👩‍🏫 Total Teachers</h3>
            <p className="text-3xl font-bold text-blue-600">25</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">📚 Active Classes</h3>
            <p className="text-3xl font-bold text-green-600">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">🕒 Pending Requests</h3>
            <p className="text-3xl font-bold text-yellow-500">4</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">📅 Upcoming Festivals</h3>
            <p className="text-3xl font-bold text-purple-600">3</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow border mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Recent Activities</h3>
          <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
            <li>New teacher added: Meera Shah</li>
            <li>Time table updated for Class 9th</li>
            <li>Science fair scheduled for next week</li>
            <li>Student feedback submitted for Jay Patel</li>
          </ul>
        </div>

        {/* Upcoming Festivals */}
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎉 Upcoming Festivals</h3>
          <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
            <li>Independence Day - 15th August</li>
            <li>Raksha Bandhan - 19th August</li>
            <li>Teacher’s Day - 5th September</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

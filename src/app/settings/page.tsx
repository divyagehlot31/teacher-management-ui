'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function SettingsPage() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="ml-60 p-6 w-full bg-white min-h-screen">
        <Header toggleSidebar={function (): void {
                  throw new Error('Function not implemented.');
              } } />

        <h2 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Settings</h2>

        {/* Profile Info */}
        <div className="bg-white border p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">👤 Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value="Divya Gehlot"
              disabled
              className="bg-gray-100 border rounded-lg p-3 text-gray-500"
            />
            <input
              type="email"
              value="divya@email.com"
              disabled
              className="bg-gray-100 border rounded-lg p-3 text-gray-500"
            />
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-white border p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">🎨 Theme</h3>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="radio" name="theme" disabled checked />
              Light
            </label>
            <label className="flex items-center gap-2 text-gray-400">
              <input type="radio" name="theme" disabled />
              Dark
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">🔔 Notifications</h3>
          <label className="flex items-center gap-2 text-gray-500">
            <input type="checkbox" checked disabled />
            Email Notifications
          </label>
          <label className="flex items-center gap-2 text-gray-400 mt-2">
            <input type="checkbox" disabled />
            SMS Notifications
          </label>
        </div>

        {/* Language */}
        <div className="bg-white border p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">🌐 Language</h3>
          <select
            value="English"
            disabled
            className="bg-gray-100 border rounded-lg p-3 text-gray-500"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>
        </div>
      </main>
    </div>
  );
}

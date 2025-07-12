'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white p-4 shadow-md flex justify-between items-center h-16 border-b">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Teacher Management</h1>
      </div>

      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
        D
      </div>
    </header>
  );
}

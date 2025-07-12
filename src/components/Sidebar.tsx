'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UsersIcon,
  AcademicCapIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Teachers', icon: AcademicCapIcon, href: '/teachers' },
  { name: 'Students', icon: UsersIcon, href: '/students' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
];

export default function Sidebar({ isOpen = true }: { isOpen?: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:block w-60 h-[calc(100vh-4rem)] bg-white border-r px-4 py-6 fixed top-16 left-0 z-30`}
    >
      <h2 className="text-lg font-bold mb-6 text-gray-800 px-2">🎓 School Panel</h2>
      <nav className="space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5" />
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

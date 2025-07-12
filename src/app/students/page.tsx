'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Link from 'next/link';

const grades = ['5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

export default function StudentsPage() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="ml-60 p-6 w-full bg-white">
        <Header toggleSidebar={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🎒 All Classes</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {grades.map((grade) => (
            <Link
              key={grade}
              href={`/students/${grade}`}
              className="bg-white border border-gray-200 text-center rounded-xl p-5 shadow hover:shadow-md hover:bg-gray-50 transition text-gray-800 font-medium"
            >
              Class {grade}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

'use client';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TeacherCard from '@/components/TeacherCard';

const teachers = [
  { id: 1, name: 'Riya Sharma', role: 'Science', email: 'riya@gmail.com' },
  { id: 2, name: 'Jay Patel', role: 'Maths', email: 'jay@gmail.com' },
  { id: 3, name: 'Meera Shah', role: 'English', email: 'meera@gmail.com' },
];

export default function TeachersPage() {
  return (
  <div className="flex w-full">
    <Sidebar />
    <main className="ml-60 p-6 w-full bg-white">
      <Header toggleSidebar={() => {}} />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">👩‍🏫 Teachers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <TeacherCard key={t.id} {...t} />
        ))}
      </div>
    </main>
  </div>
  );
}
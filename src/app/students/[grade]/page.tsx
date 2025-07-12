'use client';

import { useParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StudentCard from '@/components/StudentCard';

const students = [
  { name: 'Riya Sharma', grade: '5th', email: 'riya@gmail.com' },
  { name: 'Jay Patel', grade: '5th', email: 'jay@gmail.com' },
  { name: 'Meera Shah', grade: '7th', email: 'meera@gmail.com' },
  { name: 'Reeya Shah', grade: '8th', email: 'reeya@gmail.com' },
  { name: 'Jai Prajapati', grade: '8th', email: 'jai@gmail.com' },
  { name: 'Mira Sam', grade: '9th', email: 'mira@gmail.com' },
  { name: 'Riya Sharma', grade: '10th', email: 'riya@gmail.com' },
  { name: 'Jay Patel', grade: '9th', email: 'jay@gmail.com' },
  { name: 'Meera Shah', grade: '11th', email: 'meera@gmail.com' },
  { name: 'Reeya Shah', grade: '9th', email: 'reeya@gmail.com' },
  { name: 'Jai Prajapati', grade: '10th', email: 'jai@gmail.com' },
  { name: 'Mira Sam', grade: '9th', email: 'mira@gmail.com' },
];

export default function GradeStudentList() {
  const router = useRouter(); 
  const params = useParams();
  const grade = decodeURIComponent(params.grade?.toString() ?? '');

  const gradeStudents = students.filter((s) => s.grade === grade);

  if (gradeStudents.length === 0) {
    return (
      <div className="flex w-full">
        <Sidebar />
        <main className="ml-60 p-6 w-full bg-white">
          <Header toggleSidebar={function (): void {
            throw new Error('Function not implemented.');
          } } />
          <h2 className="text-xl text-red-600">No students found for class {grade}</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="ml-60 p-6 w-full bg-white">
        <Header />
        <button onClick={() => router.back()} className="text-2xl font-bold mb-6 text-gray-800">
          ⬅️  <span > 📘 Students of Class {grade}</span>
        </button>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gradeStudents.map((s, i) => (
            <StudentCard key={i} {...s} />
          ))}
        </div>
      </main>
    </div>
  );
}

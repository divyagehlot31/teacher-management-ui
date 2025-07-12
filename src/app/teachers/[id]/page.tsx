'use client';

import { useRouter, useParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const teachers = [
  {
    id: '1',
    name: 'Riya Sharma',
    role: 'Science Faculty',
    email: 'riya@gmail.com',
    phone: '+91 9999999991',
    address: 'Ahmedabad, Gujarat',
    schedule: [
      ['Monday', '8:00 - 10:00'],
      ['Wednesday', '10:00 - 12:00'],
      ['Friday', '9:00 - 11:00'],
    ],
  },
  {
    id: '2',
    name: 'Jay Patel',
    role: 'Maths Faculty',
    email: 'jay@gmail.com',
    phone: '+91 9999999992',
    address: 'Surat, Gujarat',
    schedule: [
      ['Tuesday', '8:00 - 10:00'],
      ['Thursday', '10:00 - 12:00'],
    ],
  },
  {
    id: '3',
    name: 'Meera Shah',
    role: 'English Faculty',
    email: 'meera@gmail.com',
    phone: '+91 9999999993',
    address: 'Vadodara, Gujarat',
    schedule: [
      ['Monday', '9:00 - 11:00'],
      ['Wednesday', '1:00 - 3:00'],
    ],
  },
];

export default function TeacherProfilePage() {
  const router = useRouter();
  const params = useParams(); 
  const id = params.id?.toString(); 

  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div className="flex w-full">
        <Sidebar />
        <main className="ml-60 p-6 w-full bg-white">
          <Header toggleSidebar={function (): void {
            throw new Error('Function not implemented.');
          } } />
          <h2 className="text-xl text-red-600">Teacher not found</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="ml-60 p-6 w-full bg-white">
        <Header toggleSidebar={function (): void {
          throw new Error('Function not implemented.');
        } } />
      <button onClick={() => router.back()} className="text-2xl font-bold mb-6 text-gray-800">
          ⬅️  <span > 👤 Teacher Profile</span>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow border">
            <p className="text-sm text-gray-500 mb-1">Name</p>
            <p className="text-lg font-semibold text-gray-800">{teacher.name}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border">
            <p className="text-sm text-gray-500 mb-1">Role</p>
            <p className="text-lg font-semibold text-gray-800">{teacher.role}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border">
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <p className="text-lg font-semibold text-gray-800">{teacher.email}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border">
            <p className="text-sm text-gray-500 mb-1">Phone</p>
            <p className="text-lg font-semibold text-gray-800">{teacher.phone}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border sm:col-span-2">
            <p className="text-sm text-gray-500 mb-1">Address</p>
            <p className="text-lg font-semibold text-gray-800">{teacher.address}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-bold mb-4 text-gray-800">🕓 Teaching Schedule</h3>
          <table className="w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="p-3 border">Day</th>
                <th className="p-3 border">Time Slot</th>
              </tr>
            </thead>
            <tbody>
              {teacher.schedule.map(([day, time], idx) => (
                <tr key={idx} className="text-gray-700 text-sm">
                  <td className="p-3 border">{day}</td>
                  <td className="p-3 border">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

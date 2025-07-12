import Link from 'next/link';

interface TeacherCardProps {
  id: string | number;
  name: string;
  role: string;
  email: string;
}

export default function TeacherCard({ id, name, role, email }: TeacherCardProps) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
          ID: {id}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{email}</p>
      <Link
        href={`/teachers/${id}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
      >
        View Profile
      </Link>
    </div>
  );
}
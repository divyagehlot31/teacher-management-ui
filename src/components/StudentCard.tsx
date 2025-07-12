interface StudentCardProps {
  name: string;
  grade: string;
  email: string;
}

export default function StudentCard({ name, grade, email }: StudentCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-500 text-sm">Grade: {grade}</p>
      <p className="text-gray-500 text-sm">{email}</p>
    </div>
  );
}
export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 left-0 bg-white border-t shadow-sm h-14 flex items-center justify-center z-40">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Teacher Management Portal | Made by DG 💻
      </p>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hominidos. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

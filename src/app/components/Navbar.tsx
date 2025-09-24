"use client";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Hominidos</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-600 cursor-pointer">Nosotros</li>
          <li className="hover:text-blue-600 cursor-pointer">Proyectos</li>
          <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

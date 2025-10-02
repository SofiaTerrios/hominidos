"use client";
export default function Footer() {
  return (
    <footer className="bg-[#F8F5F1]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#2C2C2C] font-montserrat font-bold text-lg mb-4">
              Sobre el Proyecto
            </h3>
            <p className="text-[#2C2C2C] font-opensans">
              Explorando la evolución humana a través del tiempo y el espacio.
            </p>
          </div>
          <div>
            <h3 className="text-[#2C2C2C] font-montserrat font-bold text-lg mb-4">
              Enlaces
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#2C2C2C] hover:text-yellow transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#2C2C2C] hover:text-yellow transition-colors"
                >
                  Línea del Tiempo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <blockquote className="text-[#2C2C2C] font-merriweather italic">
              "Conocer nuestra historia es entender nuestro presente"
            </blockquote>
          </div>
        </div>
        <div className="mt-8 border-t border-beige/20 pt-8">
          <p className="text-center text-[#F8F5F1] text-sm">
            © 2025 Proyecto Homínidos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

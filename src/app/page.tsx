"use client";
import Footer from "./components/Footer";
import InteractiveGlobe from "./components/InteractiveGlobe";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}

      <InteractiveGlobe />

      {/* Contenido principal */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">Nosotros</h2>
          <p className="text-gray-600">
            Somos un grupo apasionado por la tecnología, la ciencia y la
            innovación.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">Proyectos</h2>
          <p className="text-gray-600">
            Creamos soluciones creativas que combinan diseño y desarrollo
            moderno.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">Comunidad</h2>
          <p className="text-gray-600">
            Únete a nuestra red de colaboradores para crecer juntos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

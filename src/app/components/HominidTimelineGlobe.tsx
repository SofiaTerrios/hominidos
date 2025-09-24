"use client";

import { X } from "lucide-react";
import React, { useState } from "react";
import Globe from "react-globe.gl";
import { useRouter } from "next/navigation";

interface Event {
  year: string;
  text: string;
}

interface Topic {
  id: string;
  title: string;
  description: string;
  lat: number;
  lng: number;
  events: Event[];
}

const topics: Topic[] = [
  {
    id: "evolucion",
    title: "Evolución Humana y Diversidad",
    description:
      "Del origen en África hasta la diversidad de especies humanas.",
    lat: 10,
    lng: -20,
    events: [
      {
        year: "300,000 a.C.",
        text: "Primer Homo sapiens (Jebel Irhoud, Marruecos).",
      },
      { year: "70,000 a.C.", text: "Migración fuera de África." },
      { year: "50,000 a.C.", text: "Encuentro con Neandertales." },
      { year: "40,000 a.C.", text: "Misterio de los Denisovanos." },
      { year: "30,000 a.C.", text: "Desaparición de los Neandertales." },
      { year: "74,000 a.C.", text: "Erupción del volcán Toba." },
    ],
  },
  {
    id: "genetica",
    title: "Genética y Ciencia",
    description: "Descubrimientos sobre ADN y variaciones humanas.",
    lat: 20,
    lng: 50,
    events: [
      { year: "1953", text: "Descubrimiento del ADN (Watson y Crick)." },
      { year: "2000s", text: "ADN en un mapa: pruebas genéticas." },
      { year: "Hoy", text: "ADN fantasma en nuestros genes." },
    ],
  },
  {
    id: "raza",
    title: "Historia del Concepto de Raza",
    description: "Cómo la ciencia abordó y superó la idea de razas.",
    lat: -10,
    lng: 60,
    events: [
      { year: "1700s", text: "Clasificación de Linnaeus y Blumenbach." },
      { year: "1800s", text: "Frenología y pseudociencias." },
      { year: "1900s", text: "Eugenesia y sus errores." },
      {
        year: "Hoy",
        text: "La genética moderna rechaza las razas biológicas.",
      },
    ],
  },
  {
    id: "lenguaje",
    title: "Origen del Lenguaje Humano",
    description: "Hipótesis sobre el surgimiento del lenguaje.",
    lat: -30,
    lng: -40,
    events: [
      { year: "Prehistoria", text: "Área de Broca y evolución biológica." },
      { year: "Prehistoria", text: "Lenguaje y pensamiento (Vygotsky)." },
      {
        year: "30,000 a.C.",
        text: "Arte rupestre como primeras manifestaciones.",
      },
    ],
  },
  {
    id: "agricola",
    title: "Revolución Agrícola",
    description: "Cómo la agricultura transformó la humanidad.",
    lat: 40,
    lng: -80,
    events: [
      { year: "10,000 a.C.", text: "Domesticación de trigo, cabras y ovejas." },
      { year: "8,000 a.C.", text: "Sedentarismo y aldeas." },
      { year: "6,000 a.C.", text: "Irrigación, arado y cerámica." },
    ],
  },
  {
    id: "cultural",
    title: "Adaptaciones Culturales",
    description: "Tradiciones, religiones y tecnologías humanas.",
    lat: 60,
    lng: 10,
    events: [
      { year: "Prehistoria", text: "Lenguas y cosmovisiones." },
      { year: "5,000 a.C.", text: "Chozas, cerámica e irrigación." },
      {
        year: "Historia",
        text: "Intercambio cultural por migraciones y comercio.",
      },
    ],
  },
  {
    id: "curiosidades",
    title: "Curiosidades Humanas",
    description: "Hallazgos sorprendentes de nuestra historia.",
    lat: -50,
    lng: -60,
    events: [
      { year: "30,000 a.C.", text: "Arte Neandertal." },
      { year: "20,000 a.C.", text: "Primera ropa: supervivencia, no moda." },
      { year: "Hoy", text: "Genes viajan con la comida y culturas." },
    ],
  },
];

export default function HominidTimelineGlobe() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const router = useRouter();

  return (
    <div className="relative h-screen w-full">
      {/* 🌍 Globo */}
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={topics}
        labelLat={(d) => (d as Topic).lat}
        labelLng={(d) => (d as Topic).lng}
        labelText={(d) => (d as Topic).title}
        labelSize={2}
        labelDotRadius={0.4}
        labelColor={() => "lightblue"}
        onLabelClick={(d) => router.push(`/timeline/${(d as Topic).id}`)}
      />

      {/* 📖 Modal Línea de Tiempo */}
      {selectedTopic && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-3/4 max-h-[80vh] overflow-y-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedTopic.title}</h2>
              <button
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => setSelectedTopic(null)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-gray-600 mb-6">{selectedTopic.description}</p>

            {/* Línea de Tiempo */}
            <div className="border-l-4 border-blue-500 pl-6">
              {selectedTopic.events.map((event, i) => (
                <div key={i} className="mb-6">
                  <div className="text-sm text-gray-400">{event.year}</div>
                  <div className="text-lg font-semibold">{event.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

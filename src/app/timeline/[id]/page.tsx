"use client";

import { useParams } from "next/navigation";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

// Ejemplo de datos
const topics = [
  {
    id: "evolucion-humana",
    title: "Evolución Humana y Diversidad",
    timeline: [
      {
        year: "300,000 a.C.",
        title: "Primer humano moderno",
        description:
          "El fósil de Jebel Irhoud en Marruecos es considerado uno de los primeros Homo sapiens.",
      },
      {
        year: "200,000 a.C.",
        title: "Salida de África",
        description:
          "Los primeros humanos modernos comenzaron a migrar fuera de África.",
      },
      {
        year: "70,000 a.C.",
        title: "Migración global",
        description:
          "Expansión hacia Asia y Europa con distintas rutas migratorias.",
      },
    ],
  },
  {
    id: "otros-humanos",
    title: "Otros Humanos",
    timeline: [
      {
        year: "60,000 a.C.",
        title: "Encuentro con Neandertales",
        description:
          "Los Homo sapiens se cruzaron con los neandertales en Europa y Asia.",
      },
      {
        year: "50,000 a.C.",
        title: "Denisovanos",
        description:
          "Descubiertos en la cueva de Denisova en Siberia. Aportaron genes a poblaciones modernas.",
      },
    ],
  },
];

export default function TimelinePage() {
  const params = useParams();
  const topic = topics.find((t) => t.id === params.id);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p>No se encontró este tema.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">{topic.title}</h1>
      <VerticalTimeline>
        {topic.timeline.map((event, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={event.year}
            contentStyle={{ background: "rgb(30,41,59)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(30,41,59)" }}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
          >
            <h3 className="font-semibold text-xl">{event.title}</h3>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

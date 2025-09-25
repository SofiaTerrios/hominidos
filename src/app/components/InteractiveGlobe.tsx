import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import SpiralTimeline from "./SpiralTimeline";

type TopicKey =
  | "evolution"
  | "diversity"
  | "race"
  | "language"
  | "agriculture"
  | "culturalAdaptations"
  | "curiosities";

type Topic = {
  key: TopicKey;
  label: string;
  icon: string;
  color: string;
  position: { x: number; y: number };
};

const initialTopics: Topic[] = [
  {
    key: "evolution",
    label: "Evolución Humana",
    icon: "🧍‍♂️",
    color: "bg-gradient-to-br from-orange via-orange to-brown",
    position: { x: 150, y: 125 },
  },
  {
    key: "diversity",
    label: "Genética y Ciencia",
    icon: "🧬",
    color: "bg-gradient-to-br from-brown via-brown to-orange",
    position: { x: 800, y: 100 },
  },
  {
    key: "race",
    label: "Concepto de Raza",
    icon: "🤝",
    color: "bg-gradient-to-br from-orange via-orange to-yellow",
    position: { x: 850, y: 325 },
  },
  {
    key: "language",
    label: "Lenguaje Humano",
    icon: "💬",
    color: "bg-gradient-to-br from-yellow via-yellow to-orange",
    position: { x: 700, y: 425 },
  },
  {
    key: "agriculture",
    label: "Revolución Agrícola",
    icon: "🌾",
    color: "bg-gradient-to-br from-blue via-blue to-yellow",
    position: { x: 350, y: 425 },
  },
  {
    key: "culturalAdaptations",
    label: "Adaptaciones Culturales",
    icon: "🎨",
    color: "bg-gradient-to-br from-blue via-blue to-brown",
    position: { x: 100, y: 325 },
  },
  {
    key: "curiosities",
    label: "Curiosidades Humanas",
    icon: "✨",
    color: "bg-gradient-to-br from-yellow via-yellow to-blue",
    position: { x: 200, y: 225 },
  },
];

export default function InteractiveGlobeEarthColors() {
  const [topics, setTopics] = useState(initialTopics);
  const [pulseIndex, setPulseIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number>(2000);
  const [showTimeline, setShowTimeline] = useState(false);
  const [draggedTopic, setDraggedTopic] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeCenter = { x: 500, y: 250 };

  const years = [1900, 1920, 1940, 1960, 1980, 2000, 2020];

  const floatingIcons = ["🔥", "🌍", "💡", "🦴", "🧠", "⚡", "🌟", "🔬"];
  const [iconPositions, setIconPositions] = useState<
    {
      left: string;
      top: string;
      delay: string;
      duration: string;
      icon: string;
    }[]
  >([]);

  useEffect(() => {
    setIconPositions(
      floatingIcons.map((icon) => ({
        icon,
        left: `${Math.random() * 85 + 5}%`,
        top: `${Math.random() * 85 + 5}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${4 + Math.random() * 3}s`,
      }))
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % topics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [topics.length]);

  const handleDrag = useCallback((info: PanInfo, topicKey: string) => {
    setTopics((prev) =>
      prev.map((topic) =>
        topic.key === topicKey
          ? {
              ...topic,
              position: {
                x: topic.position.x + info.delta.x,
                y: topic.position.y + info.delta.y,
              },
            }
          : topic
      )
    );
  }, []);

  const handleDragEnd = useCallback(
    (info: PanInfo, topicKey: string) => {
      setDraggedTopic(null);
      const topic = topics.find((t) => t.key === topicKey);
      if (!topic) return;

      const distance = Math.sqrt(
        Math.pow(topic.position.x - globeCenter.x, 2) +
          Math.pow(topic.position.y - globeCenter.y, 2)
      );

      if (distance < 80) {
        setShowTimeline(true);
      }
    },
    [topics]
  );

  const getDistance = (
    pos1: { x: number; y: number },
    pos2: { x: number; y: number }
  ) => {
    return Math.sqrt(
      Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2)
    );
  };

  if (showTimeline) {
    // Aquí retornarías el SpiralTimeline component
    return (
      <div>
        <SpiralTimeline />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col items-center justify-center py-8 px-4 overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 mb-8 z-20 relative">
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
          >
            Explora la Historia Humana
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black/80 mt-2 text-lg"
          >
            Arrastra los temas al centro para descubrir su evolución temporal
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 bg-brown/10 backdrop-blur-md rounded-xl px-6 py-3 border border-brown/20"
        >
          <label className="text-black font-medium">Año:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="px-4 py-2 rounded-lg bg-beige/80 backdrop-blur-md text-black border border-brown/30 focus:outline-none focus:ring-2 focus:ring-orange"
          >
            {years.map((y) => (
              <option key={y} value={y} className="text-black">
                {y}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-6xl h-[600px] bg-gradient-to-br from-beige/30 to-orange/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-brown/20"
      >
        {/* Globo central con efectos mejorados */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-yellow via-orange to-brown shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-beige/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute inset-2 rounded-full border border-orange/60"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Partículas orbitales */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-beige rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  rotate: {
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: `${60 + i * 10}px 0px`,
                  marginLeft: "-4px",
                  marginTop: "-4px",
                }}
              />
            ))}

            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              🌍
            </div>
          </div>

          {/* Anillo de energía */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-orange/50"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "180px",
              height: "180px",
              left: "-20px",
              top: "-20px",
            }}
          />
        </motion.div>

        {/* Nodos arrastrables con efectos mejorados */}
        {topics.map((topic, index) => (
          <div key={topic.key}>
            {/* Líneas de conexión animadas */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient
                  id={`gradient-${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#E4572E" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8D6E63" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FFD166" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              <motion.line
                x1={globeCenter.x}
                y1={globeCenter.y}
                x2={topic.position.x}
                y2={topic.position.y}
                stroke={`url(#gradient-${index})`}
                strokeWidth="3"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  strokeDashoffset: [0, -30],
                }}
                transition={{
                  pathLength: { duration: 1.5, ease: "easeInOut" },
                  strokeDashoffset: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />

              {/* Pulsos de datos mejorados */}
              {pulseIndex === index && (
                <motion.circle
                  r="6"
                  fill="rgba(228,87,46,0.9)"
                  className="drop-shadow-lg"
                  initial={{ r: 6, opacity: 1 }}
                  animate={{ r: [6, 12, 6], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <animateMotion
                    dur="2.5s"
                    repeatCount="1"
                    path={`M ${globeCenter.x} ${globeCenter.y} L ${topic.position.x} ${topic.position.y}`}
                  />
                </motion.circle>
              )}
            </svg>

            {/* Nodo arrastrable */}
            <motion.div
              drag
              dragMomentum={false}
              onDrag={(event, info) => handleDrag(info, topic.key)}
              onDragStart={() => setDraggedTopic(topic.key)}
              onDragEnd={(event, info) => handleDragEnd(info, topic.key)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing z-10"
              style={{
                left: topic.position.x,
                top: topic.position.y,
              }}
              whileHover={{ scale: 1.2 }}
              whileDrag={{ scale: 1.3, zIndex: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl text-white shadow-2xl ${topic.color} backdrop-blur-sm border border-beige/30`}
                animate={
                  draggedTopic === topic.key
                    ? {
                        boxShadow: [
                          "0 0 20px rgba(228,87,46,0.5)",
                          "0 0 40px rgba(255,209,102,0.8)",
                          "0 0 20px rgba(228,87,46,0.5)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                {topic.icon}

                {pulseIndex === index && (
                  <motion.div
                    className="absolute inset-0 border-2 border-orange rounded-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              <motion.div
                className="mt-3 text-center text-sm text-black w-28 font-medium bg-beige/90 backdrop-blur-sm rounded-lg py-1 px-2 border border-brown/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {topic.label}
              </motion.div>

              {/* Indicador de distancia al centro */}
              {draggedTopic === topic.key &&
                getDistance(topic.position, globeCenter) < 100 && (
                  <motion.div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange text-black px-3 py-1 rounded-full text-xs font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    ¡Suelta aquí!
                  </motion.div>
                )}
            </motion.div>
          </div>
        ))}

        {/* Iconos flotantes mejorados */}
        {iconPositions.map((iconData, index) => (
          <motion.div
            key={index}
            className="absolute text-3xl pointer-events-none opacity-30"
            style={{
              left: iconData.left,
              top: iconData.top,
              color: "#E4572E", // Orange color for floating icons
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: parseFloat(iconData.duration),
              delay: parseFloat(iconData.delay),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {iconData.icon}
          </motion.div>
        ))}

        {/* Partículas de fondo */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Leyenda mejorada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-wrap gap-6 justify-center bg-brown/10 backdrop-blur-md rounded-2xl p-6 border border-brown/20"
      >
        {topics.map((topic, index) => (
          <motion.div
            key={topic.key}
            className="flex items-center gap-3 text-sm bg-beige/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-brown/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(248,245,241,0.8)",
            }}
          >
            <span
              className={`w-4 h-4 rounded-full ${topic.color} shadow-lg`}
            ></span>
            <span className="text-black font-medium">{topic.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Instrucciones */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-center text-black/80 max-w-2xl"
      >
        <p className="text-lg">
          🎯 <strong>Arrastra</strong> cualquier tema hacia el globo central
          para explorar su línea de tiempo
        </p>
      </motion.div>
    </div>
  );
}

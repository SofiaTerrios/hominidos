import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpiralTimelineProps {
  selectedYear?: number;
  onBack?: () => void;
}

export default function SpiralTimeline({
  selectedYear = 2000,
  onBack,
}: SpiralTimelineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const timelineData = [
    {
      year: "7 MDA",
      event: "Separación de linajes humanos y chimpancés",
      icon: "🐒",
      color: "bg-gradient-to-br from-orange via-orange to-brown",
    },
    {
      year: "4 MDA",
      event: "Aparición de Australopithecus",
      icon: "🦴",
      color: "bg-gradient-to-br from-brown via-brown to-orange",
    },
    {
      year: "2.8 MDA",
      event: "Primeras herramientas de piedra",
      icon: "🔨",
      color: "bg-gradient-to-br from-orange via-orange to-yellow",
    },
    {
      year: "2 MDA",
      event: "Homo erectus y migración fuera de África",
      icon: "🚶‍♂️",
      color: "bg-gradient-to-br from-yellow via-yellow to-orange",
    },
    {
      year: "300,000 años",
      event: "Aparición del Homo sapiens",
      icon: "🧍‍♂️",
      color: "bg-gradient-to-br from-blue via-blue to-yellow",
    },
    {
      year: "70,000 años",
      event: "Gran migración humana",
      icon: "🌍",
      color: "bg-gradient-to-br from-blue via-blue to-brown",
    },
    {
      year: "40,000 años",
      event: "Arte rupestre y expresión simbólica",
      icon: "🎨",
      color: "bg-gradient-to-br from-yellow via-yellow to-blue",
    },
    {
      year: "12,000 años",
      event: "Revolución agrícola",
      icon: "🌾",
      color: "bg-gradient-to-br from-brown via-brown to-yellow",
    },
    {
      year: "5,000 años",
      event: "Primeras civilizaciones",
      icon: "🏛️",
      color: "bg-gradient-to-br from-blue via-blue to-orange",
    },
    {
      year: "Siglo XIX",
      event: "Revolución industrial",
      icon: "⚙️",
      color: "bg-gradient-to-br from-orange via-orange to-blue",
    },
    {
      year: "Siglo XX",
      event: "Era digital y genética",
      icon: "💻",
      color: "bg-gradient-to-br from-yellow via-yellow to-brown",
    },
    {
      year: "Siglo XXI",
      event: "Biotecnología y futuro",
      icon: "🧬",
      color: "bg-gradient-to-br from-brown via-brown to-blue",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedEvent === null) {
        setCurrentIndex((prev) => (prev + 1) % timelineData.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [timelineData.length, selectedEvent]);

  const handleEventClick = (index: number) => {
    if (selectedEvent === index) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(index);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col overflow-hidden relative">
      {/* Botón de regreso */}
      {onBack && (
        <motion.button
          onClick={onBack}
          className="absolute top-8 left-8 bg-brown/80 backdrop-blur-md text-black px-6 py-3 rounded-xl border border-brown/30 hover:bg-brown transition-all z-50 font-medium"
          whileHover={{ scale: 1.05, backgroundColor: "#8D6E63" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          ← Volver al Globo
        </motion.button>
      )}

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-8 pb-4 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Línea de Tiempo de la Humanidad
        </h2>
        <p className="text-black/70 text-lg max-w-2xl mx-auto">
          Haz clic en cualquier evento para conocer más detalles
        </p>
      </motion.div>

      {/* Contenedor principal con layout horizontal */}
      <div className="flex-1 flex items-center justify-center p-8 gap-8">
        {/* Contenedor de la espiral */}
        <div className="relative w-[70vw] max-w-[700px] h-[70vw] max-h-[600px] aspect-square">
          {/* Espiral base minimalista */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 600">
            <defs>
              <linearGradient
                id="spiralGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#E4572E" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8D6E63" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFD166" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Espiral principal simplificada */}
            <motion.path
              d="M 350 300 m -60 0 a 60 60 0 0 1 120 0 a 120 120 0 0 1 -240 0 a 180 180 0 0 1 360 0 a 240 240 0 0 1 -480 0 a 280 280 0 0 1 560 0"
              fill="none"
              stroke="url(#spiralGradient)"
              strokeWidth="3"
              strokeDasharray="8,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.7,
                strokeDashoffset: [0, -100],
              }}
              transition={{
                pathLength: { duration: 3, ease: "easeInOut" },
                opacity: { duration: 1 },
                strokeDashoffset: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            {/* Círculos concéntricos sutiles */}
            {[80, 160, 240].map((radius, i) => (
              <motion.circle
                key={i}
                cx="350"
                cy="300"
                r={radius}
                fill="none"
                stroke="rgba(228,87,46,0.15)"
                strokeWidth="1"
                strokeDasharray="1,6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 0.3,
                  scale: 1,
                  rotate: 360,
                }}
                transition={{
                  opacity: { delay: 1 + i * 0.3 },
                  scale: { delay: 1 + i * 0.3 },
                  rotate: {
                    duration: 40 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />
            ))}
          </svg>

          {/* Eventos en la espiral con mejor espaciado */}
          {timelineData.map((item, index) => {
            const angle = (index / timelineData.length) * 3.5 * Math.PI;
            const radius = 70 + index * 20;
            const x = 350 + radius * Math.cos(angle);
            const y = 300 + radius * Math.sin(angle);

            const isActive = index === currentIndex;
            const isSelected = selectedEvent === index;

            return (
              <motion.div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: isSelected ? 1.2 : isActive ? 1.1 : 1,
                }}
                transition={{
                  delay: index * 0.1,
                  scale: { duration: 0.3 },
                }}
                onClick={() => handleEventClick(index)}
                whileHover={{ scale: isSelected ? 1.3 : 1.15 }}
              >
                <motion.div
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white shadow-xl ${item.color} border-2 border-white/50`}
                  animate={
                    isActive && !isSelected
                      ? {
                          boxShadow: [
                            "0 0 15px rgba(228,87,46,0.4)",
                            "0 0 25px rgba(255,209,102,0.6)",
                            "0 0 15px rgba(228,87,46,0.4)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <span className="relative z-10">{item.icon}</span>

                  {/* Anillo de selección */}
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 border-3 border-orange rounded-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Información del evento - solo para eventos muy específicos si es necesario */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      className="absolute left-16 top-1/2 -translate-y-1/2 z-50"
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        x: -20,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div className="bg-gradient-to-br from-brown/95 to-brown/85 backdrop-blur-lg text-black p-4 rounded-xl border-2 border-orange/30 min-w-[200px] shadow-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-lg shadow-lg`}
                          >
                            {item.icon}
                          </div>
                          <h4 className="text-sm font-bold text-orange">
                            {item.year}
                          </h4>
                        </div>
                        <p className="text-black text-xs leading-relaxed">
                          {item.event}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Centro de la espiral simplificado */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow via-orange to-brown flex items-center justify-center text-2xl shadow-2xl border-4 border-beige/50"
              whileHover={{ scale: 1.1 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(228,87,46,0.4)",
                  "0 0 35px rgba(255,209,102,0.6)",
                  "0 0 20px rgba(228,87,46,0.4)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
              <span className="relative z-10">🌟</span>
            </motion.div>
          </motion.div>

          {/* Partículas sutiles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-orange/20"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
                y: [0, -80, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Panel de información lateral */}
        <motion.div
          className="w-80 bg-gradient-to-br from-brown/15 via-orange/10 to-yellow/15 backdrop-blur-sm text-black p-8 rounded-3xl border border-brown/20 shadow-2xl h-fit"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className={`w-16 h-16 rounded-2xl ${timelineData[currentIndex].color} flex items-center justify-center text-3xl shadow-xl border-2 border-white/30`}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <span className="relative z-10">
                {timelineData[currentIndex].icon}
              </span>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-1">
                {timelineData[currentIndex].year}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-orange to-yellow rounded-full mb-2"></div>
              <p className="text-black/60 text-sm">
                {selectedEvent !== null
                  ? "Evento seleccionado"
                  : "Navegación automática"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-black/90 font-medium">
              {timelineData[currentIndex].event}
            </p>

            <div className="pt-4 border-t border-brown/20">
              <p className="text-sm text-black/70 leading-relaxed">
                {selectedEvent !== null
                  ? "Toca el evento nuevamente para deseleccionar, o explora otros períodos de la historia humana."
                  : "Los eventos cambian automáticamente cada 4 segundos. Haz clic en cualquier punto para explorar en detalle."}
              </p>
            </div>

            {/* Indicador de progreso */}
            <div className="flex items-center gap-2 pt-4">
              <span className="text-xs text-black/60">Progreso:</span>
              <div className="flex-1 bg-brown/20 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-orange to-yellow h-full rounded-full"
                  style={{
                    width: `${
                      ((currentIndex + 1) / timelineData.length) * 100
                    }%`,
                  }}
                  animate={{
                    width: `${
                      ((currentIndex + 1) / timelineData.length) * 100
                    }%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-xs text-black/60">
                {currentIndex + 1}/{timelineData.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

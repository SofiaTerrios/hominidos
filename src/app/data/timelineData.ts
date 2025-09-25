// src/components/data/timelineData.ts

export type TopicKey =
  | "hominids"
  | "evolution"
  | "diversity"
  | "race"
  | "language"
  | "agriculture"
  | "culturalAdaptations"
  | "curiosities";

export type TimelineItem = {
  decadeLabel: string;
  yearApprox?: number;
  short: string;
  long: string;
};

export const timelineData: Record<TopicKey, TimelineItem[]> = {
  hominids: [
    {
      decadeLabel: "1.8 ma",
      yearApprox: -1800000,
      short: "Mandíbula en Georgia",
      long: "Descubrimiento de mandíbula antigua (~1.8 millones de años) en Georgia atribuido a Homo erectus, apuntando presencia temprana fuera de África.",
    },
    {
      decadeLabel: "300 ka",
      yearApprox: -300000,
      short: "Homo sapiens moderno (Jebel Irhoud)",
      long: "Fósiles de Jebel Irhoud (Marruecos) muestran Homo sapiens moderno hace ~300.000 años.",
    },
    {
      decadeLabel: "1920s",
      yearApprox: -192000,
      short: "Neandertales & Denisovanos",
      long: "Encuentros genéticos entre Homo sapiens, Neandertales y Denisovanos; coexistencia y mestizaje.",
    },
    {
      decadeLabel: "Recent",
      yearApprox: 2000,
      short: "Nuevas especies fósiles",
      long: "Hallazgos recientes como Homo naledi, Homo luzonensis y nuevas especies fósiles en distintas regiones.",
    },
  ],

  evolution: [
    {
      decadeLabel: "1900s",
      yearApprox: 1900,
      short: "Debates tempranos sobre evolución",
      long: "Teorías darwinianas amplificadas, comprensión del proceso evolutivo y clasificación de especies humanas.",
    },
    {
      decadeLabel: "1950s",
      yearApprox: 1950,
      short: "Síntesis moderna",
      long: "Integración de genética poblacional con selección natural explicada en la síntesis moderna.",
    },
    {
      decadeLabel: "2000s",
      yearApprox: 2000,
      short: "Evolución cultural y biológica",
      long: "Investigaciones que destacan cómo cultura y biología interactúan en la evolución humana actual.",
    },
  ],

  diversity: [
    {
      decadeLabel: "3000-4000 ya",
      yearApprox: -4000,
      short: "Adaptación a altitud en pueblos indígenas",
      long: "Poblaciones como los Tibetanos adaptadas genéticamente al oxígeno escaso; EPAS1, EGLN1 juegan papel clave. (~3.000 años atrás) · Estudios muestran mutaciones para tolerancia a hipoxia. :contentReference[oaicite:4]{index=4}",
    },
    {
      decadeLabel: "2020s",
      yearApprox: 2025,
      short: "Turkana y adaptaciones recientes",
      long: "Estudio confirma adaptaciones genéticas recientes en el pueblo Turkana (Kenya) para vivir en ambiente árido, calor extremo y con dietas particulares. :contentReference[oaicite:5]{index=5}",
    },
    {
      decadeLabel: "1950s-2000s",
      yearApprox: 2000,
      short: "Mix de linajes humanos",
      long: "El ADN de poblaciones actuales revela que somos un mosaico de linajes: neandertal, denisovano, sapiens, etc.",
    },
    {
      decadeLabel: "10000-8000 ya",
      yearApprox: -10000,
      short: "Tolerancia a lactosa",
      long: "Mutaciones que permitieron digerir lactosa en poblaciones agrícolas en Europa y Medio Oriente.",
    },
  ],

  race: [
    {
      decadeLabel: "1700s",
      yearApprox: 1750,
      short: "Linnaeus & Blumenbach",
      long: "Clasificaciones raciales propuestas: Linnaeus (1735) y Blumenbach (finales del siglo XVIII) definieron razas humanas basadas en rasgos físicos.",
    },
    {
      decadeLabel: "1800s-1900s",
      yearApprox: 1900,
      short: "Eugenesia y pseudociencia",
      long: "Movimientos como la eugenesia usaron la idea de razas para justificar desigualdades sociales; cráneos y frenología proliferaron.",
    },
    {
      decadeLabel: "1950s",
      yearApprox: 1950,
      short: "Declaraciones científicas contra la raza biológica",
      long: "Organismos como UNESCO declaran que la raza no es categoría biológica válida; genética moderna refuta bases de la raza.",
    },
    {
      decadeLabel: "1972",
      yearApprox: 1972,
      short: "Lewontin: más variación intra-populación que entre razas",
      long: "El biólogo Richard Lewontin propone que la mayoría de la variabilidad genética está dentro de poblaciones tradicionales, no entre ellas. :contentReference[oaicite:6]{index=6}",
    },
  ],

  language: [
    {
      decadeLabel: "30000-50000 ya",
      yearApprox: -50000,
      short: "Manifestaciones artísticas tempranas",
      long: "Pinturas rupestres y grabados en huesos indican que el lenguaje simbólico ya existía hace decenas de miles de años.",
    },
    {
      decadeLabel: "1930s",
      yearApprox: 1930,
      short: "Teorías de Vygotsky y área de Broca",
      long: "Se profundiza el estudio entre lenguaje, estructura cerebral y social; área de Broca reconocida como clave anatómica.",
    },
  ],

  agriculture: [
    {
      decadeLabel: "10000 ya",
      yearApprox: -10000,
      short: "Domesticación inicial",
      long: "Adopción de cultivos como trigo, arroz y domesticación de animales, inicio de aldeas. Revolución agrícola transformó sociedades.",
    },
    {
      decadeLabel: "9000-7000 ya",
      yearApprox: -9000,
      short: "Tecnologías agrícolas tempranas",
      long: "Desarrollo de herramientas como arado, cerámica, sistemas rudimentarios de irrigación en los primeros asentamientos.",
    },
  ],

  culturalAdaptations: [
    {
      decadeLabel: "10000-0 ya",
      yearApprox: -5000,
      short: "Lenguas, tradiciones y religión",
      long: "Desarrollo de lenguajes, creencias, mitos, rituales; cosmovisiones ligadas al entorno natural.",
    },
    {
      decadeLabel: "1950s-2000s",
      yearApprox: 1980,
      short: "Intercambio cultural",
      long: "Migraciones, comercio y conquistas permiten mezcla cultural, sincretismo lingüístico y artístico.",
    },
  ],

  curiosities: [
    {
      decadeLabel: "2005-2025",
      yearApprox: 2020,
      short: "Cerebro humano se encogió",
      long: "Estudios recientes sugieren que tras época de Homo sapiens tempranos con cerebros mayores, ha habido una ligera reducción del tamaño promedio cerebral, posiblemente por eficiencia metabólica.",
    },
    {
      decadeLabel: "65000 ya",
      yearApprox: -65000,
      short: "Arte neandertal",
      long: "Creaciones artísticas de Neandertales: pigmentos, grabados rudimentarios, decoración corporal, lo que muestra capacidades simbólicas.",
    },
    {
      decadeLabel: "100000-70000 ya",
      yearApprox: -100000,
      short: "Primera ropa / pieles",
      long: "Uso de pieles como vestimenta en humanos tempranos, protección y cultura material.",
    },
  ],
};

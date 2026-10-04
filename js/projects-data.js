/* ============================================================
   PROYECTOS — datos estructurados (ES / EN)
   Cada proyecto sigue la misma forma para poder añadir,
   editar o reordenar proyectos sin tocar el HTML ni el JS
   de renderizado.
   ============================================================ */

const PROJECTS_ES = [
  {
    id: "humedad-microbit",
    featured: true,
    title: "Humedad del suelo + micro:bit",
    phrase: "De medir la humedad del suelo a automatizar un sistema de riego con micro:bit.",
    tags: ["micro:bit", "Pensamiento computacional", "Sensores", "Prototipado", "ODS"],
    media: "assets/projects/humedad-foto1.jpg",
    video: null, // ej: "assets/projects/nombre-video.mp4" — si se indica, se reproduce en /proyectos en vez de la imagen
    gallery: [
      { type: "image", src: "assets/projects/humedad-foto1.jpg" },
      { type: "video", src: "assets/projects/humedad-video.mp4", poster: "assets/projects/humedad-foto1.jpg" },
      { type: "image", src: "assets/projects/humedad-foto2.jpg" }
    ],
    context: "5.º de Educación Primaria · actividad extraescolar de robótica.",
    objetivo: "El reto no era solo programar micro:bit, sino conseguir que micro:bit ayudara a resolver un problema real: saber cuánta agua necesita cada tipo de suelo.",
    flow: ["Medir", "Interpretar", "Detectar una necesidad", "Diseñar", "Construir", "Programar", "Probar", "Mejorar"],
    proceso: "En una primera fase, el alumnado trabajó con tres recipientes con distintos niveles de humedad. Micro:bit, conectado a un sensor/circuito externo, detecta la humedad a partir de la conductividad entre unas sondas colocadas en el suelo. Tras programar el sistema, el alumnado interpretó una representación mediante barras de LED para ordenar los suelos de mayor a menor humedad — trabajando programación, lectura de datos, representación visual y la relación entre un fenómeno físico y su representación digital.\n\nEn una segunda fase, el reto avanzó hacia el diseño de un sistema de riego automático: cuando la humedad es baja, micro:bit activa un servomotor que acciona un mecanismo físico para regar. El mecanismo se construyó con materiales sencillos, y durante la construcción aparecieron problemas reales —como el deterioro del cartón en contacto con el agua—, que el alumnado tuvo que resolver probando y mejorando el diseño. No todos los equipos llegaron al mismo resultado, y esa parte del proceso formó parte del aprendizaje.",
    demuestra: "Plantear retos tecnológicos vinculados a problemas reales, y acompañar al alumnado desde la programación hasta una solución física —entendiendo que prototipar implica probar, detectar problemas y mejorar. El proyecto puede vincularse además con el cuidado de las plantas y el uso responsable del agua.",
    note: null
  },
  {
    id: "equipo-ciencias",
    featured: true,
    title: "Equipo de Ciencias",
    phrase: "Una estructura de aprendizaje cooperativo en la que cada alumno se convierte en especialista de una parte del contenido.",
    tags: ["Aprendizaje cooperativo", "Grupos de expertos", "Instructional design", "Diseño de recursos"],
    media: "assets/projects/ciencias-foto1.jpg",
    video: null, // ej: "assets/projects/nombre-video.mp4" — si se indica, se reproduce en /proyectos en vez de la imagen
    gallery: [
      { type: "image", src: "assets/projects/ciencias-foto1.jpg" }
    ],
    context: "Estructura de aprendizaje cooperativo, adaptable a distintos niveles y contenidos.",
    objetivo: "No es una actividad puntual, sino una estructura reutilizable y adaptable, pensada para que el conocimiento de cada especialista sea necesario para resolver un reto común.",
    flow: ["Equipos", "Especialidades", "Grupos de expertos", "Equipo original", "Reto común"],
    proceso: "El alumnado trabaja en equipos de cuatro. Cada integrante recibe una especialidad —en la versión principal, un aparato del cuerpo humano: digestivo, respiratorio, circulatorio o excretor— y una acreditación con su nombre, especialidad y centro. Se reúnen primero en grupos de expertos, donde profundizan en su parte del contenido a partir de textos preparados para la actividad, fundamentados en la legislación vigente. Después regresan a su equipo original y reciben un caso clínico con una ficha de paciente (edad, síntomas, sistema afectado), que deben analizar utilizando el conocimiento de cada especialista.\n\nComo apoyo graduado, parte del alumnado podía conservar una copia del material de su especialidad; otros regresaban sin ella y decidían si tomar notas o retener la información. La misma estructura se ha adaptado también a otros contenidos, como las capas de la Tierra o la alimentación y nutrición —incluyendo dieta mediterránea, sostenibilidad, seguridad alimentaria e higiene—, lo que muestra que el diseño es transferible a distintos temas.",
    demuestra: "Diseñar una estructura de aprendizaje cooperativo capaz de convertir al alumnado en especialista de una parte del contenido, y hacer que el conocimiento compartido sea necesario para resolver un reto común —con capacidad de adaptarla a diferentes contenidos y niveles.",
    note: "No se publican los textos, casos ni fichas completas utilizados en la actividad."
  },
  {
    id: "cuerpoly",
    featured: true,
    title: "Cuerpoly",
    phrase: "Transformar el sistema nervioso y el aparato locomotor en un juego de tablero propio.",
    tags: ["Aprendizaje basado en juegos", "Creatividad", "Diseño de recursos", "Canva"],
    media: "assets/projects/cuerpoly-foto1.jpg",
    video: null, // ej: "assets/projects/nombre-video.mp4" — si se indica, se reproduce en /proyectos en vez de la imagen
    gallery: [
      { type: "image", src: "assets/projects/cuerpoly-foto1.jpg" }
    ],
    context: "6.º de Educación Primaria · Ciencias Naturales · duración aproximada de 2,5–3 semanas.",
    objetivo: "Transformar el contenido curricular —los sentidos, el sistema nervioso y el aparato locomotor— en una experiencia de aprendizaje basada en juegos.",
    flow: ["Aprender", "Sintetizar", "Relacionar", "Diseñar", "Crear", "Jugar", "Comprobar"],
    proceso: "Los grupos trabajaron sobre una plantilla inspirada en Monopoly, tomando decisiones sobre qué conceptos incluir, cómo relacionarlos, qué bloques de color utilizar, qué ilustrar y qué tarjetas crear —por ejemplo, transformando las calles en conceptos, la cárcel en un hospital, la comunidad en hábitos de vida o el dinero en puntos de cuidado. El recurso físico —tablero, casillas, grupos de color, ilustraciones y tarjetas— se diseñó y materializó en Canva, y se imprimió y laminó como prototipo para visualizar la propuesta.",
    demuestra: "Convertir contenido teórico en una experiencia práctica, manipulable y visual: síntesis de contenidos, relación entre conceptos, creatividad y diseño de recursos, dentro de una propuesta en la que es el propio alumnado quien diseña su versión del juego.",
    note: "Propuesta de aprendizaje en la que el alumnado diseña su propia versión del juego, acompañada de un prototipo que se diseñó y materializó en Canva para visualizar la idea; el tablero mostrado no fue creado directamente por el alumnado."
  },
  {
    id: "coche-lego-sensor",
    featured: true,
    title: "Coche LEGO + sensor de distancia",
    phrase: "Analizar una actividad ya diseñada y plantear una progresión de retos para enriquecerla.",
    tags: ["LEGO WeDo", "Sensores", "Rediseño de actividades", "Progresión de aprendizaje"],
    media: "assets/projects/coche-foto1.jpg",
    video: null, // ej: "assets/projects/nombre-video.mp4" — si se indica, se reproduce en /proyectos en vez de la imagen
    gallery: [
      { type: "image", src: "assets/projects/coche-foto1.jpg" },
      { type: "video", src: "assets/projects/coche-video.mp4", poster: "assets/projects/coche-foto1.jpg" }
    ],
    context: "Alumnado de 3.º a 6.º de Primaria · actividad basada en LEGO WeDo y su aplicación.",
    objetivo: "El alumnado seguía instrucciones de construcción, trabajaba con la programación proporcionada por la herramienta, construía el coche y observaba cómo reaccionaba ante objetos gracias a un sensor de distancia —con supervisión docente durante el desarrollo.",
    flow: ["Observar la actividad", "Detectar el potencial", "Proponer retos", "Progresión"],
    proceso: "El valor que quiero mostrar aquí no es haber diseñado esta experiencia desde cero, sino la capacidad de analizar una actividad ya existente y detectar cómo podría convertirse en una experiencia más rica mediante una progresión de retos. Como propuesta de rediseño —no como actividades necesariamente realizadas—: avanzar y detenerse al detectar un objeto; detectar el objeto y retroceder; modificar velocidad y comportamiento; y, por último, diseñar una estrategia propia para resolver el recorrido.",
    demuestra: "No solo utilizar recursos ya diseñados, sino saber analizarlos, detectar oportunidades y plantear una progresión de aprendizaje más rica.",
    note: "Los cuatro retos son una propuesta de rediseño; no se presentan como actividades necesariamente realizadas en el aula."
  }
];

const PROJECTS_EN = [
  {
    id: "humedad-microbit",
    featured: true,
    title: "Soil moisture + micro:bit",
    phrase: "From measuring soil moisture to automating a watering system with micro:bit.",
    tags: ["micro:bit", "Computational thinking", "Sensors", "Prototyping", "SDGs"],
    media: "assets/projects/humedad-foto1.jpg",
    video: null, // e.g. "assets/projects/name-video.mp4" — if set, plays on /proyectos instead of the image
    gallery: [
      { type: "image", src: "assets/projects/humedad-foto1.jpg" },
      { type: "video", src: "assets/projects/humedad-video.mp4", poster: "assets/projects/humedad-foto1.jpg" },
      { type: "image", src: "assets/projects/humedad-foto2.jpg" }
    ],
    context: "Year 5 Primary Education · robotics after-school activity.",
    objetivo: "The challenge wasn't just to program micro:bit — it was to get micro:bit to help solve a real problem: knowing how much water different types of soil actually need.",
    flow: ["Measure", "Interpret", "Spot a need", "Design", "Build", "Program", "Test", "Improve"],
    proceso: "In the first phase, students worked with three containers holding different levels of moisture. Micro:bit, connected to an external sensor circuit, detects moisture through the conductivity between probes placed in the soil. After programming the system, students interpreted an LED bar display to rank the soils from wettest to driest — working with programming, reading data, visual representation, and the link between a physical phenomenon and its digital representation.\n\nIn a second phase, the challenge moved on to designing an automatic watering system: when moisture is low, micro:bit triggers a servo motor that operates a physical mechanism to water the soil. The mechanism was built from simple materials, and real problems came up during construction — like cardboard deteriorating on contact with water — which students had to work through by testing and improving the design. Not every team reached the same result, and that part of the process was part of the learning too.",
    demuestra: "Setting technological challenges tied to real problems, and guiding students from programming through to a physical solution — understanding that prototyping means testing, spotting problems and improving. The project can also connect to caring for plants and the responsible use of water.",
    note: null
  },
  {
    id: "equipo-ciencias",
    featured: true,
    title: "Science Team",
    phrase: "A cooperative learning structure where each student becomes the specialist in one part of the content.",
    tags: ["Cooperative learning", "Expert groups", "Instructional design", "Resource design"],
    media: "assets/projects/ciencias-foto1.jpg",
    video: null, // e.g. "assets/projects/name-video.mp4" — if set, plays on /proyectos instead of the image
    gallery: [
      { type: "image", src: "assets/projects/ciencias-foto1.jpg" }
    ],
    context: "Cooperative learning structure, adaptable to different year groups and content areas.",
    objetivo: "This isn't a one-off activity — it's a reusable, adaptable structure designed so that each specialist's knowledge becomes necessary to solve a shared challenge.",
    flow: ["Teams", "Specialities", "Expert groups", "Home team", "Shared challenge"],
    proceso: "Students work in teams of four. Each member is assigned a speciality — in the main version, a body system: digestive, respiratory, circulatory or excretory — along with a credential showing their name, speciality and school. They first meet in expert groups, where they dig into their part of the content using materials prepared for the activity and grounded in current curriculum guidelines. They then return to their original team and receive a clinical case with a patient file (age, symptoms, affected system), which they analyse by combining each specialist's knowledge.\n\nAs a form of graduated support, some students could keep a copy of their speciality material; others returned without it and had to decide whether to take notes or rely on memory. The same structure has also been adapted to other content areas, such as the layers of the Earth or food and nutrition — including the Mediterranean diet, sustainability, food safety and hygiene — showing that the design is transferable across topics.",
    demuestra: "Designing a cooperative learning structure that turns students into specialists in one part of the content, and makes shared knowledge necessary to solve a common challenge — while being able to adapt it to different content areas and year groups.",
    note: "Full texts, cases and worksheets used in the activity are not published."
  },
  {
    id: "cuerpoly",
    featured: true,
    title: "Cuerpoly",
    phrase: "Turning the nervous system and the musculoskeletal system into a board game of their own.",
    tags: ["Game-based learning", "Creativity", "Resource design", "Canva"],
    media: "assets/projects/cuerpoly-foto1.jpg",
    video: null, // e.g. "assets/projects/name-video.mp4" — if set, plays on /proyectos instead of the image
    gallery: [
      { type: "image", src: "assets/projects/cuerpoly-foto1.jpg" }
    ],
    context: "Year 6 Primary Education · Natural Sciences · roughly 2.5–3 weeks.",
    objetivo: "Turning curriculum content — the senses, the nervous system and the musculoskeletal system — into a game-based learning experience.",
    flow: ["Learn", "Synthesise", "Connect", "Design", "Create", "Play", "Check"],
    proceso: "Groups worked from a template inspired by Monopoly, making decisions about which concepts to include, how to connect them, which colour groups to use, what to illustrate and which cards to create — for example, turning streets into concepts, jail into a hospital, the community chest into lifestyle habits, or money into care points. I designed and produced the physical resource in Canva — board, spaces, colour groups, illustrations and cards — which was printed and laminated as a prototype to visualise the proposal.",
    demuestra: "Turning theoretical content into a hands-on, visual experience: synthesising content, connecting concepts, creativity and resource design, within a proposal where students design their own version of the game.",
    note: "A learning proposal where students design their own version of the game, paired with a prototype I designed and produced in Canva to visualise the idea; the board shown was not made directly by students."
  },
  {
    id: "coche-lego-sensor",
    featured: true,
    title: "LEGO car + distance sensor",
    phrase: "Analysing an existing activity and proposing a progression of challenges to enrich it.",
    tags: ["LEGO WeDo", "Sensors", "Activity redesign", "Learning progression"],
    media: "assets/projects/coche-foto1.jpg",
    video: null, // e.g. "assets/projects/name-video.mp4" — if set, plays on /proyectos instead of the image
    gallery: [
      { type: "image", src: "assets/projects/coche-foto1.jpg" },
      { type: "video", src: "assets/projects/coche-video.mp4", poster: "assets/projects/coche-foto1.jpg" }
    ],
    context: "Students from Year 3 to Year 6 of Primary · activity based on LEGO WeDo and its companion app.",
    objetivo: "Students followed build instructions, worked with the programming provided by the tool, built the car and watched how it reacted to objects using a distance sensor — with me supervising the activity.",
    flow: ["Observe the activity", "Spot the potential", "Propose challenges", "Progression"],
    proceso: "What I want to highlight here isn't designing this experience from scratch, but the ability to analyse an existing activity and spot how it could become richer through a progression of challenges. As a redesign proposal — not necessarily activities that were carried out —: move forward and stop when an object is detected; detect the object and reverse; adjust speed and behaviour; and finally, design your own strategy to complete the course.",
    demuestra: "Not just using ready-made resources, but knowing how to analyse them, spot opportunities, and propose a richer learning progression.",
    note: "All four challenges are a redesign proposal; they are not presented as activities necessarily carried out in class."
  }
];

const OTHER_PROJECTS_ES = [
  { title: "La historia de mi abeja", context: "1er ciclo de Primaria", text: "El alumnado inventa una historia en grupo, la ilustra en una cuadrícula de casillas y programa a Bee-Bot para recorrerla mientras la narra.", tags: ["Bee-Bot", "Creatividad", "Secuenciación"], video: "assets/projects/abeja-video.mp4", poster: "assets/projects/abeja-poster.jpg" },
  { title: "La fiesta del LED", context: "Primaria", text: "Actividad de circuitos en parejas de alumnado de diferentes edades, explorando energía, corriente y circuito eléctrico con LED, cinta de cobre y pila.", tags: ["Circuitos", "Aprendizaje entre iguales"], video: "assets/projects/fiesta-led-video.mp4", poster: "assets/projects/fiesta-led-poster.jpg" },
  { title: "Limpiando con Edison v3", context: "ESO", text: "Programación del robot Edison para simular la limpieza de una playa: detecta una línea, cambia de dirección y retira objetos de una zona delimitada.", tags: ["Edison", "Programación"], video: "assets/projects/edison-video.mp4", poster: "assets/projects/edison-poster.jpg" },
  { title: "Recogiendo micro-manzanas", context: "2º ciclo de Primaria", text: "Actividad con Scratch y micro:bit en la que el alumnado inclina el micro:bit para mover un personaje y recoger manzanas antes de que acabe el tiempo.", tags: ["Scratch", "micro:bit"], video: "assets/projects/micromanzanas-video.mp4", poster: "assets/projects/micromanzanas-poster.jpg" },
  { title: "Contando mis micro-pasos", context: "3er ciclo de Primaria", text: "Uso del sensor de movimiento de micro:bit para contar pasos, con un botón para reiniciar el contador.", tags: ["micro:bit", "Sensores"], video: "assets/projects/micropasos-video.mp4", poster: "assets/projects/micropasos-poster.jpg" }
];

const OTHER_PROJECTS_EN = [
  { title: "My Bee's Story", context: "First cycle of Primary", text: "Students invent a story together, illustrate it across a grid of tiles, and program Bee-Bot to move through it while they narrate.", tags: ["Bee-Bot", "Creativity", "Sequencing"], video: "assets/projects/abeja-video.mp4", poster: "assets/projects/abeja-poster.jpg" },
  { title: "The LED Party", context: "Primary", text: "A paired circuits activity between students of different ages, exploring energy, current and electrical circuits with LEDs, copper tape and a battery.", tags: ["Circuits", "Peer learning"], video: "assets/projects/fiesta-led-video.mp4", poster: "assets/projects/fiesta-led-poster.jpg" },
  { title: "Beach Clean-up with Edison v3", context: "Lower secondary", text: "Programming the Edison robot to simulate a beach clean-up: it detects a line, changes direction and clears objects from a marked-out area.", tags: ["Edison", "Programming"], video: "assets/projects/edison-video.mp4", poster: "assets/projects/edison-poster.jpg" },
  { title: "Collecting Micro-Apples", context: "Second cycle of Primary", text: "A Scratch and micro:bit activity where students tilt the micro:bit to move a character and collect apples before time runs out.", tags: ["Scratch", "micro:bit"], video: "assets/projects/micromanzanas-video.mp4", poster: "assets/projects/micromanzanas-poster.jpg" },
  { title: "Counting My Micro-Steps", context: "Third cycle of Primary", text: "Using micro:bit's motion sensor to count steps, with a button to reset the counter.", tags: ["micro:bit", "Sensors"], video: "assets/projects/micropasos-video.mp4", poster: "assets/projects/micropasos-poster.jpg" }
];

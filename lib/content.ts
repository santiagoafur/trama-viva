// ============================================
// TRAMA VIVA - Site Content
// Edit this file to update all text content
// ============================================

export type Locale = "es" | "en";

// ============================================
// NAVIGATION
// ============================================
export const navigation = {
  es: {
    logo: "Trama Viva",
    items: [
      { label: "Retiros", href: "/retiros" },
      { label: "Microdosis", href: "/microdosis" },
      { label: "Ceremonias", href: "/ceremonias" },
      { label: "Data", href: "/data" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  en: {
    logo: "Trama Viva",
    items: [
      { label: "Retreats", href: "/retiros" },
      { label: "Microdosing", href: "/microdosis" },
      { label: "Ceremonies", href: "/ceremonias" },
      { label: "Data", href: "/data" },
      { label: "Contact", href: "/#contacto" },
    ],
  },
};

// ============================================
// HOME PAGE
// ============================================
export const homePage = {
  es: {
    hero: {
      title: "Trama Viva",
      slogan: "Despertar la inteligencia vincular",
      cta: "Comienza tu camino",
      backgroundImage: "/images/hero-home.jpg",
    },
    about: {
      title: "¿Qué es Trama Viva?",
      description:
        "Trama Viva es un espacio de acompañamiento integral donde confluyen la sabiduría ancestral y las prácticas contemporáneas de bienestar. Facilitamos experiencias transformadoras que conectan cuerpo, mente y espíritu a través de retiros, ceremonias y procesos de microdosis guiados por profesionales comprometidos con tu evolución personal.",
      features: [
        {
          title: "Conexión Profunda",
          description: "Reconectamos con nuestra esencia a través de prácticas somáticas y ceremoniales.",
        },
        {
          title: "Acompañamiento Integral",
          description: "Guía profesional en cada paso de tu proceso de transformación personal.",
        },
        {
          title: "Comunidad Consciente",
          description: "Formamos parte de una red miceliar de seres en evolución.",
        },
      ],
    },
    eli: {
      title: "Sobre Eli",
      name: "Eliana Martínez",
      subtitle: "Coach Ontológica, PNL, Facilitadora de Bienestar",
      image: "/images/eli-portrait.jpg",
      quote:
        "La tierra nos habla a través de los hongos, nos invita a recordar que somos parte de una red invisible que sostiene toda la vida. Mi camino es acompañarte a escuchar ese mensaje, a reconectar con tu sabiduría interior y a despertar la inteligencia que yace dormida en tus vínculos.",
      bio: "Con más de 15 años de experiencia en desarrollo personal y bienestar holístico, Eliana ha acompañado a cientos de personas en su proceso de transformación. Certificada en Coaching Ontológico, PNL, y diversas modalidades de trabajo corporal y ceremonial, integra conocimientos ancestrales con técnicas contemporáneas para crear experiencias profundas y significativas.",
    },
    caminos: {
      title: "Caminos",
      subtitle: "Elige el sendero que resuena contigo",
      cards: [
        {
          type: "Presencial",
          title: "Retiro Micelar",
          description: "Sumérgete en una experiencia transformadora de varios días en la naturaleza.",
          image: "/images/camino-retiro.jpg",
          href: "/retiros",
          cta: "Explorar retiros",
        },
        {
          type: "Remoto",
          title: "Proceso con Microdosis",
          description: "Acompañamiento individual para integrar microdosis en tu vida cotidiana.",
          image: "/images/camino-microdosis.jpg",
          href: "/microdosis",
          cta: "Conocer más",
        },
        {
          type: "Blog",
          title: "Data",
          description: "Información basada en evidencia sobre hongos, psilocibina y bienestar.",
          image: "/images/camino-data.jpg",
          href: "/data",
          cta: "Leer artículos",
        },
      ],
    },
    testimonios: {
      title: "Testimonios",
      subtitle: "Experiencias de transformación",
      items: [
        {
          name: "Martina Lazzaro",
          role: "Participante de Retiro 2024",
          image: "/images/testimonial-martina.jpg",
          quote:
            "El retiro con Eli fue una experiencia que marcó un antes y un después en mi vida. La combinación de prácticas somáticas, ceremonia y acompañamiento profesional me permitió acceder a partes de mí que desconocía.",
        },
        {
          name: "Julia Vennera",
          role: "Proceso de Microdosis",
          image: "/images/testimonial-julia.jpg",
          quote:
            "El acompañamiento durante mi proceso de microdosis fue fundamental. Eli me guió con profesionalismo y calidez, ayudándome a integrar cada experiencia en mi vida cotidiana.",
        },
        {
          name: "Fiorella Burnuy",
          role: "Participante de Ceremonias",
          image: "/images/testimonial-fiorella.jpg",
          quote:
            "Las ceremonias facilitadas por Trama Viva son espacios sagrados donde pude reconectar con mi esencia. La preparación, el setting y el cierre son impecables.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Comienza tu transformación",
      description: "Completa el formulario y nos pondremos en contacto contigo para acompañarte en tu proceso.",
      image: "/images/contact-section.jpg",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        phone: "Teléfono (opcional)",
        interest: "¿Qué te interesa?",
        interestOptions: ["Retiros", "Microdosis", "Ceremonias", "Información general"],
        message: "Tu mensaje",
        submit: "Enviar mensaje",
        success: "¡Gracias! Nos pondremos en contacto pronto.",
      },
    },
  },
  en: {
    hero: {
      title: "Trama Viva",
      slogan: "Awakening relational intelligence",
      cta: "Begin your journey",
      backgroundImage: "/images/hero-home.jpg",
    },
    about: {
      title: "What is Trama Viva?",
      description:
        "Trama Viva is a comprehensive wellness space where ancestral wisdom and contemporary wellbeing practices converge. We facilitate transformative experiences that connect body, mind, and spirit through retreats, ceremonies, and microdosing processes guided by professionals committed to your personal evolution.",
      features: [
        {
          title: "Deep Connection",
          description: "We reconnect with our essence through somatic and ceremonial practices.",
        },
        {
          title: "Integral Support",
          description: "Professional guidance at every step of your personal transformation process.",
        },
        {
          title: "Conscious Community",
          description: "We are part of a mycelial network of evolving beings.",
        },
      ],
    },
    eli: {
      title: "About Eli",
      name: "Eliana Martínez",
      subtitle: "Ontological Coach, NLP, Wellness Facilitator",
      image: "/images/eli-portrait.jpg",
      quote:
        "The earth speaks to us through mushrooms, inviting us to remember that we are part of an invisible network that sustains all life. My path is to accompany you in listening to that message, to reconnect with your inner wisdom and awaken the intelligence that lies dormant in your bonds.",
      bio: "With over 15 years of experience in personal development and holistic wellness, Eliana has accompanied hundreds of people in their transformation process. Certified in Ontological Coaching, NLP, and various modalities of bodywork and ceremonial practice, she integrates ancestral knowledge with contemporary techniques to create profound and meaningful experiences.",
    },
    caminos: {
      title: "Pathways",
      subtitle: "Choose the path that resonates with you",
      cards: [
        {
          type: "In-Person",
          title: "Mycelial Retreat",
          description: "Immerse yourself in a transformative multi-day experience in nature.",
          image: "/images/camino-retiro.jpg",
          href: "/retiros",
          cta: "Explore retreats",
        },
        {
          type: "Remote",
          title: "Microdosing Process",
          description: "Individual accompaniment to integrate microdosing into your daily life.",
          image: "/images/camino-microdosis.jpg",
          href: "/microdosis",
          cta: "Learn more",
        },
        {
          type: "Blog",
          title: "Data",
          description: "Evidence-based information about mushrooms, psilocybin, and wellness.",
          image: "/images/camino-data.jpg",
          href: "/data",
          cta: "Read articles",
        },
      ],
    },
    testimonios: {
      title: "Testimonials",
      subtitle: "Transformation experiences",
      items: [
        {
          name: "Martina Lazzaro",
          role: "2024 Retreat Participant",
          image: "/images/testimonial-martina.jpg",
          quote:
            "The retreat with Eli was an experience that marked a before and after in my life. The combination of somatic practices, ceremony, and professional support allowed me to access parts of myself I didn't know existed.",
        },
        {
          name: "Julia Vennera",
          role: "Microdosing Process",
          image: "/images/testimonial-julia.jpg",
          quote:
            "The accompaniment during my microdosing process was fundamental. Eli guided me with professionalism and warmth, helping me integrate each experience into my daily life.",
        },
        {
          name: "Fiorella Burnuy",
          role: "Ceremony Participant",
          image: "/images/testimonial-fiorella.jpg",
          quote:
            "The ceremonies facilitated by Trama Viva are sacred spaces where I could reconnect with my essence. The preparation, setting, and closing are impeccable.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Begin your transformation",
      description: "Fill out the form and we will contact you to accompany you in your process.",
      image: "/images/contact-section.jpg",
      form: {
        name: "Full name",
        email: "Email address",
        phone: "Phone (optional)",
        interest: "What interests you?",
        interestOptions: ["Retreats", "Microdosing", "Ceremonies", "General information"],
        message: "Your message",
        submit: "Send message",
        success: "Thank you! We will contact you soon.",
      },
    },
  },
};

// ============================================
// RETIROS PAGE
// ============================================
export const retirosPage = {
  es: {
    hero: {
      title: "Retiro de conexión Somática-Miceliar",
      subtitle: "Experiencias inmersivas de transformación profunda",
      backgroundImage: "/images/retiros-hero.jpg",
    },
    intro: {
      title: "¿Qué es un retiro micelar?",
      description:
        "Los retiros micelares son experiencias inmersivas de varios días donde nos sumergimos en la naturaleza para reconectar con nosotros mismos y con la red de vida que nos sostiene. Como la red miceliar subterránea que conecta los árboles del bosque, estos retiros nos invitan a experimentar nuestra interconexión fundamental con todo lo vivo.",
      features: [
        "Prácticas somáticas y de movimiento consciente",
        "Ceremonias guiadas con medicina natural",
        "Integración profesional y acompañamiento",
        "Alimentación consciente y nutritiva",
        "Comunidad reducida y espacio seguro",
      ],
    },
    retreats: [
      {
        id: "within",
        name: "Within",
        location: "Costa Rica",
        date: "15-20 Mayo 2026",
        price: "$1000 USD",
        image: "/images/retiro-costarica.jpg",
        status: "available",
        frontDescription: "Sumérgete en la selva tropical para una experiencia de reconexión profunda.",
        backDescription:
          "El retiro Within en Costa Rica ofrece 5 días de inmersión total en la naturaleza. Incluye alojamiento, alimentación orgánica, prácticas diarias de yoga y meditación, una ceremonia con medicina natural, y sesiones de integración. El espacio está limitado a 12 participantes para garantizar una experiencia íntima y personalizada.",
        includes: [
          "Alojamiento 5 noches",
          "Alimentación orgánica completa",
          "Prácticas diarias (yoga, meditación, breathwork)",
          "Ceremonia con medicina natural",
          "Sesiones de integración grupal e individual",
          "Traslados desde San José",
        ],
      },
      {
        id: "union",
        name: "Unión",
        location: "Córdoba, Argentina",
        date: "8-12 Julio 2026",
        price: "$1000 USD",
        image: "/images/retiro-cordoba.jpg",
        status: "available",
        frontDescription: "Conecta con las sierras y la sabiduría de la tierra argentina.",
        backDescription:
          "El retiro Unión en las sierras de Córdoba combina la potencia del paisaje serrano con prácticas ancestrales y contemporáneas. Durante 4 días exploraremos la conexión cuerpo-mente-espíritu en un entorno natural protegido, con un grupo reducido de máximo 10 participantes.",
        includes: [
          "Alojamiento 4 noches",
          "Alimentación vegetariana orgánica",
          "Prácticas diarias de movimiento",
          "Ceremonia de medicina",
          "Caminatas conscientes",
          "Círculos de integración",
        ],
      },
      {
        id: "uruguay",
        name: "Uruguay",
        location: "Punta del Este, Uruguay",
        date: "Próximamente",
        price: "$1000 USD",
        image: "/images/retiro-uruguay.jpg",
        status: "coming-soon",
        frontDescription: "Una nueva experiencia en la costa atlántica uruguaya.",
        backDescription:
          "Estamos preparando un nuevo retiro en Uruguay para 2026. Regístrate para ser el primero en conocer las fechas y detalles cuando estén disponibles.",
        includes: [],
      },
    ],
    ctas: {
      moreInfo: "Más información",
      reserve: "Reservar",
      notify: "Notificarme",
    },
  },
  en: {
    hero: {
      title: "Somatic-Mycelial Connection Retreat",
      subtitle: "Immersive experiences of deep transformation",
      backgroundImage: "/images/retiros-hero.jpg",
    },
    intro: {
      title: "What is a mycelial retreat?",
      description:
        "Mycelial retreats are immersive multi-day experiences where we dive into nature to reconnect with ourselves and with the web of life that sustains us. Like the underground mycelial network that connects forest trees, these retreats invite us to experience our fundamental interconnection with all living things.",
      features: [
        "Somatic and conscious movement practices",
        "Guided ceremonies with natural medicine",
        "Professional integration and accompaniment",
        "Conscious and nutritious food",
        "Small community and safe space",
      ],
    },
    retreats: [
      {
        id: "within",
        name: "Within",
        location: "Costa Rica",
        date: "May 15-20, 2026",
        price: "$1000 USD",
        image: "/images/retiro-costarica.jpg",
        status: "available",
        frontDescription: "Immerse yourself in the tropical rainforest for a deep reconnection experience.",
        backDescription:
          "The Within retreat in Costa Rica offers 5 days of total immersion in nature. Includes accommodation, organic food, daily yoga and meditation practices, a ceremony with natural medicine, and integration sessions. Space is limited to 12 participants to ensure an intimate and personalized experience.",
        includes: [
          "5 nights accommodation",
          "Complete organic meals",
          "Daily practices (yoga, meditation, breathwork)",
          "Natural medicine ceremony",
          "Group and individual integration sessions",
          "Transfers from San José",
        ],
      },
      {
        id: "union",
        name: "Unión",
        location: "Córdoba, Argentina",
        date: "July 8-12, 2026",
        price: "$1000 USD",
        image: "/images/retiro-cordoba.jpg",
        status: "available",
        frontDescription: "Connect with the mountains and wisdom of the Argentine land.",
        backDescription:
          "The Unión retreat in the Córdoba mountains combines the power of the mountain landscape with ancestral and contemporary practices. For 4 days we will explore the body-mind-spirit connection in a protected natural environment, with a small group of maximum 10 participants.",
        includes: [
          "4 nights accommodation",
          "Organic vegetarian meals",
          "Daily movement practices",
          "Medicine ceremony",
          "Conscious walks",
          "Integration circles",
        ],
      },
      {
        id: "uruguay",
        name: "Uruguay",
        location: "Punta del Este, Uruguay",
        date: "Coming Soon",
        price: "$1000 USD",
        image: "/images/retiro-uruguay.jpg",
        status: "coming-soon",
        frontDescription: "A new experience on the Uruguayan Atlantic coast.",
        backDescription:
          "We are preparing a new retreat in Uruguay for 2026. Register to be the first to know the dates and details when available.",
        includes: [],
      },
    ],
    ctas: {
      moreInfo: "More information",
      reserve: "Reserve",
      notify: "Notify me",
    },
  },
};

// ============================================
// CEREMONIAS PAGE
// ============================================
export const ceremoniasPage = {
  es: {
    hero: {
      title: "Prácticas y Ceremonias",
      subtitle: "Espacios sagrados de transformación",
      backgroundImage: "/images/ceremonias-hero.jpg",
    },
    intro: {
      description:
        "Las ceremonias son espacios sagrados donde nos reunimos para conectar con algo más grande que nosotros mismos. En Trama Viva, facilitamos ceremonias con respeto, preparación y profesionalismo, integrando prácticas ancestrales con conocimientos contemporáneos.",
    },
    practices: {
      title: "Nuestras Prácticas",
      items: [
        { name: "Yoga", icon: "flower" },
        { name: "Meditación", icon: "brain" },
        { name: "Breathwork", icon: "wind" },
        { name: "Crioterapia", icon: "snowflake" },
        { name: "Movimiento Somático", icon: "activity" },
        { name: "Círculos de Palabra", icon: "users" },
      ],
    },
    flipCards: [
      {
        id: "medicina",
        frontTitle: "Medicina de la Naturaleza",
        frontSubtitle: "Conoce la sabiduría de los hongos",
        frontImage: "/images/medicina-naturaleza.jpg",
        backTitle: "Psilocibina: La Molécula de la Conexión",
        backContent:
          "La psilocibina es un compuesto presente en ciertos hongos que ha sido utilizado durante milenios por culturas ancestrales para ceremonias de sanación y conexión espiritual. Estudios científicos recientes demuestran su potencial terapéutico para la depresión, ansiedad y el crecimiento personal. En Trama Viva, trabajamos con esta medicina en contextos seguros, con preparación adecuada y acompañamiento profesional.",
      },
      {
        id: "setting",
        frontTitle: "Set & Setting",
        frontSubtitle: "La importancia del contexto",
        frontImage: "/images/set-setting.jpg",
        backTitle: "Mindset y Entorno",
        backContent:
          "El 'Set' se refiere a tu estado mental, intención y preparación antes de una experiencia ceremonial. El 'Setting' es el entorno físico, las personas presentes y la atmósfera general. Ambos elementos son fundamentales para una experiencia segura y significativa. En Trama Viva, cuidamos meticulosamente ambos aspectos: te acompañamos en la preparación mental y emocional, y creamos espacios físicos que invitan a la apertura y la transformación.",
      },
    ],
    testimonios: {
      title: "Experiencias Ceremoniales",
      items: [
        {
          name: "Carlos Mendoza",
          quote: "La ceremonia fue un punto de inflexión. La preparación y el acompañamiento fueron impecables.",
        },
        {
          name: "Ana García",
          quote: "Me sentí sostenida en todo momento. La integración posterior fue tan importante como la ceremonia misma.",
        },
      ],
    },
  },
  en: {
    hero: {
      title: "Practices and Ceremonies",
      subtitle: "Sacred spaces of transformation",
      backgroundImage: "/images/ceremonias-hero.jpg",
    },
    intro: {
      description:
        "Ceremonies are sacred spaces where we gather to connect with something greater than ourselves. At Trama Viva, we facilitate ceremonies with respect, preparation, and professionalism, integrating ancestral practices with contemporary knowledge.",
    },
    practices: {
      title: "Our Practices",
      items: [
        { name: "Yoga", icon: "flower" },
        { name: "Meditation", icon: "brain" },
        { name: "Breathwork", icon: "wind" },
        { name: "Cryotherapy", icon: "snowflake" },
        { name: "Somatic Movement", icon: "activity" },
        { name: "Talking Circles", icon: "users" },
      ],
    },
    flipCards: [
      {
        id: "medicina",
        frontTitle: "Nature's Medicine",
        frontSubtitle: "Learn the wisdom of mushrooms",
        frontImage: "/images/medicina-naturaleza.jpg",
        backTitle: "Psilocybin: The Connection Molecule",
        backContent:
          "Psilocybin is a compound found in certain mushrooms that has been used for millennia by ancestral cultures for healing and spiritual connection ceremonies. Recent scientific studies demonstrate its therapeutic potential for depression, anxiety, and personal growth. At Trama Viva, we work with this medicine in safe contexts, with proper preparation and professional accompaniment.",
      },
      {
        id: "setting",
        frontTitle: "Set & Setting",
        frontSubtitle: "The importance of context",
        frontImage: "/images/set-setting.jpg",
        backTitle: "Mindset and Environment",
        backContent:
          "The 'Set' refers to your mental state, intention, and preparation before a ceremonial experience. The 'Setting' is the physical environment, the people present, and the overall atmosphere. Both elements are fundamental for a safe and meaningful experience. At Trama Viva, we meticulously care for both aspects: we accompany you in mental and emotional preparation, and create physical spaces that invite openness and transformation.",
      },
    ],
    testimonios: {
      title: "Ceremonial Experiences",
      items: [
        {
          name: "Carlos Mendoza",
          quote: "The ceremony was a turning point. The preparation and accompaniment were impeccable.",
        },
        {
          name: "Ana García",
          quote: "I felt held throughout. The post-integration was as important as the ceremony itself.",
        },
      ],
    },
  },
};

// ============================================
// MICRODOSIS PAGE
// ============================================
export const microdosisPage = {
  es: {
    hero: {
      title: "Acompañamiento individual para el uso de Microdosis",
      subtitle: "Un proceso integral, seguro y educativo",
      backgroundImage: "/images/microdosis-hero.jpg",
    },
    intro: {
      description:
        "El acompañamiento con microdosis es un proceso personalizado donde te guiamos en la integración responsable de microdosis en tu vida cotidiana. No es un servicio médico ni reemplaza tratamientos profesionales; es un espacio educativo y de desarrollo personal.",
    },
    considerations: {
      title: "A tener en cuenta",
      items: [
        {
          icon: "sparkles",
          title: "No son cura mágica",
          description:
            "Las microdosis son una herramienta dentro de un proceso más amplio de autoconocimiento y bienestar. Los resultados requieren compromiso y trabajo personal.",
        },
        {
          icon: "stethoscope",
          title: "No reemplaza terapia",
          description:
            "Este acompañamiento no sustituye tratamientos médicos o psicológicos. Si estás en tratamiento, consulta con tu profesional de salud.",
        },
        {
          icon: "heart-handshake",
          title: "Requieren intención",
          description:
            "La efectividad de las microdosis está profundamente ligada a tu intención, preparación y disposición para integrar las experiencias.",
        },
      ],
    },
    targetAudience: {
      title: "¿A quiénes está dirigido?",
      items: [
        "Personas buscando expandir su autoconocimiento",
        "Quienes desean mejorar su creatividad y enfoque",
        "Personas interesadas en explorar su mundo interior de forma segura",
        "Quienes buscan herramientas para la regulación emocional",
        "Personas en procesos de crecimiento personal y espiritual",
      ],
    },
    benefits: {
      title: "Potenciales beneficios",
      cards: [
        {
          frontTitle: "Autoconocimiento",
          frontIcon: "eye",
          backContent:
            "Las microdosis pueden facilitar una mayor consciencia de patrones de pensamiento, emociones y comportamientos, permitiendo un autoconocimiento más profundo.",
        },
        {
          frontTitle: "Liberación Nerviosa",
          frontIcon: "zap",
          backContent:
            "Muchas personas reportan una reducción en la tensión y estrés, experimentando mayor calma y claridad mental durante el proceso.",
        },
        {
          frontTitle: "Recuperación",
          frontIcon: "refresh-cw",
          backContent:
            "El proceso puede apoyar la recuperación de energía vital, motivación y conexión con uno mismo después de períodos difíciles.",
        },
        {
          frontTitle: "Regulación Emocional",
          frontIcon: "heart",
          backContent:
            "Las microdosis pueden ayudar a desarrollar una mayor capacidad de observar y regular las emociones de forma consciente.",
        },
      ],
    },
    cta: {
      title: "¿Listo para comenzar?",
      description: "Agenda una llamada de orientación gratuita para conocer más sobre el proceso.",
      button: "Agendar llamada",
    },
  },
  en: {
    hero: {
      title: "Individual accompaniment for Microdosing",
      subtitle: "A comprehensive, safe, and educational process",
      backgroundImage: "/images/microdosis-hero.jpg",
    },
    intro: {
      description:
        "Microdosing accompaniment is a personalized process where we guide you in the responsible integration of microdosing into your daily life. It is not a medical service nor does it replace professional treatments; it is an educational and personal development space.",
    },
    considerations: {
      title: "Keep in mind",
      items: [
        {
          icon: "sparkles",
          title: "Not a magic cure",
          description:
            "Microdoses are a tool within a broader process of self-knowledge and wellness. Results require commitment and personal work.",
        },
        {
          icon: "stethoscope",
          title: "Does not replace therapy",
          description:
            "This accompaniment does not substitute medical or psychological treatments. If you are in treatment, consult with your health professional.",
        },
        {
          icon: "heart-handshake",
          title: "Require intention",
          description:
            "The effectiveness of microdoses is deeply linked to your intention, preparation, and willingness to integrate the experiences.",
        },
      ],
    },
    targetAudience: {
      title: "Who is it for?",
      items: [
        "People seeking to expand their self-knowledge",
        "Those who want to improve their creativity and focus",
        "People interested in exploring their inner world safely",
        "Those seeking tools for emotional regulation",
        "People in personal and spiritual growth processes",
      ],
    },
    benefits: {
      title: "Potential benefits",
      cards: [
        {
          frontTitle: "Self-knowledge",
          frontIcon: "eye",
          backContent:
            "Microdoses can facilitate greater awareness of thought patterns, emotions, and behaviors, allowing for deeper self-knowledge.",
        },
        {
          frontTitle: "Nervous Release",
          frontIcon: "zap",
          backContent:
            "Many people report a reduction in tension and stress, experiencing greater calm and mental clarity during the process.",
        },
        {
          frontTitle: "Recovery",
          frontIcon: "refresh-cw",
          backContent:
            "The process can support the recovery of vital energy, motivation, and connection with oneself after difficult periods.",
        },
        {
          frontTitle: "Emotional Regulation",
          frontIcon: "heart",
          backContent:
            "Microdoses can help develop a greater capacity to observe and regulate emotions consciously.",
        },
      ],
    },
    cta: {
      title: "Ready to begin?",
      description: "Schedule a free orientation call to learn more about the process.",
      button: "Schedule call",
    },
  },
};

// ============================================
// DATA PAGE (Knowledge Hub)
// ============================================
export const dataPage = {
  es: {
    hero: {
      title: "Data",
      subtitle: "Centro de conocimiento sobre hongos y psilocibina",
      backgroundImage: "/images/data-hero.jpg",
    },
    search: {
      placeholder: "Buscar artículos...",
      noResults: "No se encontraron resultados",
    },
    quickLinks: {
      title: "Enlaces rápidos",
      items: [
        { title: "La red Miceliar", href: "#red-miceliar" },
        { title: "Cómo tomar microdosis? Guía básica", href: "#guia-basica" },
        { title: "Info para los más curiosos", href: "#curiosos" },
      ],
    },
    articles: [
      {
        id: "red-miceliar",
        title: "La Red Miceliar: La Internet del Bosque",
        category: "Ciencia",
        readTime: "8 min",
        image: "/images/article-red-miceliar.jpg",
        excerpt:
          "Descubre cómo los hongos forman una red de comunicación subterránea que conecta y nutre a todo el bosque.",
        content: `La red miceliar es uno de los descubrimientos más fascinantes de la biología moderna. Bajo nuestros pies, existe una vasta red de filamentos fúngicos llamados hifas que conectan los árboles y plantas de un bosque, permitiéndoles compartir nutrientes, agua e incluso información.

Esta red, a menudo llamada "Wood Wide Web" o la internet del bosque, demuestra que los ecosistemas no son colecciones de individuos competidores, sino comunidades cooperativas profundamente interconectadas.

Los hongos actúan como intermediarios, facilitando el intercambio entre plantas. Un árbol madre puede enviar nutrientes a sus plántulas a través de esta red. Árboles de diferentes especies comparten recursos según las necesidades de cada uno.

Esta visión del bosque como una red cooperativa nos invita a reconsiderar nuestra propia relación con la naturaleza y entre nosotros. Somos parte de una trama viva, interconectada y mutuamente dependiente.`,
      },
      {
        id: "guia-basica",
        title: "Cómo tomar microdosis: Guía básica",
        category: "Educación",
        readTime: "12 min",
        image: "/images/article-guia-microdosis.jpg",
        excerpt:
          "Una introducción responsable a las microdosis: qué son, protocolos comunes y consideraciones importantes.",
        content: `Las microdosis son dosis sub-perceptuales de sustancias psicodélicas, típicamente entre 1/10 y 1/20 de una dosis completa. A estas cantidades, no se experimentan efectos psicodélicos evidentes, pero muchas personas reportan beneficios sutiles en creatividad, enfoque y bienestar emocional.

PROTOCOLOS COMUNES:

1. Protocolo Fadiman: Una microdosis cada tres días (día 1: dosis, día 2-3: descanso).

2. Protocolo Stamets: Cuatro días seguidos, tres días de descanso.

3. Cada segundo día: Alternar días con y sin microdosis.

CONSIDERACIONES IMPORTANTES:

- Comienza con dosis muy bajas y ajusta según tu experiencia.
- Mantén un diario para registrar efectos y observaciones.
- Las microdosis no son para todos; consulta con profesionales.
- La legalidad varía según el país; infórmate sobre tu jurisdicción.
- El contexto y la intención son fundamentales para la experiencia.

Este contenido es educativo y no constituye consejo médico.`,
      },
      {
        id: "curiosos",
        title: "Para los más curiosos: Historia de la Psilocibina",
        category: "Historia",
        readTime: "15 min",
        image: "/images/article-historia.jpg",
        excerpt:
          "Un viaje por la historia de los hongos sagrados, desde las culturas ancestrales hasta la ciencia moderna.",
        content: `Los hongos psilocibios han acompañado a la humanidad durante milenios. Evidencias arqueológicas sugieren su uso ritual desde hace al menos 6,000 años en diversas culturas alrededor del mundo.

CULTURAS ANCESTRALES:

En Mesoamérica, los aztecas los llamaban "teonanácatl" (carne de los dioses). Los mazatecos de Oaxaca mantuvieron tradiciones ceremoniales con hongos hasta nuestros días, gracias a curanderas como María Sabina.

REDESCUBRIMIENTO OCCIDENTAL:

En 1957, el banquero R. Gordon Wasson publicó su experiencia con María Sabina en la revista Life, introduciendo los hongos sagrados a Occidente. Albert Hofmann, creador del LSD, aisló la psilocibina poco después.

LA ERA DE LA INVESTIGACIÓN:

Tras décadas de prohibición, la investigación científica ha resurgido. Universidades como Johns Hopkins, Imperial College London y NYU estudian la psilocibina para depresión, adicciones y cuidados paliativos.

Los resultados son prometedores: en algunos estudios, una sola sesión asistida con psilocibina produjo mejoras significativas y duraderas en pacientes con depresión resistente al tratamiento.

Estamos en los albores de una nueva era en la comprensión y uso responsable de estas sustancias sagradas.`,
      },
      {
        id: "neurociencia",
        title: "Neurociencia de los Psicodélicos",
        category: "Ciencia",
        readTime: "10 min",
        image: "/images/article-neurociencia.jpg",
        excerpt: "Cómo la psilocibina afecta el cerebro: neuroplasticidad, redes neuronales y consciencia.",
        content: `La psilocibina actúa principalmente sobre los receptores de serotonina 5-HT2A, generando cambios profundos en la actividad cerebral. La neurociencia moderna nos está revelando los mecanismos detrás de las experiencias psicodélicas.

RED DE MODO POR DEFECTO (DMN):

Los psicodélicos reducen la actividad de la DMN, la red cerebral asociada con el ego y el pensamiento autorreferencial. Esta reducción permite nuevos patrones de conectividad entre áreas cerebrales que normalmente no se comunican.

NEUROPLASTICIDAD:

Estudios recientes demuestran que la psilocibina promueve la neuroplasticidad: la capacidad del cerebro para formar nuevas conexiones sinápticas. Esto puede explicar los cambios duraderos que muchas personas experimentan.

ENTROPÍA CEREBRAL:

La teoría del cerebro entrópico sugiere que los psicodélicos aumentan temporalmente la entropía (desorden) en la actividad cerebral, permitiendo la reorganización de patrones mentales rígidos.

Esta investigación nos ayuda a comprender por qué las experiencias psicodélicas pueden ser tan transformadoras y por qué requieren un contexto adecuado de preparación e integración.`,
      },
    ],
  },
  en: {
    hero: {
      title: "Data",
      subtitle: "Knowledge center on mushrooms and psilocybin",
      backgroundImage: "/images/data-hero.jpg",
    },
    search: {
      placeholder: "Search articles...",
      noResults: "No results found",
    },
    quickLinks: {
      title: "Quick links",
      items: [
        { title: "The Mycelial Network", href: "#red-miceliar" },
        { title: "How to take microdoses? Basic guide", href: "#guia-basica" },
        { title: "Info for the curious", href: "#curiosos" },
      ],
    },
    articles: [
      {
        id: "red-miceliar",
        title: "The Mycelial Network: The Forest's Internet",
        category: "Science",
        readTime: "8 min",
        image: "/images/article-red-miceliar.jpg",
        excerpt:
          "Discover how mushrooms form an underground communication network that connects and nourishes the entire forest.",
        content: `The mycelial network is one of the most fascinating discoveries in modern biology. Beneath our feet, there exists a vast network of fungal filaments called hyphae that connect the trees and plants of a forest, allowing them to share nutrients, water, and even information.

This network, often called the "Wood Wide Web" or the forest's internet, demonstrates that ecosystems are not collections of competing individuals, but deeply interconnected cooperative communities.

Fungi act as intermediaries, facilitating exchange between plants. A mother tree can send nutrients to her seedlings through this network. Trees of different species share resources according to each other's needs.

This vision of the forest as a cooperative network invites us to reconsider our own relationship with nature and with each other. We are part of a living web, interconnected and mutually dependent.`,
      },
      {
        id: "guia-basica",
        title: "How to take microdoses: Basic guide",
        category: "Education",
        readTime: "12 min",
        image: "/images/article-guia-microdosis.jpg",
        excerpt:
          "A responsible introduction to microdosing: what they are, common protocols, and important considerations.",
        content: `Microdoses are sub-perceptual doses of psychedelic substances, typically between 1/10 and 1/20 of a full dose. At these amounts, no obvious psychedelic effects are experienced, but many people report subtle benefits in creativity, focus, and emotional well-being.

COMMON PROTOCOLS:

1. Fadiman Protocol: One microdose every three days (day 1: dose, days 2-3: rest).

2. Stamets Protocol: Four consecutive days, three days of rest.

3. Every other day: Alternate days with and without microdoses.

IMPORTANT CONSIDERATIONS:

- Start with very low doses and adjust based on your experience.
- Keep a journal to record effects and observations.
- Microdoses are not for everyone; consult with professionals.
- Legality varies by country; inform yourself about your jurisdiction.
- Context and intention are fundamental to the experience.

This content is educational and does not constitute medical advice.`,
      },
      {
        id: "curiosos",
        title: "For the curious: History of Psilocybin",
        category: "History",
        readTime: "15 min",
        image: "/images/article-historia.jpg",
        excerpt:
          "A journey through the history of sacred mushrooms, from ancestral cultures to modern science.",
        content: `Psilocybin mushrooms have accompanied humanity for millennia. Archaeological evidence suggests their ritual use for at least 6,000 years in various cultures around the world.

ANCESTRAL CULTURES:

In Mesoamerica, the Aztecs called them "teonanácatl" (flesh of the gods). The Mazatecs of Oaxaca maintained ceremonial traditions with mushrooms to this day, thanks to healers like María Sabina.

WESTERN REDISCOVERY:

In 1957, banker R. Gordon Wasson published his experience with María Sabina in Life magazine, introducing sacred mushrooms to the West. Albert Hofmann, creator of LSD, isolated psilocybin shortly after.

THE ERA OF RESEARCH:

After decades of prohibition, scientific research has resurged. Universities like Johns Hopkins, Imperial College London, and NYU study psilocybin for depression, addictions, and palliative care.

Results are promising: in some studies, a single psilocybin-assisted session produced significant and lasting improvements in patients with treatment-resistant depression.

We are at the dawn of a new era in the understanding and responsible use of these sacred substances.`,
      },
      {
        id: "neurociencia",
        title: "Neuroscience of Psychedelics",
        category: "Science",
        readTime: "10 min",
        image: "/images/article-neurociencia.jpg",
        excerpt: "How psilocybin affects the brain: neuroplasticity, neural networks, and consciousness.",
        content: `Psilocybin acts primarily on serotonin 5-HT2A receptors, generating profound changes in brain activity. Modern neuroscience is revealing the mechanisms behind psychedelic experiences.

DEFAULT MODE NETWORK (DMN):

Psychedelics reduce DMN activity, the brain network associated with the ego and self-referential thinking. This reduction allows new connectivity patterns between brain areas that normally don't communicate.

NEUROPLASTICITY:

Recent studies demonstrate that psilocybin promotes neuroplasticity: the brain's ability to form new synaptic connections. This may explain the lasting changes many people experience.

BRAIN ENTROPY:

The entropic brain theory suggests that psychedelics temporarily increase entropy (disorder) in brain activity, allowing the reorganization of rigid mental patterns.

This research helps us understand why psychedelic experiences can be so transformative and why they require an appropriate context of preparation and integration.`,
      },
    ],
  },
};

// ============================================
// FOOTER
// ============================================
export const footer = {
  es: {
    links: {
      title: "Enlaces",
      items: [
        { label: "Retiros", href: "/retiros" },
        { label: "Microdosis", href: "/microdosis" },
        { label: "Ceremonias", href: "/ceremonias" },
        { label: "Data", href: "/data" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Política de privacidad", href: "/privacidad" },
        { label: "Términos de servicio", href: "/terminos" },
        { label: "Aviso legal", href: "/aviso-legal" },
      ],
    },
    contact: {
      title: "Contacto",
      email: "hola@tramaviva.com",
      instagram: "@tramaviva",
    },
    copyright: "© 2026 Trama Viva. Todos los derechos reservados.",
    designBy: "Diseño por Whitespacez",
  },
  en: {
    links: {
      title: "Links",
      items: [
        { label: "Retreats", href: "/retiros" },
        { label: "Microdosing", href: "/microdosis" },
        { label: "Ceremonies", href: "/ceremonias" },
        { label: "Data", href: "/data" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacidad" },
        { label: "Terms of Service", href: "/terminos" },
        { label: "Legal Notice", href: "/aviso-legal" },
      ],
    },
    contact: {
      title: "Contact",
      email: "hola@tramaviva.com",
      instagram: "@tramaviva",
    },
    copyright: "© 6 Trama Viva. All rights reserved.",
    designBy: "Design by Whitespacez",
  },
};

// ============================================
// COMMON UI
// ============================================
export const commonUI = {
  es: {
    languageToggle: "EN",
    backToTop: "Volver arriba",
    loading: "Cargando...",
    readMore: "Leer más",
    close: "Cerrar",
  },
  en: {
    languageToggle: "ES",
    backToTop: "Back to top",
    loading: "Loading...",
    readMore: "Read more",
    close: "Close",
  },
};

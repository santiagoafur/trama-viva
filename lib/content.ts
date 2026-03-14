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
          name: "Martina - Argentina",
          role: "Participante de Retiro 2024",
          image: "/images/testimonios/martina.png",
          quote:
            `Volví y hablé como nunca con mi papá, pude agradecerle por todo su esfuerzo y decirle que lo amo.
          Abrace mucho también.
          Gracias por tanto amor que me compartieron 🤍 
          Fue un viaje maravilloso y transformador.`,
        },
        {
          name: "Octavia - Chile",
          role: "Proceso de Microdosis",
          image: "/images/testimonios/octavia.png",
          quote:`La experiencia vivida en el programa produce la sinergia entre la amorosa guía de Eli, la gran calidad humana del grupo y el trabajo "silencioso", pero profundo de la medicina. 
    Lo anterior se potencia por el hecho de haber sostenido un trabajo semanal durante 2 meses, que me permitió adquirir nuevos hábitos de conexión y autoconocimiento de forma duradera.
Realmente muy agradecida de la experiencia!`
            ,
        },
        {
          name: "Fiorella - Perú",
          role: "Participante de Ceremonias",
          image: "/images/testimonios/fiorella.jpg",
          quote:`Este retiro fue como un sueño. Cada detalle lo sentí con mucho amor. Desde el acompañamiento de Eli, la comida deliciosa, hasta el amor de los honguitos para mostrarme que la vida es más simple de lo que pienso.
Claramente afloró el amor en todo mi ser, lo sentí por las personas que se me acercaron post retiro y por el amor y compasión de cómo me veo y veo a otras personas.
Ahora estoy más convencida de que esta medicina me recuerda lo maravillosos que somos, con todas nuestras experiencias de vida. Todos estamos conectados, así lo sentí todo el tiempo.
Me encantó el servicio y la apertura de todos los que participamos. Esta experiencia me la llevo en el corazón.
Recomiendo mucho este espacio con la guía de este maravilloso equipo`
            ,
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
        id: "red_viva",
        name: "Red Viva",
        location: "Minas, Uruguay",
        date: "1-4 Octubre 2026",
        price: "$1000 USD",
        image: "/images/retiro-uruguay.jpg",
        status: "available",
        frontDescription: "Retiro de Conexión somática miceliar. Una invitación a recordar la sabiduría de la tierra.",
        backDescription: "Una invitación a recordar la sabiduría del micelio. A reunirnos como la Red Viva que ya somos, donde nuestras experiencias se entrelazan y nos permiten reconocernos parte de un mismo tejido mediante Terapia Asistida por Psicodélicos.",
        includes: [
          "Alojamiento en entorno natural",
          "Alimentación consciente",
          "Proceso completo de T.A.P.",
          "Facilitación por Eli y Fer"
        ]
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
        location: "Minas, Uruguay",
        date: "October 1-4. 2026",
        price: "$1000 USD",
        image: "/images/retiro-uruguay.jpg",
        status: "available",
        frontDescription: "Somatic-mycelial connection retreat. An invitation to remember the wisdom of the earth.",
        backDescription: "An invitation to remember the wisdom of the mycelium. To gather as the Living Network we already are, where our experiences intertwine and allow us to recognize ourselves as part of the same fabric through Psychedelic-Assisted Therapy.",
        includes: [
          "Accommodation in a natural environment",
          "Conscious meals",
          "Complete P.A.T. process",
          "Facilitation by Eli and Fer"
        ]
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
      title: "Categorías",
      items: [
        { title: "Educativo", href: "#Educativo" },
        { title: "Informativo", href: "#Informativo" },
      ],
    },
    newsletter: {
      title: "¿Te gustó el artículo?",
      description: "Déjanos tu email para recibir más novedades e información valiosa.",
      placeholder: "Tu correo electrónico",
      button: "Suscribirme"
    },
    articles: [
      {
        id: "psilocibina-ninos-santos",
        title: "Hongos con Psilocibina - Niños Santos",
        category: "Educativo",
        readTime: "8 min",
        image: "/images/article-red-miceliar.jpg",
        excerpt: "Descubre qué es la psilocibina, su conexión con la serotonina y el asombroso paralelo entre el micelio y nuestras redes neuronales.",
        content: `HONGOS CON PSILOCIBINA\nLa psilocibina es el compuesto psicoactivo de los hongos psicodélicos llamados Psylocibe Cubensis. El término psicodélico hace referencia a un estado mental o experiencia que expande, altera o intensifica la percepción, la conciencia y los procesos emocionales y cognitivos. Proviene del griego: “Psyche” = alma / mente, “Deloun” = manifestar / revelar.\n\nLa psilocibina al ingresar via oral a nuestro organismo es degradada en psilocina en nuestro cuerpo físico para poder obtener sus efectos, convirtiéndose en una molécula que, en su composición, es similar a la molécula de serotonina. La serotonina es un neurotransmisor y tiene una gran influencia en los procesos fisiológicos, de aprendizaje y emocionales.\n\nMICELIO VS NEURONAS\nDos redes invisibles que comparten un mismo principio: la vida ocurre en conexión.\nAmbas son redes descentralizadas y funcionan mediante impulsos eléctricos y químicos. Almacenan y transmiten información y muestran patrones repetitivos, fractales en distintas etapas.\n\nTienen un lenguaje compartido: la vida se organiza en red.\nLo que ocurre bajo la tierra y dentro de nuestro cerebro responde a un mismo diseño universal. El micelio es la tecnología de la naturaleza, posee una inteligencia vincular de la cual nosotros como humanos aún estamos aprendiendo.`,
      },
      {
        id: "historia-hongos",
        title: "Los hongos: testigos y protagonistas de la historia humana",
        category: "Educativo",
        readTime: "10 min",
        image: "/images/article-historia.jpg",
        excerpt: "Un recorrido por la historia de los hongos, desde las pinturas rupestres hasta la investigación científica contemporánea.",
        content: `Los hongos son organismos del reino Fungi, distintos de plantas, animales y bacterias. No realizan fotosíntesis y se alimentan por absorción. Son uno de los organismos más antiguos del planeta. Aparecieron hace al menos 1.000 millones de años.\n\nDesde las pinturas rupestres de hace 6.000 años hasta los avances científicos actuales, los hongos han acompañado a la humanidad en cada etapa. Son nuestros aliados invisibles en la evolución cultural y alimentaria. Fueron esenciales en rituales espirituales, inspiraron mitos y hasta jugaron un papel clave en la fermentación de alimentos como el queso y el vino hace más de 7.000 años.\n\nDesde los rituales chamánicos hasta la investigación científica, los hongos psicodélicos tejen una conexión profunda entre el pasado, el presente y el futuro.\nLa sabiduría ancestral y la exploración contemporánea se entrelazan, ofreciendo nuevas perspectivas para la salud y la expansión de la consciencia.\n\nExperimentar con hongos psicodélicos es una gran forma de explorar nuestras búsquedas terapéuticas y espirituales, pero para que la práctica nos enriquezca y sea de valor es importante abordar su consumo con responsabilidad. Esto es lo que comúnmente se conoce como “reducción de daños”, que no es más ni menos que prácticas de autoconocimiento, autocuidado y un marco cultural adecuado.`,
      },
      {
        id: "hongos-adaptogenos",
        title: "Más que alimento, más que medicina - Hongos adaptógenos",
        category: "Educativo",
        readTime: "12 min",
        image: "/images/medicina-naturaleza.jpg",
        excerpt: "Conoce qué son los hongos adaptógenos y cómo ayudan a nuestro cuerpo a restaurar su funcionalidad y resistencia máxima.",
        content: `Los hongos no solo han acompañado al ser humano en su evolución: han sido protagonistas de momentos clave. Su poder simbiótico, curativo y transformador sugiere que no son meros organismos del subsuelo, sino puentes entre mundos: el de la ciencia y el del misterio, la vida y la descomposición, lo visible y lo invisible.\n\nHONGOS ADAPTÓGENOS\nLos hongos son los organismos vivos más longevos de la tierra, debido a que en cada generación han logrado sintetizar sustancias que se transmiten sucesivamente a generaciones posteriores con propiedades adaptógenas.\n\nEl término adaptógeno hace referencia a una sustancia generada específicamente con el objetivo de aumentar el estado de resistencia contra estímulos que provocan el desencadenamiento de estrés en un momento determinado, es decir que protegen al cuerpo del estrés estabilizando y optimizando sus funciones fisiológicas.\n\nEJEMPLOS DE HONGOS ADAPTÓGENOS:\n1. Reishi (Ganoderma lucidum): Reduce el estrés y la ansiedad. Refuerza el sistema inmunológico. Promueve el sueño reparador.\n2. Cordyceps: Mejora la energía y la resistencia física. Apoya la función respiratoria.\n3. Lion’s Mane (Hericium erinaceus): Mejora la memoria y la concentración. Estimula el crecimiento de neuronas.\n4. Chaga: Potente antioxidante. Apoya el sistema inmune.\n5. Maitake: Regula el azúcar en la sangre. Refuerza el sistema inmunológico.`,
      },
      {
        id: "guia-microdosis",
        title: "Microdosis: Guía Básica",
        category: "Informativo",
        readTime: "7 min",
        image: "/images/article-guia-microdosis.jpg",
        excerpt: "Aprende qué es una microdosis, cómo funciona a nivel neurobiológico, emocional y creativo para reconectar con tu interior.",
        content: `Una microdosis es una dosis muy pequeña (sub-perceptual) de una sustancia psicodélica, que no produce efectos alucinógenos ni alteraciones perceptibles del estado de conciencia, pero se utiliza con fines terapéuticos, cognitivos o emocionales.\nLa psilocibina, en dosis sub perceptuales, no distorsiona, sino que estimula.\n\nSU IMPACTO EN DISTINTOS NIVELES:\nA nivel neurobiológico activa la neuroplasticidad facilitando nuevas rutas entre las neuronas.\nA nivel emocional permite acercarnos y conectarnos con nuestra sensibilidad. Recuperar la sensibilidad es un gran poder de regeneración.\nA nivel creativo hay nuevas puertas que se abren ya que la microdosis nutre la curiosidad y la apertura mental.\n\nLa microdosis no anestesia ni te lleva a un trance. Más bien, te ayuda a habitar tu mundo interior con mayor claridad. Puede acompañar procesos terapéuticos, duelos, transiciones de vida, o simplemente momentos donde necesitas volver a tu centro. Apoya la autoobservación sin juicio, la conexión integrada de cuerpo–mente–emoción y la introspección sin disociación.\n\n“No vas profundo para perderte. Vas para encontrarte.”`,
      },
      {
        id: "bibliografia",
        title: "Bibliografía y Más Info",
        category: "Informativo",
        readTime: "5 min",
        image: "/images/article-neurociencia.jpg",
        excerpt: "Recopilación de estudios científicos, papers y artículos para profundizar en el mundo de la microdosificación y la neurociencia.",
        content: `Un estudio sistemático de la microdosificación de psicodélicos\nEste artículo te permitirá comprender los efectos reportados de la microdosificación en el funcionamiento psicológico (estado de ánimo, estrés, atención) a partir de un estudio sistemático y observacional, así como las expectativas preexistentes de los usuarios.\n\nLa ciencia emergente de la microdosificación\nUna revisión sistemática de la investigación sobre psicodélicos en dosis bajas (1955-2021) y recomendaciones para el campo.\n\nEl principio de energía libre: ¿una teoría unificada del cerebro?\nEste documento te introducirá al principio de la energía libre como una posible teoría unificada del cerebro.\n\nRed Neuronal por Defecto\nEste artículo discute la Red Neuronal por Defecto (DMN), una red cerebral activa en estados de reposo, y su posible modulación por sustancias psicodélicas.\n\nSerotonina y Función Cerebral - Una historia de dos receptores\nExplora el papel de la serotonina y sus receptores, especialmente el 5-HT2A, en la función cerebral.`,
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
      title: "Categories",
      items: [
        { title: "Educational", href: "#Educativo" },
        { title: "Informative", href: "#Informativo" },
      ],
    },
    newsletter: {
      title: "Did you like the article?",
      description: "Leave your email to receive more news and valuable information.",
      placeholder: "Your email address",
      button: "Subscribe"
    },
    articles: [
      {
        id: "psilocibina-ninos-santos",
        title: "Psilocybin Mushrooms - Holy Children",
        category: "Educativo",
        readTime: "8 min",
        image: "/images/article-red-miceliar.jpg",
        excerpt: "Discover what psilocybin is, its connection to serotonin, and the amazing parallel between mycelium and our neural networks.",
        content: `PSILOCYBIN MUSHROOMS\nPsilocybin is the psychoactive compound of psychedelic mushrooms called Psylocibe Cubensis. The term psychedelic refers to a mental state or experience that expands, alters, or intensifies perception, consciousness, and emotional and cognitive processes. It comes from Greek: "Psyche" = soul / mind, "Deloun" = to manifest / reveal.\n\nWhen psilocybin enters our organism orally, it is degraded into psilocin in our physical body to obtain its effects, becoming a molecule that is structurally similar to the serotonin molecule. Serotonin is a neurotransmitter and has a great influence on physiological, learning, and emotional processes.\n\nMYCELIUM VS NEURONS\nTwo invisible networks that share the same principle: life happens in connection.\nBoth are decentralized networks that operate through electrical and chemical impulses. They store and transmit information and show repetitive, fractal patterns at different stages.\n\nThey have a shared language: life organizes itself in a network.\nWhat happens underground and inside our brains responds to the same universal design. Mycelium is nature's technology; it possesses a relational intelligence that we as humans are still learning from.`,
      },
      {
        id: "historia-hongos",
        title: "Mushrooms: witnesses and protagonists of human history",
        category: "Educativo",
        readTime: "10 min",
        image: "/images/article-historia.jpg",
        excerpt: "A journey through the history of mushrooms, from cave paintings to contemporary scientific research.",
        content: `Mushrooms are organisms of the Fungi kingdom, distinct from plants, animals, and bacteria. They do not photosynthesize and feed by absorption. They are one of the oldest organisms on the planet, appearing at least 1 billion years ago.\n\nFrom cave paintings 6,000 years ago to current scientific advances, mushrooms have accompanied humanity at every stage. They are our invisible allies in cultural and dietary evolution. They were essential in spiritual rituals, inspired myths, and even played a key role in the fermentation of foods like cheese and wine over 7,000 years ago.\n\nFrom shamanic rituals to scientific research, psychedelic mushrooms weave a deep connection between the past, present, and future.\nAncestral wisdom and contemporary exploration intertwine, offering new perspectives for health and the expansion of consciousness.\n\nExperimenting with psychedelic mushrooms is a great way to explore our therapeutic and spiritual pursuits, but for the practice to enrich us and be valuable, it is important to approach its consumption with responsibility. This is what is commonly known as "harm reduction," which is nothing more than practices of self-knowledge, self-care, and an adequate cultural framework.`,
      },
      {
        id: "hongos-adaptogenos",
        title: "More than food, more than medicine - Adaptogenic mushrooms",
        category: "Educativo",
        readTime: "12 min",
        image: "/images/medicina-naturaleza.jpg",
        excerpt: "Learn what adaptogenic mushrooms are and how they help our body restore its functionality and maximum resistance.",
        content: `Mushrooms have not only accompanied humans in their evolution: they have been protagonists of key moments. Their symbiotic, healing, and transformative power suggests they are not mere underground organisms, but bridges between worlds: science and mystery, life and decomposition, the visible and the invisible.\n\nADAPTOGENIC MUSHROOMS\nMushrooms are the longest-living organisms on earth because, in each generation, they have managed to synthesize substances with adaptogenic properties that are transmitted to subsequent generations.\n\nThe term adaptogen refers to a substance generated specifically to increase the state of resistance against stimuli that trigger stress at a given time, meaning they protect the body from stress by stabilizing and optimizing its physiological functions.\n\nEXAMPLES OF ADAPTOGENIC MUSHROOMS:\n1. Reishi (Ganoderma lucidum): Reduces stress and anxiety. Boosts the immune system. Promotes restful sleep.\n2. Cordyceps: Improves energy and physical endurance. Supports respiratory function.\n3. Lion's Mane (Hericium erinaceus): Improves memory and concentration. Stimulates neuron growth.\n4. Chaga: Powerful antioxidant. Supports the immune system.\n5. Maitake: Regulates blood sugar. Boosts the immune system.`,
      },
      {
        id: "guia-microdosis",
        title: "Microdosing: Basic Guide",
        category: "Informativo",
        readTime: "7 min",
        image: "/images/article-guia-microdosis.jpg",
        excerpt: "Learn what a microdose is, how it works on a neurobiological, emotional, and creative level to reconnect with your inner self.",
        content: `A microdose is a very small (sub-perceptual) dose of a psychedelic substance that does not produce hallucinogenic effects or noticeable alterations in the state of consciousness but is used for therapeutic, cognitive, or emotional purposes.\nPsilocybin, in sub-perceptual doses, does not distort; it stimulates.\n\nITS IMPACT AT DIFFERENT LEVELS:\nAt a neurobiological level, it activates neuroplasticity, facilitating new pathways between neurons.\nAt an emotional level, it allows us to approach and connect with our sensitivity. Recovering sensitivity is a great power of regeneration.\nAt a creative level, new doors open as microdosing nourishes curiosity and mental openness.\n\nMicrodosing does not anesthetize or put you in a trance. Rather, it helps you inhabit your inner world with greater clarity. It can accompany therapeutic processes, grief, life transitions, or simply moments where you need to return to your center. It supports non-judgmental self-observation, the integrated mind-body-emotion connection, and introspection without dissociation.\n\n"You don't go deep to lose yourself. You go to find yourself."`,
      },
      {
        id: "bibliografia",
        title: "Bibliography and More Info",
        category: "Informativo",
        readTime: "5 min",
        image: "/images/article-neurociencia.jpg",
        excerpt: "A collection of scientific studies, papers, and articles to delve into the world of microdosing and neuroscience.",
        content: `A systematic study of psychedelic microdosing\nThis article will allow you to understand the reported effects of microdosing on psychological functioning (mood, stress, attention) based on a systematic and observational study, as well as users' pre-existing expectations.\n\nThe emerging science of microdosing\nA systematic review of research on low-dose psychedelics (1955-2021) and recommendations for the field.\n\nThe free-energy principle: a unified brain theory?\nThis document will introduce you to the free-energy principle as a possible unified theory of the brain.\n\nDefault Mode Network\nThis article discusses the Default Mode Network (DMN), an active brain network in resting states, and its possible modulation by psychedelic substances.\n\nSerotonin and Brain Function - A tale of two receptors\nExplores the role of serotonin and its receptors, especially 5-HT2A, in brain function.`,
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

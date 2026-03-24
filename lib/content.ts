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
      title: "",
      description:
        `Trama Viva es un espacio terapéutico orientado al autoconocimiento y la transformación personal.
Surge como un llamado a la inteligencia que se manifiesta al vincularnos con la naturaleza de la realidad.
Desde una mirada integrativa, la invitación es explorar nuestra naturaleza humana para aprender nuevas formas de relacionarnos y aplicar sistemas basados en lo único que es sostenible: el amor.
`,
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
      title: "Sobre mi",
      name: "Eliana Martínez",
      image: "/images/eli-portrait.jpg",
      bio: `Soy Eli, apasionada por los procesos de desarrollo humano y de la vida en la naturaleza. Busco acompañar a las personas en sus búsquedas de integración y procesos de aprendizaje, construyendo vínculos que permitan una nueva mirada.
Mi trabajo se basa en una perspectiva sistémica: la vida es una red interconectada que si aprendemos a escuchar, nutrir y cuidar tiene la capacidad por sí sola de regenerarse
y crear nuevas redes de conexión.
Hoy siento que camino acompañada por una red amplia y comprometida de personas que estamos creando un nuevo paradigma: la unión de la medicina de la naturaleza con nuestra humanidad para la sanación y la regeneración de la experiencia humana en la tierra.
Este camino me dio mucho. Por eso siento un profundo compromiso de devolver.
No creo en una salvación, creo en un camino. Y no hay nada más placentero que sentir que estás en el tuyo: ahí, incluso los desafíos se vuelven regalos, porque son propios.`,
      credentials: [
        "Coach Ontológica esp en PNL y Sistema Nervioso",
        "Terapias asistidas con psicodélicos.",
        "Facilitadora de respiración método Heart Breath y crioterapia.",
        "Instructora de yoga y meditación",
      
      ]
    },
    caminos: {
      title: "Caminos",
      subtitle: "",
      cards: [
        {
          type: "Presencial",
          title: "Retiro",
          description: "Sumérgete en una experiencia transformadora de 4 días en la naturaleza.",
          image: "/images/camino-retiro.jpg",
          href: "/retiros",
          cta: "Explorar retiros",
        },
        {
          type: "Online",
          title: "Acompañamiento con Microdosis",
          description: "Acompañamientos individuales y grupales para integrar la microdosis en tu proceso personal.",
          image: "/images/camino-microdosis.jpg",
          href: "/microdosis",
          cta: "Conocer más",
        },
        {
          type: "Presencial",
          title: "Ceremonias",
          description: "Una experiencia para vivir el poder transformador de la medicina de los hongos bajo el contexto de terapias asistidas.",
          image: "/images/ceremonias/hero-ceremonia-2.jpg",
          href: "/ceremonias",
          cta: "Conocer más",
        },
      ],
    },
    testimonios: {
      title: "Testimonios",
      subtitle: "Experiencias de transformación",
      items: [
        {
          name: "Julia - Argentina",
          role: "",
          image: "/images/testimonios/julia.png",
          quote:
            `Amé el proceso. Me sentí muy acompañada todo el tiempo. Eli me ayudó a traer claridad sobre lo que las micro me estaban mostrando. Una experiencia de mucho crecimiento. 
            Se lo recomiendo a cualquier persona que desee conocerse más a sí misma y esté dispuesta a volverse más creativa.`,
        },
        {
          name: "Estefania - Argentina",
          role: "",
          image: "/images/testimonios/estefania.png",
          quote:`Gracias, Eli, por tu apoyo. La energía que transmites es realmente hermosa, y me sentí tan segura que pude sumergirme por completo en la experiencia. 
          No hubo ni un solo segundo en el que supiera que todo estaría bien, pasara lo que pasara, y eso fue gracias a lo que me transmitiste. 
          Nunca me había rendido tan rápido y tan fácilmente a una experiencia tan poderosa como esta. Simplemente, gracias.`
            ,
        },
        {
          name: "Francisco - Ecuador",
          role: "",
          image: "/images/testimonios/francisco.jpg",
          quote:`Lleno de gratitud, amor y sobretodo mayor perspectiva y claridad mental después de una experiencia realmente mágica!!!
          Gracias por tu compañía y cariño!!!
          Me sentí muy seguro, cuidado, guiado y querido!!! Gracias, gracias, gracias!!!
          `
            ,
        },
        {
          name: "Dagmar - República Checa",
          role: "",
          image: "/images/testimonios/dagmar.jpg",
          quote:`Estar en un ambiente cuidadísimo, con alguien que no pretende juzgarte y te acepta como sos y te acompaña en tu camino. 
          Se requiere ser un alma de mucho viaje por el Universo para poder hacerlo.  Gracias 🤍🙏`
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
      title: "",
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
      title: "About me",
      name: "Eliana Martínez",
      image: "/images/eli-portrait.jpg",
      bio: `I am Eli, passionate about human development processes and life in nature. I seek to accompany people in their search for integration and learning, building connections that allow for a new perspective.

My work is rooted in a systemic perspective: life is an interconnected web that, if we learn to listen to, nurture, and care for it, has the innate capacity to regenerate itself and create new networks of connection.

Today, I feel I walk alongside a broad and committed network of people who are creating a new paradigm: the union of nature's medicine with our humanity for the healing and regeneration of the human experience on Earth.

This path has given me so much. That is why I feel a profound commitment to giving back.

I don't believe in salvation; I believe in a path. And there is nothing more fulfilling than feeling you are on yours: there, even challenges become gifts, because they are truly your own.`,
      credentials: [
        "Ontological Coach, NLP & Nervous System Specialist",
        "Psychedelic-Assisted Therapies.",
        "Heart Breath Method Breathwork and Cryotherapy Facilitator",
        "Yoga and Meditation Instructor",
      ]
    },
    caminos: {
      title: "Pathways",
      subtitle: "",
      cards: [
        {
          type: "In-Person",
          title: "Retreats",
          description: "Immerse yourself in a transformative four days experience in nature.",
          image: "/images/camino-retiro.jpg",
          href: "/retiros",
          cta: "Explore retreats",
        },
        {
          type: "Online",
          title: "Microdosing Support",
          description: "Individual and group support to integrate microdosing into your personal journey.",
          image: "/images/camino-microdosis.jpg",
          href: "/microdosis",
          cta: "Learn more",
        },
        {
          type: "In-Person",
          title: "Ceremonies",
          description: "An experience to discover the transformative power of mushroom medicine within the context of assisted therapies.",
          image: "/images/ceremonias/hero-ceremonia-2.jpg",
          href: "/ceremonias",
          cta: "Learn More",
        },
      ],
    },
    testimonios: {
      title: "Testimonials",
      subtitle: "Transformation experiences",
      items: [
        {
          name: "Julia - Argentina",
          role: "",
          image: "/images/testimonios/julia.png",
          quote:
            `I loved the process. I felt very supported the entire time. Eli helped me bring clarity to what the micros were showing me. An experience of immense growth. 
            I recommend it to anyone who wants to know themselves better and is willing to become more creative.`,
        },
        {
          name: "Estefania - Argentina",
          role: "",
          image: "/images/testimonios/estefania.png",
          quote:`Thank you, Eli, for your support. The energy you transmit is truly beautiful, and I felt so safe that I was able to fully immerse myself in the experience. 
          There wasn't a single second where I didn't know everything would be okay, no matter what happened, and that was thanks to what you transmitted to me. 
          I had never surrendered so quickly and so easily to such a powerful experience. Simply, thank you.`
            ,
        },
        {
          name: "Francisco - Ecuador",
          role: "",
          image: "/images/testimonios/francisco.jpg",
          quote:`Filled with gratitude, love, and above all, greater perspective and mental clarity after a truly magical experience!!!
          Thank you for your companionship and affection!!!
          I felt very safe, cared for, guided, and loved!!! Thank you, thank you, thank you!!!
          `
            ,
        },
        {
          name: "Dagmar - Czech Republic",
          role: "",
          image: "/images/testimonios/dagmar.jpg",
          quote:`Being in a meticulously cared-for environment, with someone who doesn't try to judge you, accepts you as you are, and accompanies you on your path. 
          It takes a soul that has traveled a lot through the Universe to be able to do so. Thank you 🤍🙏`
            ,
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
      title: "",
      description: `Un retiro de conexión somática micelar es una vivencia diseñada para reconectar con el cuerpo y el estado de presencia, inspirado en la forma en que funciona el micelio en la naturaleza: una red subterránea de hongos que conecta, nutre y comunica a todo el bosque.
Con prácticas que invitan a escuchar, habitar y reconectar con el cuerpo y nuestra inteligencia interoceptiva. 
Con un enfoque en Terapias Asistidas cada retiro es único porque participan distintos facilitadores que aportan sus talentos, creando un espacio vivo de intercambio, confianza y colaboración.
`,
      features: [
        "Ceremonia Macro de Psilocibina",
        "Actividades psicoterapéuticas",
        "Prácticas Somáticas ",
        "Grupos íntimos y espacios seguros",
        "Acompañamiento y guía",
        "Alimentación nutritiva y saludable"
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
      title: "",
      description:`A somatic mycelial connection retreat is an experience designed to reconnect with the body and the state of presence, inspired by the way mycelium works in nature: an underground network of fungi that connects, nourishes, and communicates with the entire forest.
With practices that invite us to listen to, inhabit, and reconnect with the body and our interoceptive intelligence.
With a focus on Assisted Therapies, each retreat is unique because different facilitators participate, bringing their talents to create a living space of exchange, trust, and collaboration.`,
      features: [
        "Macro Psilocybin Ceremony",
        "Psychotherapeutic activities",
        "Somatic Practices",
        "Intimate groups and safe spaces",
        "Support and guidance",
        "Nutritious and healthy food",
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
      title: "Acompañamiento para el uso de Microdosis",
      subtitle: "Un proceso integral, seguro y educativo",
      backgroundImage: "/images/microdosis/hero-microdosis.webp",
    },
    intro: {
      description: "Mi servicio de acompañamiento con microdosis se basa en un enfoque integral, seguro y respetuoso de cada proceso individual, donde el protagonismo está siempre en la persona y su propio ritmo.\nNo promuevo el uso de sustancias ni realizo indicaciones médicas, sino que ofrezco contención, orientación y educación para quienes ya han decidido explorar esta práctica desde su autonomía y responsabilidad personal.",
    },
    considerations: {
      title: "Desde dónde acompaño",
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
        "Quienes busquen profundizar en sus emociones y transformar conductas limitantes.",
        "Quienes busquen despertar su creatividad, reconectando con la inspiración y el juego interior.",
        "Quienes busquen despertar su pasión y crear espacios donde su energía vital fluye con autenticidad.",
        "Quienes busquen vivir un proceso consciente, respetuoso y acompañado, que les permita cultivar presencia, orden y coherencia interior.",
      ],
    },
    benefits: {
      title: "Potenciales beneficios",
      cards: [
        {
          frontTitle: "Mayor autoconocimiento y claridad interna",
          frontIcon: "eye",
          image: "/images/microdosis/potenciales-beneficios-1.webp",
          backContent: "Las microdosis facilitan una mayor consciencia de patrones de pensamiento, emociones y comportamientos, abriendo camino hacia un autoconocimiento más profundo y genuino.",
        },
        {
          frontTitle: "Regulación emocional y seguridad corporal",
          frontIcon: "heart",
          image: "/images/microdosis/potenciales-beneficios-2.webp",
          backContent: "Muchas personas reportan mayor calma y estabilidad emocional, desarrollando una sensación de seguridad en el cuerpo que les permite atravesar la vida con más ecuanimidad.",
        },
        {
          frontTitle: "Escuchar el cuerpo como fuente de sabiduría",
          frontIcon: "refresh-cw",
          image: "/images/microdosis/potenciales-beneficios-3.webp",
          backContent: "El proceso invita a reconectar con las señales del cuerpo, aprendiendo a leerlas como mensajes valiosos en lugar de obstáculos a superar.",
        },
        {
          frontTitle: "Mayor neuroplasticidad y nuevos caminos adaptativos",
          frontIcon: "zap",
          image: "/images/microdosis/potenciales-beneficios-1.webp",
          backContent: "Las microdosis pueden potenciar la capacidad del cerebro para crear nuevas conexiones, facilitando la apertura a perspectivas y respuestas más adaptativas.",
        },
        {
          frontTitle: "Liberación de tensiones y patrones limitantes",
          frontIcon: "zap",
          image: "/images/microdosis/potenciales-beneficios-2.webp",
          backContent: "El trabajo con microdosis puede ayudar a soltar bloqueos físicos, emocionales o mentales que ya no son funcionales, abriendo espacio para nuevas formas de ser y estar.",
        },
        {
          frontTitle: "Relación más amable contigo mismo y con los demás",
          frontIcon: "heart",
          image: "/images/microdosis/potenciales-beneficios-3.webp",
          backContent: "Muchas personas reportan un aumento en la autocompasión y en la calidad de sus vínculos, encontrando formas más amorosas de relacionarse consigo mismas y con su entorno.",
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
      backgroundImage: "/images/microdosis/hero-microdosis.webp",
    },
    intro: {
      description: "My microdosis accompaniment service is based on a comprehensive, safe and respectful approach to each individual process, where the focus is always on the person and their own rhythm.\nI do not promote the use of substances or provide medical guidance, but rather offer support, orientation and education for those who have already decided to explore this practice from their own autonomy and personal responsibility.",
    },
    considerations: {
      title: "Where I stand as a guide",
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
        "Those seeking to deepen their emotions and transform limiting behaviors.",
        "Those seeking to awake their creativity, reconnecting with inspiration and inner play.",
        "Those seeking to awake their passion and create spaces where their vital energy flows authentically.",
        "Those seeking to live a conscious, respectful and supported process that allows them to cultivate presence, order and inner coherence.",
      ],
    },
    benefits: {
      title: "Potential benefits",
      cards: [
        {
          frontTitle: "Greater self-knowledge and inner clarity",
          frontIcon: "eye",
          image: "/images/microdosis/potenciales-beneficios-1.webp",
          backContent: "Microdoses facilitate greater awareness of thought patterns, emotions and behaviors, opening the way to deeper and more genuine self-knowledge.",
        },
        {
          frontTitle: "Emotional regulation and body safety",
          frontIcon: "heart",
          image: "/images/microdosis/potenciales-beneficios-2.webp",
          backContent: "Many people report greater calm and emotional stability, developing a sense of safety in the body that allows them to move through life with more equanimity.",
        },
        {
          frontTitle: "Listening to the body as a source of wisdom",
          frontIcon: "refresh-cw",
          image: "/images/microdosis/potenciales-beneficios-3.webp",
          backContent: "The process invites reconnecting with the body's signals, learning to read them as valuable messages rather than obstacles to overcome.",
        },
        {
          frontTitle: "Greater neuroplasticity and new adaptive pathways",
          frontIcon: "zap",
          image: "/images/microdosis/potenciales-beneficios-1.webp",
          backContent: "Microdoses can enhance the brain's ability to create new connections, facilitating openness to more adaptive perspectives and responses.",
        },
        {
          frontTitle: "Release of tensions and limiting patterns",
          frontIcon: "zap",
          image: "/images/microdosis/potenciales-beneficios-2.webp",
          backContent: "Working with microdoses can help release physical, emotional or mental blocks that are no longer functional, making space for new ways of being.",
        },
        {
          frontTitle: "A kinder relationship with yourself and others",
          frontIcon: "heart",
          image: "/images/microdosis/potenciales-beneficios-3.webp",
          backContent: "Many people report an increase in self-compassion and the quality of their bonds, finding more loving ways to relate to themselves and their environment.",
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

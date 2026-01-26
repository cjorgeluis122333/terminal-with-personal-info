export type Language = 'en' | 'es';
export type Mode = 'ai' | 'terminal';

export const TRANSLATIONS = {
    en: {
        header: "Bio.Terminal",
        name: "Jorge Luis Castillo",
        role: "Android Developer @ Xetid",
        sessionStatus: "Session Active",
        lastLogin: "Last login",
        systemStable: "CPU: STABLE",
        execute: "Run Command",
        placeholder: "Execute command...",
        processing: "PROCESSING_REQUEST...",
        busy: "Busy",
        greeting: {
            header: "Hi! I'm Jorge Luis Castillo",
            description:
                "Computer Science graduate and Android Developer at Xetid, with over three years of experience building modern, scalable mobile applications focused on the Cuban ecosystem."
        },
        commands: {
            help: "Available Commands",
            about: "About Me",
            stack: "Skills & Technologies",
            works: "Featured Projects",
            contact: "Find Me Online",
            clear: "Reset terminal",
            helpDesc: {
                about: "Professional background and experience",
                stack: "Programming languages, frameworks, and tools",
                works: "Selected GitHub repositories and projects",
                contact: "Professional and social links",
                clear: "Clear terminal history"
            }
        },
        sections: {
            about:
                "I am a Computer Science graduate and Android Developer at Xetid, a Cuban technology company. With more than three years of professional experience in Android development, I specialize in building clean, efficient, and scalable mobile applications using Kotlin and Jetpack Compose. I strongly value continuous learning and best development practices to deliver high-quality software solutions.",
            skills: {
                languages: "Languages",
                frameworks: "Frameworks",
                db: "Databases",
                tools: "Tools"
            }
        },
        footer: {
            systemOperational: "System Operational",
            region: "Region: us-east-1"
        },
        errorMessage: "The term '{input}' is not recognized."
    },

    es: {
        header: "Bio.Terminal",
        name: "Jorge Luis Castillo",
        role: "Desarrollador Android @ Xetid",
        sessionStatus: "Sesión Activa",
        lastLogin: "Último inicio",
        systemStable: "CPU: ESTABLE",
        execute: "Ejecutar",
        placeholder: "Escribe un comando...",
        processing: "PROCESANDO_PETICIÓN...",
        busy: "Ocupado",
        greeting: {
            header: "¡Hola! Soy Jorge Luis Castillo",
            description:
                "Licenciado en Ciencias de la Computación y Desarrollador Android en Xetid, con más de tres años de experiencia en el desarrollo de aplicaciones móviles modernas orientadas al ecosistema cubano."
        },
        commands: {
            help: "Comandos Disponibles",
            about: "Sobre Mí",
            stack: "Habilidades y Tecnologías",
            works: "Proyectos Destacados",
            contact: "Encuéntrame en línea",
            clear: "Reiniciar terminal",
            helpDesc: {
                about: "Trayectoria profesional y experiencia",
                stack: "Lenguajes de programación, frameworks y herramientas",
                works: "Repositorios y proyectos seleccionados en GitHub",
                contact: "Enlaces profesionales y redes sociales",
                clear: "Limpiar el historial de la terminal"
            }
        },
        sections: {
            about:
                "Soy Licenciado en Ciencias de la Computación y Desarrollador Android en Xetid, una empresa tecnológica cubana. Cuento con más de tres años de experiencia profesional en el desarrollo de aplicaciones Android, especializándome en la creación de soluciones móviles limpias, escalables y eficientes utilizando Kotlin y Jetpack Compose. El aprendizaje continuo y las buenas prácticas de desarrollo son pilares fundamentales de mi trabajo.",
            skills: {
                languages: "Lenguajes",
                frameworks: "Frameworks",
                db: "Bases de Datos",
                tools: "Herramientas"
            }
        },
        footer: {
            systemOperational: "Sistema Operativo",
            region: "Región: us-east-1"
        },
        errorMessage: "El término '{input}' no se reconoce."
    }
};

export const SKILL_GROUPS = [
    {
        id: 'languages',
        icon: 'terminal',
        items: ['Kotlin', 'Java', 'JavaScript', 'SQL'],
        color: 'blue'
    },
    {
        id: 'frameworks',
        icon: 'deployed_code',
        items: ['Jetpack Compose', 'Spring Boot', 'React'],
        color: 'teal'
    },
    {
        id: 'db',
        icon: 'database',
        items: ['MySQL', 'PostgreSQL', 'SQLite'],
        color: 'slate'
    },
    {
        id: 'tools',
        icon: 'construction',
        items: ['Git', 'GitHub', 'Docker', 'Android Studio', 'IntelliJ IDEA'],
        color: 'blue'
    }
];

export const PROJECTS_DATA = {
    en: [
        {
            title: 'Modular-App-Contact',
            description: 'Modular Android application for managing contacts, featuring clean architecture and Jetpack Compose.',
            tags: ['Kotlin', 'Jetpack Compose', 'Clean Architecture'],
            link: 'https://github.com/cjorgeluis122333/Modular-App-Contact'
        },
        {
            title: 'my-practice-spring-boot',
            description: 'Backend project implementing RESTful APIs and modern Java design patterns.',
            tags: ['Java', 'Spring Boot', 'REST API'],
            link: 'https://github.com/cjorgeluis122333/my-practice-spring-boot'
        },
        {
            title: 'final-project-react',
            description: 'Web development project showcasing advanced UI components and state management.',
            tags: ['React', 'JavaScript', 'UI/UX'],
            link: 'https://github.com/cjorgeluis122333/final-project-react'
        }
    ],
    es: [
        {
            title: 'Modular-App-Contact',
            description: 'Aplicación Android modular para gestionar contactos, con arquitectura limpia y Jetpack Compose.',
            tags: ['Kotlin', 'Jetpack Compose', 'Arquitectura Limpia'],
            link: 'https://github.com/cjorgeluis122333/Modular-App-Contact'
        },
        {
            title: 'my-practice-spring-boot',
            description: 'Proyecto backend que implementa APIs RESTful y patrones de diseño modernos en Java.',
            tags: ['Java', 'Spring Boot', 'API REST'],
            link: 'https://github.com/cjorgeluis122333/my-practice-spring-boot'
        },
        {
            title: 'final-project-react',
            description: 'Proyecto de desarrollo web que muestra componentes de UI avanzados y gestión de estado.',
            tags: ['React', 'JavaScript', 'UI/UX'],
            link: 'https://github.com/cjorgeluis122333/final-project-react'
        }
    ]
};


export const validCommands = {
    'help': 'help',
    'stack': 'stack',
    'works': 'works',
    'clear': 'clear',
    'about': 'about',
    'contact': 'contact'
};

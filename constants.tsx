
import React from 'react';

export type Language = 'en' | 'es';

export const TRANSLATIONS = {
  en: {
    header: "Cloud Console",
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
      header: "Hi there! I'm Jorge Luis Castillo",
      description: "4th-year Computer Science student and Android Developer at Xetid. I focus on building innovative mobile solutions for the Cuban ecosystem."
    },
    commands: {
      help: "Available Commands",
      about: "About Me",
      stack: "Skills & Technologies",
      works: "Favorite Projects",
      contact: "Find Me Online",
      clear: "Reset terminal",
      helpDesc: {
        about: "Academic status & professional background",
        stack: "Languages, frameworks and tools",
        works: "Github repositories and key projects",
        contact: "Social media and professional links",
        clear: "Clear screen history"
      }
    },
    sections: {
      about: "I'm a 4th-year Computer Science student and Android Developer at Xetid, a Cuban tech company. With over two years of experience in Android development, I focus on building innovative mobile solutions using Kotlin and Jetpack Compose. Continuous learning is my key to innovation.",
      skills: {
        languages: "Languages",
        frameworks: "Frameworks",
        db: "Databases",
        tools: "Tools"
      }
    }
  },
  es: {
    header: "Consola Cloud",
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
      description: "Estudiante de 4to año de Ciencias de la Computación y Desarrollador Android en Xetid. Me enfoco en crear soluciones móviles innovadoras para el ecosistema cubano."
    },
    commands: {
      help: "Comandos Disponibles",
      about: "Sobre Mí",
      stack: "Habilidades y Tecnologías",
      works: "Proyectos Favoritos",
      contact: "Encuéntrame en línea",
      clear: "Reiniciar terminal",
      helpDesc: {
        about: "Estado académico y trayectoria profesional",
        stack: "Lenguajes, frameworks y herramientas",
        works: "Repositorios de Github y proyectos clave",
        contact: "Redes sociales y enlaces profesionales",
        clear: "Limpiar el historial de pantalla"
      }
    },
    sections: {
      about: "Soy estudiante de 4to año de Ciencias de la Computación y Desarrollador Android en Xetid. Con más de dos años de experiencia en desarrollo Android, me enfoco en crear soluciones móviles innovadoras para el ecosistema cubano usando Kotlin y Jetpack Compose. El aprendizaje continuo es mi clave para la innovación.",
      skills: {
        languages: "Lenguajes",
        frameworks: "Frameworks",
        db: "Bases de Datos",
        tools: "Herramientas"
      }
    }
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

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    DevZeros,
    essmar,
    compra_vip,
    vup_cars,
    zoom_pelis,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "sobre-mi",
        title: "Sobre Mi",
    },
    {
        id: "trabajo",
        title: "Trabajo",
    },
    {
        id: "contacto",
        title: "Contacto",
    },
];

const services = [
    {
        title: "Desarrollador Web",
        icon: web,
    },
    {
        title: "Desarrollador Frontend",
        icon: mobile,
    },
    {
        title: "Desarrollador Backend",
        icon: backend,
    },
    {
        title: "Bases de Datos",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Desarrollador PHP | Laravel",
        company_name: "DevZeros S.A.S.",
        icon: DevZeros,
        iconBg: "#383E56",
        date: "Agosto 2023 - Diciembre 2023",
        points: [
            "Especializado en la maquetación de interfaces de usuario y el desarrollo de funcionalidades en Laravel.",
            "Destacado por la exitosa implementación de un módulo que gestiona los grupos de cursos en el Bootcamp DevZeros School.",
            "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
            "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores..",
        ],
    },
    {
        title: "Desarrollador MERN",
        company_name: "ESSMAR",
        icon: essmar,
        iconBg: "#E6DEDD",
        date: "Enero 2023 - Julio 2023",
        points: [
            "Desarrollar y mantener una aplicación web utilizando el stack MERN.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores y otros desarrolladores.",
            "Desarrollar interfaces de usuarios de calidad para el cliente.",
        ],
    },
];

const projects = [
    {
        name: "Compra VIP",
        description:
            "Compra VIP es una plataforma de comercio electrónico diseñada para brindarte una experiencia de compra exclusiva y conveniente desde la comodidad de tu hogar.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "react-redux",
                color: "pink-text-gradient",
            },
        ],
        image: compra_vip,
        source_code_link: "https://github.com/jivandaza/react-projects/tree/main/compra-vip",
    },
    {
        name: "VUP Cars",
        description:
            "VUP Carros es una aplicación de alquiler de vehículos que ofrece una solución conveniente y flexible para tus necesidades de transporte.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux toolkit",
                color: "green-text-gradient",
            },
            {
                name: "node",
                color: "pink-text-gradient",
            },
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "antd",
                color: "pink-text-gradient",
            },
        ],
        image: vup_cars,
        source_code_link: "https://github.com/jivandaza/react-projects/tree/main/vup-carros",
    },
    {
        name: "Zoom Pelis",
        description:
            "Zoom Pelis es una aplicación de consulta de películas diseñada para satisfacer todas tus necesidades cinematográficas. Con una vasta base de datos de películas de todos los géneros y épocas.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "vite",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "redux toolkit",
                color: "blue-text-gradient",
            },
            {
                name: "react redux",
                color: "green-text-gradient",
            },
            {
                name: "axios",
                color: "pink-text-gradient",
            },
        ],
        image: zoom_pelis,
        source_code_link: "https://github.com/jivandaza/zoom-pelis",
    },
];

export { services, technologies, experiences, projects };
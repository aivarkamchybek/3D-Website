import { meta, shopify, starbucks, tesla, parts4cells, zoominn } from "../assets/images";
import {
    python,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django,
    java,
    solidity,
    mysql,
    php,
    swift,
    kotlin,
    movie,
    portfolio,
    home,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "CSS",
        type: "language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "language",
    },
    {
        imageUrl: php,
        name: "Php",
        type: "language",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "language",
    },
    {
        imageUrl: swift,
        name: "swift",
        type: "language",
    },
    {
        imageUrl: kotlin,
        name: "kotlin",
        type: "language",
    },
    {
        imageUrl: django,
        name: "django",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "database",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "Parts4Cells",
        icon: parts4cells,
        iconBg: "#accbe1",
        date: "May 2022 - August 2022",
        points: [
            "Enhanced operational efficiency by implementing a PHP-based automated label generation system for LCD buyback requests, reducing processing time by 40% and leading to a 15% reduction in associated costs.",
            "Collaborated with the development team to boost Magento e-commerce website performance, implementing advanced HTML and CSS techniques for a 20% faster load time and 15% increased user engagement ",
            "Optimized and seamlessly implemented a store credit and refund system, resulting in a remarkable increase in revenue within a  span of just two months",
            "Collaborated in cross-functional teams to enhance problem-solving capabilities, ensuring superior code quality and performance optimization, ultimately contributing to increase in website efficiency",
        ],
    },
    {
        title: "Blockchain Developer Intern",
        company_name: "Zoominn",
        icon: zoominn,
        iconBg: "#c3bcfb",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Efficiently deployed a customized token (ZONN) on the Binance Smart Chain by leveraging Solidity and blockchain development tools",
            "Architected and implemented robust, efficient, and scalable smart contracts for token issuance, distribution, and trading on decentralized exchanges (DEXs)",
            "Managed liquidity pool and wallet operations for the token, ensuring accessibility and sufficient liquidity for users",
  
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Paynow',
        description: 'Welcome to the dynamic world of web development! In this portfolio project, I have embarked on an exciting journey to create a sophisticated banking application using the powerful Django framework.',
        link: 'https://github.com/aivarkamchybek/PayNow',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Ai-Powered-3DReactMotionKit',
        description: 'Welcome to 3DReactMotionKit, a comprehensive toolkit for building visually captivating and interactive websites using the power of ThreeJS, React Three Fiber, TailwindCSS, and Framer Motion.',
        link: 'https://github.com/aivarkamchybek/Ai-Powered-3DReactMotionKit',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Flashcards-Application',
        description: 'The flashcards app is a web-based application that allows users to create, store, and review flashcards. The app features a user-friendly interface that makes it easy for users to create new flashcards, edit existing ones, and review them to improve their knowledge.',
        link: 'https://github.com/aivarkamchybek/Flashcards-Application',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-blue',
        name: 'Movie Booking System',
        description: 'Welcome to the Movie Booking System. Movie Booking System allowing theater staff to add showtimes and for the customers to view and allow an easy way to book their tickets online.',
        link: 'https://github.com/aivarkamchybek/Movie_Booking_System',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: '3D portfolio',
        description: 'Welcome to the 3D portfolio. This is a 3D portfolio website that I created using ThreeJS, React Three Fiber, TailwindCSS, and Framer Motion.',
        link: 'https://github.com/aivarkamchybek/3D-Website',
    }
];
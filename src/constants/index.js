import { meta, shopify, starbucks, tesla, parts4cells, leoparts } from "../assets/images";
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
        date: "May 2023 - August 2023",
        points: [
            "Developed and implemented a new website section dedicated to device interaction using PHP and JavaScript",
            "Implemented a PHP-based automated label generation system, reducing processing time by 40% for LCD buyback requests",
            "Optimized a store credit and refund system, leading to a remarkable increase in revenue within two months",
            "Designed and deployed a MySQL database solution to efficiently manage repair and maintenance history for 1000+ phones",
            "Implemented reporting features using Java to generate and display insightful reports on repair trends, inventory status, and other relevant metrics",
            "Successfully reconciled and synchronized recorded MySQL inventory with user-provided counts using Java JDBC, ensuring precise inventory management",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "LeoParts",
        icon: leoparts,
        iconBg: "#c3bcfb",
        date: "May 2022 - August 2022",
        points: [
            "Collaborated with the team to enhance the Magento e-commerce site, achieving a 20% faster load time and a 15% increase in user engagement",
            "Optimized server-side functionalities, resulting in a 25% improvement in data processing efficiency",
            "Collaborated in cross-functional teams to enhance problem-solving capabilities and code quality",
            "Demonstrated strong problem-solving skills by addressing complex technical challenges and finding efficient solutions",
            "Engaged in continuous learning and skill development, staying updated on the latest technologies and industry best practices",
            "Integrated 2 third-party APIs, expanding the platform’s functionality and feature set",
  
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
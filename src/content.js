export const personalInfo = {
    name: "Onur Şimşek",
    title: "Senior Full-Stack & Backend Engineer",
    subtitle: "Full-Stack Web Applications · Microservices Architecture · Distributed Backend Systems · Integrations",
    location: "Ankara, Turkey (Open to Global Remote)",
    timezone: "UTC+3 · Flexible overlap with US, Canada & Europe",
    email: "onursimsek0643@gmail.com",
    github: "https://github.com/simsekonur",
    linkedin: "https://www.linkedin.com/in/s-onur/",
    status: "Open to Senior Full-Stack & Backend Roles (Remote)"
};

export const about = `Senior Full-Stack Software Engineer with 6+ years of experience engineering modern web applications, scalable microservice architectures, and distributed backend systems. With comprehensive expertise spanning both frontend (React, modern JavaScript/TypeScript, responsive UI architectures) and backend (Node.js, NestJS, Express, Python, Java, C#, Spring Boot, PostgreSQL, MongoDB), I specialize in delivering end-to-end software solutions from rich user interfaces down to high-performance microservices and optimized databases. Proven track record leading technical ownership across repositories, collaborating directly with CTOs in global remote teams, and seamlessly implementing complex system integrations.`;

export const metrics = [
    { value: "6+", label: "Years Experience", description: "Building scalable production systems" },
    { value: "100M+", label: "Users Impacted", description: "Across global recommendation engines" },
    { value: "50M+", label: "Records Processed", description: "Through high-volume CLI & ETL pipelines" },
    { value: "8+", label: "Core Repos Owned", description: "Full technical ownership from code to deploy" }
];

export const competencies = [
    {
        title: "End-to-End Full-Stack Development",
        icon: "fullstack",
        description: "Proven expertise architecting complete web applications: responsive React frontends, state management, client dashboards, and robust REST APIs built with Node.js, NestJS, and Express."
    },
    {
        title: "Microservices & Distributed Systems",
        icon: "microservice",
        description: "Built and scaled decoupled microservice architectures, asynchronous background workers, intelligent crawlers, and cron services serving 100M+ unique visitors across multiple repositories."
    },
    {
        title: "Database Modeling & High-Scale Ingestion",
        icon: "database",
        description: "Designed schema structures and complex queries across PostgreSQL, MongoDB, MySQL, Elasticsearch, and Apache Hive, coupled with containerized nightly data processing pipelines."
    },
    {
        title: "Implementation, Integrations & Reliability",
        icon: "pipeline",
        description: "Experienced in enterprise integrations, third-party APIs, automated QA checks (reducing manual QA by 40%), production on-call ownership, and GitHub Actions CI/CD workflows."
    }
];

export const experience = [
    {
        title: "Senior Software Engineer — Integrations & Backend",
        company: "Just Appraised",
        type: "Contract · Remote",
        location: "USA",
        period: "Apr 2024 – Sep 2026",
        highlight: "Owned 8 integration repositories & collaborated directly with CTO",
        techStack: ["C#", "Java", "Python", "PostgreSQL", "NinjaOne", "NSSM", "Docker", "GitHub Actions"],
        bullets: [
            "Maintained end-to-end technical ownership across 8 core integration repositories within a globally distributed team of 11 engineers, collaborating directly with the CTO to align on architecture while independently handling on-call rotations.",
            "Engineered custom client integration services and containerized backend jobs (C#, Java, Python) enabling county assessors to review, verify, and load property records into client databases or via public APIs.",
            "Attended technical client calls alongside Customer Engineers, independently transforming customer requirements into production-ready software implementations.",
            "Architected nightly containerized data extraction, transformation, and ingestion pipelines to process customer records, parse massive text files into structured CSVs, and extract/index high-volume deed files for cloud ingestion.",
            "Managed production deployments and system operations across client environments using NinjaOne for remote VM operations, NSSM for Windows service management, and GitHub Actions for continuous integration."
        ]
    },
    {
        title: "Software Engineer",
        company: "TrendMD",
        type: "Contract · Remote",
        location: "Toronto, Canada",
        period: "Apr 2022 – Apr 2024",
        highlight: "Powered recommendation systems for 100M+ unique visitors",
        techStack: ["TypeScript", "Node.js", "NestJS", "React", "PostgreSQL", "Apache Hive", "Elasticsearch", "Playwright", "Puppeteer"],
        bullets: [
            "Collaborated in a globally distributed team of 8 engineers building backend microservices, crawlers, and cron jobs powering recommendation systems for 100M+ unique visitors across 7+ core repositories.",
            "Engineered 5+ new and modified 10+ existing Node.js CLI tools interacting with 50M+ database records; implemented TDD/unit testing and Slack API notifications, including automated daily QA cron checks that reduced manual QA workload by 40%.",
            "Executed complex database queries in PostgreSQL, Hive, and Elasticsearch for deep operational data analysis and implemented user-facing feature requests across client dashboards.",
            "Led codebase modernization by migrating legacy JavaScript microservices to TypeScript and updating core dependency trees to boost system maintainability.",
            "Resolved 300+ support tickets for international clients and designed metadata web crawlers using Puppeteer/Playwright with Similarweb and Twitter integrations, automating reporting via Google Sheets API."
        ]
    },
    {
        title: "Software Engineer",
        company: "Retrace (via Avena IT)",
        type: "Contract · Remote",
        location: "San Francisco, USA",
        period: "Jul 2020 – Apr 2022",
        highlight: "Boosted web scraping accuracy & execution performance by 80%",
        techStack: ["JavaScript", "Node.js", "React", "MongoDB", "Puppeteer", "REST APIs"],
        bullets: [
            "Engineered end-to-end full-stack web features connecting dental clinics, patients, and insurers, collaborating closely with QA engineers to resolve issues and optimize page load performance.",
            "Developed web scraping bots using Puppeteer and Node.js; optimized bot execution logic to achieve an 80% performance and accuracy improvement.",
            "Worked in a globally distributed team, communicating directly with company CTO and VP of Engineering during daily syncs and technical planning."
        ]
    },
    {
        title: "Software Engineer",
        company: "Avena IT",
        type: "Remote",
        location: "Ankara, Turkey",
        period: "Mar 2020 – Jul 2020",
        highlight: "Greenfield full-stack SaaS architecture for proprietary billing & time tracking",
        techStack: ["Node.js", "React", "MongoDB", "CSS", "REST APIs", "PDF Generation"],
        bullets: [
            "Engineered the greenfield full-stack architecture (frontend and backend) for the company's first proprietary SaaS application to automate internal time tracking and operational workflows.",
            "Designed and implemented complex backend service methods and REST endpoints to process multi-variable invoice data, rendering structured financial documents in an integrated PDF viewer."
        ]
    }
];

export const featuredProjects = [
    {
        title: "County Property Ingestion & ETL Engine",
        subtitle: "Enterprise Integration Architecture",
        company: "Just Appraised",
        description: "Containerized data extraction and ingestion pipeline that parses massive unstructured text files and property records into structured cloud data models with automated verification.",
        tags: ["C#", "Python", "Java", "PostgreSQL", "Docker", "NinjaOne", "ETL"],
        metric: "High-Volume Image/Deed Processing"
    },
    {
        title: "High-Throughput Content Recommendation Backend",
        subtitle: "Distributed Microservices & Analytics",
        company: "TrendMD",
        description: "Backend microservices, distributed crawlers, and CLI tools interacting with 50M+ records. Automated QA verification reduced manual workload by 40%.",
        tags: ["TypeScript", "NestJS", "Node.js", "Elasticsearch", "PostgreSQL", "Hive"],
        metric: "100M+ Unique Visitors"
    },
    {
        title: "Automated Insurance Verification Scrapers",
        subtitle: "High-Accuracy Web Automation",
        company: "Retrace",
        description: "Intelligent web automation bots handling real-time data exchange between insurance carriers and clinics, with custom retry and error handling algorithms.",
        tags: ["Puppeteer", "Node.js", "MongoDB", "React", "REST"],
        metric: "+80% Performance & Accuracy"
    }
];

export const skills = {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "SQL"],
    frontend: ["React", "TypeScript (Frontend)", "JavaScript (ES6+)", "HTML5 & CSS3", "Component Architecture", "State Management", "Responsive Web Apps"],
    backendFrameworks: ["Microservices Architecture", "Node.js", "NestJS", "Express", "Spring Boot", "RESTful APIs", "Distributed Systems", "Qt"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Elasticsearch", "Apache Hive"],
    testingAutomation: ["Jest", "Playwright", "Puppeteer", "TDD / Unit Testing", "Web Scraping"],
    tools: ["GitHub Actions (CI/CD)", "Docker", "Linux / Unix", "NinjaOne", "NSSM", "Git"]
};

export const education = [
    {
        school: "Middle East Technical University (METU)",
        degree: "B.Sc. in Computer Engineering",
        gpa: "CGPA: 3.19 / 4.00",
        location: "Ankara, Turkey",
        years: "2015 – 2020",
        highlights: [
            "Top-ranked technical university in Turkey, known for rigorous Computer Science curriculum",
            "Capstone Project: Multithreaded Desktop Optimization Application with STM Defense Technologies"
        ]
    }
];

export const earlierExperience = [
    {
        role: "Software Engineering Intern",
        organization: "TÜBİTAK BİLGEM",
        location: "Ankara, Turkey",
        period: "2019",
        description: "Built C++ static libraries for function execution timing using POSIX/TCP sockets."
    },
    {
        role: "Software Engineering Intern",
        organization: "Spark Calibration",
        location: "Ankara, Turkey",
        period: "2018",
        description: "Developed full-stack web alerting applications with React, Spring Boot, and PostgreSQL; labeled image datasets for deep learning models."
    }
];

export const interests = [
    "Distributed Systems",
    "High-Volume Data Pipelines",
    "Microservice Architectures",
    "Backend Optimization",
    "Workflow & QA Automation"
];

export const languages = [
    { lang: "Turkish", level: "Native" },
    { lang: "English", level: "Professional Working Proficiency" }
];

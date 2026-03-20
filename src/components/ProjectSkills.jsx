import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DualText } from './HonestMask';

const ProjectRow = ({ professional, honest, index, stats }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full border-b border-muted py-12 flex flex-col md:flex-row justify-between items-center group relative"
        >
            <div className="relative">
                <span className="text-muted text-xs font-mono mb-4 block tracking-[0.3em]">0{index + 1}</span>
                <h3 className="font-syne text-[clamp(1.2rem,4vw,5rem)] font-black leading-none uppercase text-outline group-hover:text-primary transition-all duration-500 whitespace-nowrap overflow-visible">
                    <DualText professional={professional} honest={honest} />
                </h3>
            </div>

            <div className="relative text-right mt-4 md:mt-0 font-mono text-muted text-sm tracking-[0.2em] uppercase">
                {stats}
            </div>

            {/* Background Parallax Reveal (Mock) */}
            <div className="absolute inset-x-0 inset-y-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <div className="w-full h-full bg-accent mix-blend-overlay blur-3xl opacity-20" />
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    const projects = [
        { professional: "AI AR KEYBOARD", honest: "TYPING ENGINE OF CHAOS", stats: "" },
        { professional: "MGIT BUS TRACKER", honest: "BUS IS NEVER ON TIME", stats: "" },
        { professional: "FILE CONVERTER", honest: "FFMPEG IS MAGIC", stats: "PYTHON + BOT API" }
    ];

    return (
        <React.Fragment>
        <section id="flagship-projects" className="py-32 px-12 pb-16">
            <h2 className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-24">Flagship Projects / Elite Selection</h2>
            
            <div className="flex flex-col gap-12">
                {/* Codevance Flagship */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative border border-muted/40 p-12 bg-background/50 backdrop-blur-md overflow-hidden group shadow-[0_0_40px_-20px_var(--color-accent-30)] hover:shadow-[0_0_80px_-20px_var(--color-accent-40)] transition-shadow duration-500"
                >
                    <div className="absolute -inset-40 bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
                        <div className="max-w-2xl">
                            <h3 className="font-syne text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Codevance</h3>
                            <p className="text-muted leading-relaxed font-mono text-sm tracking-wide lowercase mb-8">
                                AI-Powered Coding Journey Tracker. Track your programming progress across multiple coding platforms. Visualize stats, keep track of problems, link accounts, and get ai-powered insights and learning paths.
                            </p>
                        </div>
                        <a 
                            href="https://code.endiidishishir.qzz.io" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-shrink-0 bg-accent text-background px-10 py-5 font-mono text-xs tracking-[0.2em] font-bold uppercase hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-4"
                        >
                            Launch Codevance
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

                {/* Niora Flagship */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="relative border border-muted/40 p-12 bg-background/50 backdrop-blur-md overflow-hidden group shadow-[0_0_40px_-20px_var(--color-accent-20)] hover:shadow-[0_0_80px_-20px_var(--color-accent-40)] transition-shadow duration-500"
                >
                    {/* Deep blue/teal glow for Niora */}
                    <div className="absolute -inset-40 bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
                        <div className="max-w-2xl">
                            <h3 className="font-syne text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Niora</h3>
                            <p className="text-muted leading-relaxed font-mono text-sm tracking-wide lowercase mb-8">
                                An immersive music platform engineered for deep focus. Features curated rain sounds, endless audio odysseys, and a beautifully crafted, distraction-free user interface.
                            </p>
                        </div>
                        <a 
                            href="https://music.endiidishishir.qzz.io" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-shrink-0 border border-muted text-primary px-10 py-5 font-mono text-xs tracking-[0.2em] font-bold uppercase hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 flex items-center gap-4 group-hover:bg-accent group-hover:text-background group-hover:border-accent rounded-none shadow-lg hover:shadow-accent/50"
                        >
                            Listen to Niora
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>

        <section id="work" className="py-16 px-12 pt-0">
            <h2 className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-24">Other Work / Legacy</h2>
            <div className="flex flex-col border-t border-muted/30">
                {projects.map((p, i) => (
                    <ProjectRow key={i} index={i} {...p} />
                ))}
            </div>
        </section>
        </React.Fragment>
    );
};

export const Skills = () => {
    const categories = [
        {
            name: "Cloud & Backend",
            skills: [
                { name: "Google Cloud Platform", honest: "JUST ONE MORE API API" },
                { name: "Firebase", honest: "FREE TIER LIMITS" },
                { name: "Supabase", honest: "POSTGRES BUT COOLER" }
            ]
        },
        {
            name: "Automation & Data",
            skills: [
                { name: "n8n", honest: "ZAPIER WHO?" },
                { name: "RAG (Basic)", honest: "PROMPT ENGINEERING" },
                { name: "Neo4j (Basic)", honest: "GRAPH EVERYWHERE" },
                { name: "Web Automation", honest: "SELENIUM TEARS" }
            ]
        }
    ];

    return (
        <React.Fragment>
        <section id="skills" className="py-32 px-12">
            <h2 className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-24">Neural Stack / Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                {categories.map((cat, i) => (
                    <div key={i}>
                        <h3 className="text-muted text-xs tracking-[0.3em] uppercase mb-12">{cat.name}</h3>
                        <div className="flex flex-wrap gap-4">
                            {cat.skills.map((skill, si) => (
                                <div key={si} className="px-6 py-3 border border-muted hover:border-accent transition-colors group">
                                    <DualText professional={skill.name} honest={skill.honest} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section id="certificates" className="py-32 px-12 border-t border-muted/30">
            <h2 className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-24">Verified Credentials / Certificates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: '“This is Animation” Course',
                        org: "Sony Pictures Animation & Imageworks",
                        desc: "Learned fundamentals of animation production, storytelling, and industry workflows used in professional studios.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/1.png"
                    },
                    {
                        title: "5-Day AI Agents Intensive Course",
                        org: "Google x Kaggle",
                        desc: "Completed an intensive program focused on building and understanding AI agents, including workflows, automation, and real-world applications using modern AI tools.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/2.png"
                    },
                    {
                        title: "Solutions Architecture Job Simulation",
                        org: "AWS x Forage",
                        desc: "Designed scalable cloud architectures using AWS services, focusing on real-world system design, cost optimization, and deployment strategies.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/3.png"
                    },
                    {
                        title: "Summer of AI Internship (4 Weeks)",
                        org: "Viswam AI, Swecha, IIIT Hyderabad, Meta",
                        desc: "Built AI/ML projects, explored LLMs and real-world AI applications, and collaborated in a structured internship environment with mentorship.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/4.png"
                    },
                    {
                        title: "HackWithIndia VibeHack",
                        org: "Ranked under top 1000 teams",
                        desc: "Participated in a competitive hackathon, developing innovative solutions under time constraints and collaborating in a high-pressure environment.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/5.png"
                    },
                    {
                        title: "Regression Model for Ride Fare Prediction",
                        org: "Aspire Skills & Knowledge x Uber",
                        desc: "Developed a machine learning regression model to predict ride fares using data preprocessing, feature engineering, and model evaluation techniques.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/6.png"
                    },
                    {
                        title: "Elements of AI",
                        org: "University of Helsinki x Reaktor",
                        desc: "Learned foundational concepts of artificial intelligence, including machine learning basics, neural networks, and ethical implications of AI.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/7.png"
                    },
                    {
                        title: "Microsoft Azure Internship (4 Weeks)",
                        org: "AICTE x Microsoft Elevate",
                        desc: "Gained hands-on experience with Azure cloud services, focusing on deployment, cloud fundamentals, and AI integrations.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/8.png"
                    },
                    {
                        title: "Introduction to Cybersecurity",
                        org: "Cisco",
                        desc: "Learned core cybersecurity principles including threats, vulnerabilities, network security, and basic defense mechanisms.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/9.png"
                    },
                    {
                        title: "Data Analyst Certification",
                        org: "OneRoadmap",
                        desc: "Developed skills in data analysis, visualization, and interpretation using modern data tools and techniques.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/10.png"
                    },
                    {
                        title: "Data Analytics Job Simulation",
                        org: "Deloitte x Forage",
                        desc: "Worked on real-world business datasets, creating dashboards and deriving insights to support decision-making.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/11.png"
                    },
                    {
                        title: "Machine Learning with Python",
                        org: "freeCodeCamp",
                        desc: "Built machine learning models using Python, covering supervised learning, data preprocessing, and evaluation techniques.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/12.png"
                    },
                    {
                        title: "Neo4j Certified Professional",
                        org: "Neo4j",
                        desc: "Gained expertise in graph databases, Cypher query language, and real-world graph data modeling.",
                        link: "https://raw.githubusercontent.com/shishir-katakam/portfolio1/main/certificates/13.png"
                    }
                ].map((cert, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`border border-muted/30 p-8 hover:border-accent transition-all duration-300 relative group overflow-hidden flex flex-col justify-between ${index === 0 ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 shadow-[0_0_30px_-15px_var(--color-accent-20)]' : ''}`}
                    >
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="relative">
                            <span className="font-mono text-[10px] tracking-[0.2em] text-accent mb-4 block uppercase">{cert.org}</span>
                            <h3 className="font-syne text-xl font-bold text-foreground mb-4 leading-snug">
                                {index === 0 ? (
                                    <DualText professional={cert.title} honest="SPIDER-VERSE IN THE MAKING" />
                                ) : (
                                    cert.title
                                )}
                            </h3>
                            <p className="text-muted font-mono text-xs tracking-wide leading-relaxed lowercase mb-6">{cert.desc}</p>
                        </div>
                        <a 
                            href={cert.link || "https://github.com/shishir-katakam/portfolio1/tree/main/certificates"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative self-start text-accent font-mono text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-300 group/link flex items-center gap-2"
                        >
                            View Cert <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>
                ))}
            </div>
            
        </section>
        </React.Fragment>
    );
};

export const Experience = () => {
    const experiences = [
        {
            company: "ASPIRE KNOWLEDGE AND SKILLS (P) Ltd",
            role: "Uber Fare Prediction",
            honestRole: "LINEAR REGRESSION GO BRRR",
            duration: "July - August 2025",
            description: "Developed and evaluated multiple regression models (Linear, Lasso, Ridge) for fare prediction. Applied advanced data preprocessing, feature engineering, and outlier removal techniques to achieve high accuracy on real-world ride data.",
            tags: ["Machine Learning", "Python", "scikit-learn", "Data Analysis"],
            link: "https://raw.githubusercontent.com/shishir-katakam/portfolio/main/public/Screenshot%202025-10-12%20173419.png"
        },
        {
            company: "CISCO",
            role: "Virtual Internship",
            honestRole: "PACKET TRACER SIMULATOR",
            duration: "July 2025",
            description: "Completed comprehensive programs in Introduction to Cyber Security and Network Essentials, gaining hands-on experience with network protocols, security fundamentals, and infrastructure management.",
            tags: ["Network Security", "Protocols", "Infrastructure", "Cybersecurity"]
        },
        {
            company: "Viswam AI, IIIT-Hyderabad",
            role: "Summer of AI",
            honestRole: "GPU FANS GOING BRRR",
            duration: "March 2025",
            description: "Participated in collaborative AI development projects under mentorship of IIITH faculty. Gained practical experience in ML model development, open-source tools, and research methodologies.",
            tags: ["AI Development", "Research", "Collaboration", "Open Source"]
        }
    ];

    return (
        <section id="experience" className="py-32 px-12 border-t border-muted/30">
            <h2 className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-24">Experience / Career</h2>
            <div className="flex flex-col gap-16">
                {experiences.map((exp, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative border-l border-muted pl-8 md:pl-12 hover:border-accent transition-colors duration-300"
                    >
                        {/* Timeline dot */}
                        <div className="absolute w-3 h-3 bg-muted rounded-full -left-[6.5px] top-2 group-hover:bg-accent group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all duration-300" />
                        
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                                <h3 className="font-syne text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:text-accent transition-colors">
                                    <DualText professional={exp.role} honest={exp.honestRole} />
                                </h3>
                                <p className="font-mono text-sm tracking-widest text-muted uppercase">{exp.company}</p>
                            </div>
                            <span className="font-mono text-xs text-muted/50 mt-2 md:mt-0 tracking-[0.2em]">{exp.duration}</span>
                        </div>
                        
                        <p className="text-muted leading-relaxed max-w-3xl mb-8 lowercase tracking-wide">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                            {exp.tags.map((tag, ti) => (
                                <span key={ti} className="px-3 py-1 text-[10px] border border-muted/30 font-mono tracking-widest uppercase opacity-70">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {exp.link && (
                            <a 
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-[0.2em] uppercase hover:text-white transition-colors group/btn"
                            >
                                Click to view 
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export const Academics = () => {
    return (
        <section id="academics" className="py-32 px-12 border-t border-muted/30">
            <h2 className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-24">Education / Academic Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="border border-muted/30 p-10 hover:border-accent/50 transition-colors group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative flex flex-col h-full justify-between">
                        <div>
                            <span className="font-mono text-[10px] tracking-widest text-accent mb-6 block uppercase">Ongoing</span>
                            <h3 className="font-syne text-3xl font-bold uppercase mb-2">
                                <DualText professional="MGIT" honest="SO CALLED A TOP COLLEGE" />
                            </h3>
                            <p className="font-mono text-sm tracking-widest text-muted uppercase mb-8">B.Tech in IT</p>
                        </div>
                        <div className="text-right">
                            <span className="text-6xl font-black text-muted/10 group-hover:text-accent/10 transition-colors duration-500 select-none">01</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="border border-muted/30 p-10 hover:border-accent/50 transition-colors group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative flex flex-col h-full justify-between">
                        <div>
                            <span className="font-mono text-[10px] tracking-widest text-muted mb-6 block uppercase">2012 - 2022</span>
                            <h3 className="font-syne text-3xl font-bold uppercase mb-2">
                                <DualText professional="UoH Kendriya Vidyalaya" honest="10 YEARS OF UNIFORMS" />
                            </h3>
                            <p className="font-mono text-sm tracking-widest text-muted uppercase mb-8">Schooling</p>
                        </div>
                        <div className="text-right">
                            <span className="text-6xl font-black text-muted/10 group-hover:text-accent/10 transition-colors duration-500 select-none">02</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

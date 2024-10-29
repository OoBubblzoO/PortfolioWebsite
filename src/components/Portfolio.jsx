import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, GitBranch } from 'lucide-react'

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(() => {
      // Check if user has a dark mode preference
      if (typeof window !== 'undefined') {
        return localStorage.getItem('darkMode') === 'true' ||
          window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return false;
    });

    useEffect(() =>{
        //update class on document w dark mode change

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);


    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "This is text placeholder for now",
            image: "/api/placeholder/400/250",
            github: "https://github.com/OoBubblzoO/SilentNight"
        },
        {
            id: 2,
            title: "Project 2",
            description: "This is placeholder text for project 2",
            image: "/api/placeholder/400/250",
            github: "https://github.com/OoBubblzoO/QuestionSite"
        },
    ];

    return (
        <div className={`min-h-screen $ {darkMode ? 'dark bg-gray-900' : 'bg-gray-50`}>
            {/* Navigations */}
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex space-x-8 items-center">
                            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark: hover:text-white">About</a>
                            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark: hover:text-white">Projects</a>
                            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark: hover:text-white">Contact</a>
                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <Sun className="w-6 h-6 text-gray-200" />
                            ) : (
                                <Moon className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>  

            {/* Hero/ About Section */}
            <section id="about" className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4x1 font-bold text-gray-900 dark:text-white">Pedro Negron III</h1>
                        <p className="mt-4 text-x1 text-gray-600 dark:text-gray-300">
                            Developer | Video Game Designer | Recent Graduate
                        </p>
                        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2x1 mx-auto">
                            Welcome to my website! I'm passionate about creating solutions
                            to problems. With my skills I enjoy designing websites, video games,
                            and continue to develope my skills.
                        </p>
                    </div>
                </div>
            </section> 

             {/* Projects Section */}
            <section id="" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                        <div className="mt-4 flex space-x-4">
                            <a 
                            href={project.github}
                            className="inline-flex items-center text-gray-600 hover:text-gray-900"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <Github className="w-5 h-5 mr-2" />
                            GitHub
                            </a>
                            <a 
                            href={project.demo}
                            className="inline-flex items-center text-gray-600 hover:text-gray-900"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                            </a>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
                    <div className="flex justify-center space-x-8">
                        <a
                            href="mailto:pedronegron3rd@gmail.com"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900"
                        >
                            <Mail className="w-6 h-6 mr-2" />
                            Email
                        </a>

                        <a
                            href="https://linkedin.com/in/pedro-negron-iii/"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-6 h-6 mr-2" />
                            LinkedIn
                        </a>

                        <a 
                            href="https://github.com/oobubblzoo"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-6 h-6 mr-2" />
                            Github
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default Portfolio
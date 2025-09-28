import React, { useState, useEffect } from "react";
import { Github, Filter, Home, FolderGit2, TrendingUp, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import project images
import cereboImg from "../assets/images/cerebo.png";
import workmuImg from "../assets/images/workmu.png";
import devspaceImg from "../assets/images/DevSpace.png";
import securaImg from "../assets/images/secura.png";
import brightspringsImg from "../assets/images/brightsprings.png";
import nl2sqlImg from "../assets/images/nl2sqlpro.png";
import filedropImg from "../assets/images/FileDrop.png";
import socketioImg from "../assets/images/socketio.png";
import parthmetalImg from "../assets/images/parthmetal.png";
import cmsImg from "../assets/images/cms.png";

// Projects data
const projects = [
  {
    title: "CereboAI",
    subtitle: "AI Model Comparison Platform",
    description:
      "Modern web app to test and compare responses from multiple AI models. Supports free APIs with side-by-side output comparison. Built with Supabase for authentication and secure chat history storage.",
    tech: ["TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: cereboImg,
  },
  {
    title: "workMU",
    subtitle: "Job Portal Application",
    description:
      "Full-stack MERN job portal connecting job seekers with employers. Features authentication, job posting, and application tracking. Provides secure dashboards for candidates and recruiters.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: workmuImg,
  },
  {
    title: "DevSpace",
    subtitle: "Online Code Editor",
    description:
      "Web-based code editor with real-time compilation using Judge0 API. Includes authentication, syntax highlighting, and saved snippets. Designed for quick prototyping and testing.",
    tech: ["React", "Node.js", "Express", "Judge0 API"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: devspaceImg,
  },
  {
    title: "SecuraEntry",
    subtitle: "Smart Visitor Log App",
    description:
      "Mobile-first visitor log app for apartments and offices. Enables secure entry via authentication, QR codes, and real-time tracking. Built with FlutterFlow, later extended in Dart.",
    tech: ["Flutter", "Firebase", "Firestore", "QR Code"],
    category: "Mobile Development",
    link: "https://github.com/NEVIL5249",
    image: securaImg,
  },
  {
    title: "BrightSprings",
    subtitle: "ASD Assistance App",
    description:
      "Supportive app for children with Autism Spectrum Disorder. Provides structured routines, interactive tools, and caregiver dashboards. Features AI-driven mood detection.",
    tech: ["Flutter", "Node.js", "Firebase", "AI Tools"],
    category: "Mobile Development",
    link: "https://github.com/NEVIL5249",
    image: brightspringsImg,
  },
  {
    title: "NL2SQL-Pro",
    subtitle: "Natural Language to SQL Converter",
    description:
      "Full-stack app converting natural language queries into SQL. Uses Ollama with locally run LLaMA 3. Supports multiple SQL dialects with privacy-focused execution.",
    tech: ["React", "Node.js", "Ollama", "LLaMA 3", "SQL"],
    category: "AI/ML",
    link: "https://github.com/NEVIL5249",
    image: nl2sqlImg,
  },
  {
    title: "FileDrop",
    subtitle: "File Sharing Micro-SaaS",
    description:
      "Modern Micro-SaaS for secure file sharing. Upload files, generate links, and manage access. Built with Supabase authentication and storage integration.",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: filedropImg,
  },
  {
    title: "socketio-realtime-chat",
    subtitle: "Real-time Chat Application",
    description:
      "A real-time chat app built with Node.js, Express, and Socket.IO. Supports multi-user messaging over WebSocket with a clean and simple frontend interface.",
    tech: ["Node.js", "Express.js", "Socket.IO", "HTML", "CSS", "JavaScript"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: socketioImg,
  },
  {
    title: "parthmetal",
    subtitle: "Metal Business Flutter App",
    description:
      "A mobile application built with Flutter to digitalize the workflow of Parth Metal. Provides a modern interface for business operations and customer engagement.",
    tech: ["Flutter", "Dart", "Firebase"],
    category: "Mobile Development",
    link: "https://github.com/NEVIL5249",
    image: parthmetalImg,
  },
  {
    title: "CMS E-Commerce",
    subtitle: "CMS-Integrated E-Commerce Platform",
    description:
      "A full-stack e-commerce platform combining CMS flexibility with online shopping features. Built with React.js frontend and Strapi backend with Stripe integration.",
    tech: ["React.js", "Strapi", "Stripe", "Material UI", "SASS", "Axios", "SQLite"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: cmsImg,
  },
];

const categories = ["All", "Web Development", "Mobile Development", "AI/ML"];

// Floating Navbar
const FloatingNav = ({ active }) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "home", icon: <Home className="h-4 w-4" />, label: "Home", type: "route", path: "/" },
    { id: "projects", icon: <FolderGit2 className="h-4 w-4" />, label: "Projects", type: "route", path: "/projects" },
    { id: "experience", icon: <TrendingUp className="h-4 w-4" />, label: "Experience", type: "route", path: "/experience" },
    { id: "contact", icon: <Mail className="h-4 w-4" />, label: "Contact", type: "route", path: "/contact" }, // ✅ New Contact button
  ];

  const handleClick = (item) => {
    if (item.type === "route") {
      navigate(item.path);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`p-2 rounded-full transition-all duration-200 ${
              active === item.id
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            }`}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

// Projects Page Component
export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 font-sans antialiased">
      
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header */}
      <section className="w-full py-24 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-sm font-medium tracking-wide text-gray-500 mb-4">MY WORK</p>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing my technical journey through real-world applications and experiments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="w-full py-8 bg-gray-50 border-y border-gray-200 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                    {project.category}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors border border-gray-200"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-4">{project.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-700 font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Navbar */}
      <FloatingNav active="projects" />
    </div>
  );
}

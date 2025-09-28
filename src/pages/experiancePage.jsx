import React, { useState, useEffect } from "react";
import { MapPin, Calendar, Mail } from "lucide-react";
import { Home, User, BookOpen, FolderGit2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    role: "Fullstack Web Developer Intern",
    company: "Compughost",
    type: "Internship",
    location: "Remote",
    duration: "May 2024 - June 2024",
    description: `Collaborated with a team of developers to design and implement full-stack web applications using the MERN stack. Developed both frontend and backend features for client projects, ensuring responsive and user-friendly interfaces. Optimized application performance and troubleshooted issues to enhance the user experience.`,
    technologies: ["MERN Stack", "JavaScript", "HTML/CSS", "REST APIs", "Git"],
    highlights: [
      { title: "Full-Stack Development", details: "Designed and built both frontend and backend features for web applications." },
      { title: "Team Collaboration", details: "Worked with senior developers, participating in code reviews and improving team coding standards." },
      { title: "User Experience Enhancement", details: "Optimized application performance and resolved issues to improve user experience." },
      { title: "Project Delivery", details: "Delivered a complete e-commerce bookstore project with core functionalities." }
    ]
  },
  {
    role: "Python and SAS Developer Intern",
    company: "Edulyt",
    type: "Internship",
    location: "Remote",
    duration: "June 2024 - July 2024",
    description: `Developed and maintained data analysis scripts and pipelines using Python and SAS. Performed statistical analysis and generated reports to support business decision-making. Collaborated with data scientists and analysts to design and implement new data models.`,
    technologies: ["Python", "SAS", "Pandas", "SQL", "Data Processing", "Statistical Analysis"],
    highlights: [
      { title: "Data Automation", details: "Created automated pipelines to streamline data processing and reporting." },
      { title: "Statistical Analysis", details: "Analyzed large datasets to extract insights for data-driven strategies." },
      { title: "Cross-team Collaboration", details: "Worked with data scientists and analysts to implement new models." },
      { title: "Tool Proficiency", details: "Gained hands-on experience developing scripts with Python and SAS." }
    ]
  }
];

// Floating Navbar Component
const FloatingNav = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("experience");

const navItems = [
  { id: "home", icon: <Home className="h-4 w-4" />, label: "Home", type: "route", path: "/" },
  { id: "projects", icon: <FolderGit2 className="h-4 w-4" />, label: "Projects", type: "route", path: "/projects" },
  { id: "experience", icon: <TrendingUp className="h-4 w-4" />, label: "Experience", type: "route", path: "/experience" },
  { id: "contact", icon: <Mail className="h-4 w-4" />, label: "Contact", type: "route", path: "/contact" }, // ✅ new button
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
              activeSection === item.id
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

const ExperiencePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 font-sans antialiased">
      
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header Section */}
      <section className="w-full py-24 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-sm font-medium tracking-wide text-gray-500 mb-4">MY JOURNEY</p>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">Experience</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My professional journey in software development and data analysis
            </p>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="w-full py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              {/* Card Header */}
              <div className="p-8 bg-gray-50 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">{exp.role}</h2>
                    <p className="text-blue-600 font-medium text-lg mb-2">{exp.company}</p>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-200">{exp.type}</span>
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{exp.location}</div>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{exp.duration}</div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">{exp.description}</p>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-gray-700 text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Key Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">{highlight.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{highlight.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Navbar */}
      <FloatingNav active="experience" />
    </div>
  );
};

export default ExperiencePage;

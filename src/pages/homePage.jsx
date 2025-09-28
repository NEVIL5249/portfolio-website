import React, { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, ArrowDown, Code, Briefcase, Users, TrendingUp, ArrowRight, Home, User, FolderGit2, BookOpen, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";


// Hero Component - Clean and Professional
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate(); // <--- Add this    

  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return (
  <section
    id="home"
    className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white"
  >
    {/* Subtle background pattern */}
    <div 
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    />

    {/* Main content */}
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      {/* Professional greeting */}
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-sm font-medium tracking-wide text-gray-500 mb-8">
          Building What Matters
        </p>
      </div>

      {/* Main headline */}
      <div
        className={`transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] mb-6">
          Hello, I'm{' '}
          <span className="font-normal text-blue-600">Nevil Gadhia</span>
        </h1>
      </div>

      {/* Clean subtitle */}
      <div
        className={`transition-all duration-1000 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
          I create impactful solutions using modern technologies that make life easier and businesses stronger.
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Focused on delivering real value through React, Node.js, and Flutter development.
        </p>
      </div>

      {/* CTA buttons */}
      <div
        className={`mt-12 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 ease-out delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button 
          className="px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
          onClick={() => navigate("/projects")}
 
        >
          View My Work
        </button>
<a 
  href="/resume.pdf" 
  download="Nevil_Gadhia_Resume.pdf"
  className="px-8 py-4 bg-white text-black border-2 font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
>
  Download Resume
</a>

      </div>

      {/* Social links */}
      <div
        className={`mt-16 flex justify-center gap-8 transition-all duration-1000 ease-out delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {[
          { href: "mailto:nevilg8690@gmail.com", icon: Mail, label: "Email" },
          { href: "tel:+917878805151", icon: Phone, label: "Phone" },
          { href: "https://www.linkedin.com/in/nevilgadhia/", icon: Linkedin, label: "LinkedIn" },
          { href: "https://github.com/NEVIL5249", icon: Github, label: "GitHub" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
            title={social.label}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium tracking-wide">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  </section>
);

};

// About/Features Section - Clean and Professional
const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Production Ready",
      description: "Built scalable and robust solutions with a focus on reliability, performance, and best practices for enterprise systems.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Business Impact",
      description: "Developed solutions that addressed critical business needs and delivered tangible value by improving efficiency.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Team Collaboration",
      description: "Worked closely with teams to deliver projects on time, participating in code reviews and agile methodologies.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Continuous Learning",
      description: "Proactively acquired new skills and adopted emerging technologies to stay ahead in the technical landscape.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-sm font-medium tracking-wide text-gray-500 mb-4">WHAT I BRING</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Core strengths that help deliver modern digital experiences efficiently and effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex p-4 mb-6 text-blue-600 bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tech Skills Section - Clean and Organized
const TechSkills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "GraphQL", "JWT"],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "React Native", "Android Studio", "Kotlin"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "CI/CD"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-24 bg-gray-50"
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-sm font-medium tracking-wide text-gray-500 mb-4">TECHNICAL SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Tech Arsenal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white p-8 rounded-lg border border-gray-200 transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-md text-sm font-medium border border-gray-100"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact/CTA Section - Professional and Clean
const Contact = () => {
  const [inView, setInView] = useState(false);
  const navigate = useNavigate(); // <--- Add this

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-sm font-medium tracking-wide text-gray-500 mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Ready to contribute to your next project. I bring hands-on experience,
            production-ready skills, and a passion for building great software.
          </p>
          <p className="text-lg text-blue-600 font-medium mb-12">
            Open to: Full-time roles, internships, and exciting projects
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
<button
    onClick={() => navigate("/projects")}
    className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
  >
    View Projects
  </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-md hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                onClick={() => navigate("/experience")}
>
              See Experience
            </button>
                    <button
  className="px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
  onClick={() => navigate("/contact")}
>
  Contact Me
</button>

          </div>
        </div>
      </div>
    </section>
  );
};

// Floating Navigation - Clean and Minimal
const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const sectionItems = [
    { id: "home", icon: <Home className="h-4 w-4" />, label: "Home" },
    { id: "about", icon: <User className="h-4 w-4" />, label: "About" },
    { id: "skills", icon: <BookOpen className="h-4 w-4" />, label: "Skills" },
  ];

  const routeItems = [
    { id: "projects", icon: <FolderGit2 className="h-4 w-4" />, label: "Projects", path: "/projects" },
    { id: "experience", icon: <TrendingUp className="h-4 w-4" />, label: "Experience", path: "/experience" },
    { id: "contact", icon: <Mail className="h-4 w-4" />, label: "Contact", path: "/contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sectionItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 overflow-hidden">

        {/* Group 1 - Sections */}
        <div className="flex gap-2 px-3 py-2 border-r border-gray-200">
          {sectionItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
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

        {/* Group 2 - Projects */}
        <div className="flex gap-2 px-3 py-2 border-r border-gray-200">
          {routeItems
            .filter((item) => item.id === "projects")
            .map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
        </div>

        {/* Group 3 - Experience */}
        <div className="flex gap-2 px-3 py-2 border-r border-gray-200">
          {routeItems
            .filter((item) => item.id === "experience")
            .map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
        </div>

        {/* Group 4 - Contact */}
        <div className="flex gap-2 px-3 py-2">
          {routeItems
            .filter((item) => item.id === "contact")
            .map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
        </div>

      </div>
    </div>
  );
};



const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* About / Features Section */}
      <About />

      {/* Technical Skills Section */}
      <TechSkills />

      {/* Contact Section */}
      <Contact />

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
};

export default HomePage;
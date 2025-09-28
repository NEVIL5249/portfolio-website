import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Home, FolderGit2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Floating Navbar Component
const FloatingNav = ({ active }) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "home", icon: <Home className="h-4 w-4" />, label: "Home", type: "route", path: "/" },
    { id: "projects", icon: <FolderGit2 className="h-4 w-4" />, label: "Projects", type: "route", path: "/projects" },
    { id: "experience", icon: <TrendingUp className="h-4 w-4" />, label: "Experience", type: "route", path: "/experience" },
    { id: "contact", icon: <Mail className="h-4 w-4" />, label: "Contact", type: "route", path: "/contact" },
  ];

  const handleClick = (item) => {
    if (item.type === "route") navigate(item.path);
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

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success or error messages

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mdkwaplz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 font-sans antialiased">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header Section */}
      <section className="w-full py-24 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm font-medium tracking-wide text-gray-500 mb-4">
              LET'S CONNECT
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's connect and discuss how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're looking for a developer or just want to say hello, 
                feel free to reach out.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-200">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Email</p>
                    <a href="mailto:nevilg8690@gmail.com" className="text-blue-600 hover:text-blue-700 text-lg">
                      nevilg8690@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center border border-green-200">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Phone</p>
                    <a href="tel:+917878805151" className="text-green-600 hover:text-green-700 text-lg">
                      +91 7878805151
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-200">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Location</p>
                    <p className="text-gray-600 text-lg">Rajkot, Gujarat, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200">
                <p className="font-medium text-gray-900 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/nevilgadhia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/NEVIL5249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-light text-gray-900 mb-8">Send a Message</h2>
            
            {status === "success" && (
              <p className="mb-4 text-green-600 font-medium">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mb-4 text-red-600 font-medium">❌ Something went wrong. Please try again.</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 font-medium mb-3">
                    Your {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${field}`}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               focus:outline-none transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-700 font-medium mb-3">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                             focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 
                           bg-blue-600 text-white font-medium py-4 rounded-md 
                           hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Navbar */}
      <FloatingNav active="contact" />
    </div>
  );
};

export default ContactPage;

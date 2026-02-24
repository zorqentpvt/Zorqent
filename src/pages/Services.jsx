import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Application Development",
      subtitle: "Scalable & Maintainable",
      description:
        "We build structured, high-performance web applications using modern frameworks and clean architecture principles.",
      features: [
        "Custom web platforms",
        "REST API development",
        "Authentication & role systems",
        "Admin dashboards",
        "Database design",
        "Performance optimization",
      ],
      technologies: ["React", "Node.js", "Django", "PostgreSQL", "MongoDB"],
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      subtitle: "Android & iOS",
      description:
        "Cross-platform mobile applications built with performance, scalability, and long-term maintainability in mind.",
      features: [
        "Cross-platform apps",
        "API integration",
        "Authentication systems",
        "Push notifications",
        "Offline capabilities",
        "App deployment support",
      ],
      technologies: ["React Native", "Node.js", "Django", "MySQL"],
    },
    {
      icon: "🎮",
      title: "Game Development",
      subtitle: "Interactive Experiences",
      description:
        "Development of engaging 2D and 3D games with optimized performance and scalable architecture.",
      features: [
        "2D & 3D games",
        "Mobile & PC deployment",
        "Game optimization",
        "Backend integration",
        "Multiplayer systems",
        "Performance tuning",
      ],
      technologies: ["Unity", "C#", "Node.js"],
    },
    {
      icon: "⚙️",
      title: "Backend & API Engineering",
      subtitle: "Reliable & Secure",
      description:
        "Robust backend systems designed for scalability, security, and long-term growth.",
      features: [
        "RESTful APIs",
        "Authentication & authorization",
        "Database architecture",
        "Microservices support",
        "Server optimization",
        "System integration",
      ],
      technologies: ["Node.js", "Django", "Go", "PostgreSQL", "MySQL"],
    },
    {
      icon: "🗄️",
      title: "Database Architecture",
      subtitle: "Optimized & Structured",
      description:
        "Efficient database design for high performance, reliability, and clean data management.",
      features: [
        "Relational database design",
        "NoSQL implementation",
        "Query optimization",
        "Data migration",
        "Backup strategies",
        "Scaling strategies",
      ],
      technologies: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      icon: "🔧",
      title: "Custom Software Solutions",
      subtitle: "Tailored Systems",
      description:
        "Custom-built digital systems designed around your operational and business requirements.",
      features: [
        "Business automation tools",
        "Internal management systems",
        "Custom dashboards",
        "Legacy modernization",
        "System refactoring",
        "Technical consulting",
      ],
      technologies: ["React", "Node.js", "Django", "Go"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "Understanding your business objectives, technical needs, and user expectations.",
    },
    {
      step: "02",
      title: "Architecture Planning",
      description:
        "Designing system structure, database schema, and development roadmap.",
    },
    {
      step: "03",
      title: "UI & System Design",
      description:
        "Creating structured, user-focused interfaces aligned with system architecture.",
    },
    {
      step: "04",
      title: "Development",
      description:
        "Building clean, scalable systems using industry-standard technologies.",
    },
    {
      step: "05",
      title: "Testing & Optimization",
      description:
        "Performance testing, debugging, and stability improvements.",
    },
    {
      step: "06",
      title: "Deployment & Support",
      description:
        "Production deployment with optional long-term maintenance support.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Structured development solutions across web, mobile, backend, and
          interactive platforms.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto mb-28">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 text-sm flex items-start"
                  >
                    <span className="text-indigo-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-black/40 border border-white/10 px-3 py-1 rounded-md text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            Development Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured and transparent approach to delivering reliable
            systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="text-indigo-500 font-semibold text-sm mb-2">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Have a Project in Mind?
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s discuss your requirements and explore a practical solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:zorqent@gmail.com"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition"
          >
            Request Consultation
          </a>

          <Link
            to="/portfolio"
            className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}

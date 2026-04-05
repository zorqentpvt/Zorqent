import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Animation Primitives ──────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 36 : direction === "down" ? -36 : 0,
      x: direction === "left" ? 36 : direction === "right" ? -36 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

function StaggerGrid({ children, className = "", stagger = 0.07 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Data ──────────────────────────────────────────────────────────────────────

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
    accent: "from-indigo-500/20 to-blue-500/10",
    border: "hover:border-indigo-500/40",
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
    accent: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-500/40",
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
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-500/40",
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
    accent: "from-orange-500/20 to-amber-500/10",
    border: "hover:border-orange-500/40",
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
    accent: "from-cyan-500/20 to-sky-500/10",
    border: "hover:border-cyan-500/40",
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
    accent: "from-rose-500/20 to-pink-500/10",
    border: "hover:border-rose-500/40",
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
    description: "Performance testing, debugging, and stability improvements.",
  },
  {
    step: "06",
    title: "Deployment & Support",
    description:
      "Production deployment with optional long-term maintenance support.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <div className="page-container pt-32 pb-24 px-4 sm:px-6 lg:px-8">

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Structured development solutions across web, mobile, backend, and
            interactive platforms.
          </p>
        </motion.div>
      </section>

      {/* ── Services Grid ── */}
      <section className="max-w-6xl mx-auto mb-28">
        <StaggerGrid className="grid lg:grid-cols-2 gap-8" stagger={0.08}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 overflow-hidden group cursor-default ${service.border} transition-colors duration-300`}
            >
              {/* Gradient accent on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
              />

              {/* Top shine line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className="text-4xl mr-4 select-none"
                    whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.04 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-indigo-400 mr-2 mt-0.5">▸</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-gray-200 dark:bg-black/40 border border-gray-300 dark:border-white/10 px-3 py-1 rounded-md text-xs text-gray-700 dark:text-gray-300"
                      whileHover={{ borderColor: "rgba(99,102,241,0.5)", color: "#a5b4fc" }}
                      transition={{ duration: 0.15 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </section>

      {/* ── Process ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <FadeIn className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Development Process
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A structured and transparent approach to delivering reliable systems.
          </p>
        </FadeIn>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.09}>
          {process.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -3, backgroundColor: "rgba(99,102,241,0.05)" }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="relative bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 group overflow-hidden cursor-default"
            >
              {/* Connector dot */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors duration-300" />

              {/* Step number */}
              <motion.div
                className="text-indigo-400 font-bold text-2xl mb-3 font-mono"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {item.step}
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-indigo-500/60 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </StaggerGrid>
      </section>

      {/* ── CTA ── */}
      <FadeIn direction="up">
        <section className="max-w-4xl mx-auto">
          <motion.div
            className="text-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-12 relative overflow-hidden"
            whileHover={{ borderColor: "rgba(99,102,241,0.35)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 to-purple-600/8 pointer-events-none rounded-2xl" />
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss your requirements and explore a practical solution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:zorqent@gmail.com"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition shadow-md shadow-indigo-900/40"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Request Consultation
                </motion.a>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/portfolio"
                    className="bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-white/10 transition block"
                  >
                    View Portfolio
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </FadeIn>
    </div>
  );
}
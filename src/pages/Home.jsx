import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Counter from "../components/Counter";

// Reusable scroll-reveal wrapper
function FadeInWhenVisible({ children, delay = 0, direction = "up", className = "" }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

// Staggered container
function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

// Stagger child item
function StaggerItem({ children, className = "", direction = "up" }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : 0,
      x: direction === "left" ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/* ---------- Hero Background Animation ---------- */
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Dynamic Gradient Mesh */}
      <div className="absolute inset-0 opacity-70 dark:opacity-50">
        <motion.div
           className="absolute top-[-15%] left-[-10%] w-[85%] h-[85%] bg-indigo-400/40 dark:bg-indigo-600/30 rounded-full blur-[140px]"
           animate={{
             x: [0, 50, 0],
             y: [0, 30, 0],
             scale: [1, 1.15, 1],
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
           className="absolute bottom-[-10%] right-[-5%] w-[75%] h-[75%] bg-purple-400/40 dark:bg-purple-600/30 rounded-full blur-[140px]"
           animate={{
             x: [0, -40, 0],
             y: [0, -50, 0],
             scale: [1.15, 1, 1.15],
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Floating Particles/Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1'} bg-indigo-500/50 dark:bg-indigo-300/50 rounded-full blur-[1px]`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 0.9, 0],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Floating geometric shards for depth */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shard-${i}`}
          className="absolute glass rounded-[3rem] opacity-[0.06] dark:opacity-[0.1]"
          style={{
            width: `${160 + i * 60}px`,
            height: `${160 + i * 60}px`,
            left: `${(i * 22) % 100}%`,
            top: `${(20 + i * 15) % 80}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, 60, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: "10+", label: "Projects Delivered" },
    { number: "5+", label: "Clients Served" },
    { number: "2+", label: "Years of Experience" },
    { number: "Remote", label: "Collaboration" },
  ];

  const techStack = [
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "React Native", slug: "react", color: "61DAFB" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "Django", slug: "django", color: "092E20" },
    { name: "Go", slug: "go", color: "00ADD8" },
    { name: "Unity", slug: "unity", color: "000000" }, // Use black, will invert in dark mode
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
  ];

  const features = [
    {
      title: "Structured Engineering",
      description:
        "Clean architecture, maintainable codebases, and well-defined workflows.",
    },
    {
      title: "Transparent Process",
      description:
        "Clear communication, defined scope, and realistic delivery timelines.",
    },
    {
      title: "Modern Technology Stack",
      description:
        "Using reliable and widely adopted technologies for long-term sustainability.",
    },
    {
      title: "Remote Collaboration",
      description:
        "Efficient communication across time zones and structured progress updates.",
    },
    {
      title: "End-to-End Delivery",
      description:
        "From concept validation to deployment and maintenance.",
    },
    {
      title: "Post-Launch Support",
      description:
        "Continuous improvements and system enhancements as your product grows.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Zorqent | Web, Mobile & Game Development Company</title>
        <meta name="description" content="Engineering scalable digital products with clean architecture and long-term maintainability." />
      </Helmet>

      <div className="min-h-screen">
        {/* ── Hero Section ── */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
          <HeroBackground />

          <div className="relative max-w-6xl mx-auto text-center z-10">
            <div className="space-y-8 mb-12">
              <motion.h1
                className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block text-gray-900 dark:text-white mb-2">Engineering Reliable</span>
                <span className="block gradient-text drop-shadow-2xl">Digital Products</span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Building scalable web, mobile, and interactive applications with a strong
                focus on clean architecture and long-term maintainability.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all hover:scale-105 shadow-xl shadow-indigo-500/20 w-full sm:w-auto text-center"
              >
                Start a Project
              </Link>
              <Link
                to="/portfolio"
                className="glass hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all hover:scale-105 w-full sm:w-auto text-center"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Analytics Section ── */}
        <section className="py-20 relative overflow-hidden bg-white dark:bg-black">
          {/* Subtle accent backgrounds */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <FadeInWhenVisible delay={0.1}>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Driving Results Through <br /><span className="gradient-text">Precise Engineering</span>
                </h2>
              </FadeInWhenVisible>
            </div>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="glass p-8 sm:p-10 rounded-[2.5rem] text-left hover-glow transition-all group relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 flex items-baseline gap-1">
                      <Counter value={stat.number} />
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium uppercase tracking-[0.15em] relative z-10">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100/50 dark:bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="gradient-text">Zorqent</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                We build structured, scalable systems that support long-term
                product growth.
              </p>
            </FadeInWhenVisible>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="glass p-10 h-full hover-lift rounded-3xl transition-all">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Tech Stack Logo Marquee ── */}
        <section className="py-24 overflow-hidden border-t border-gray-200 dark:border-white/10">
          <div className="max-w-6xl mx-auto text-center px-4 mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Core Technologies
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Our primary development stack for modern digital products</p>
            </FadeInWhenVisible>
          </div>

          <div className="relative flex overflow-x-hidden group">
            <motion.div
              className="flex whitespace-nowrap animate-marquee"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center mx-12 space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 glass flex items-center justify-center p-4 rounded-2xl transition-transform hover:scale-110">
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                      alt={tech.name}
                      className={`w-full h-full object-contain filter ${tech.name === "Unity" ? "dark:invert" : "dark:brightness-110"}`}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Mask gradients for smooth fade out */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-linear-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-linear-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInWhenVisible className="glass p-12 sm:p-20 rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 -z-10 blur-3xl rounded-full"></div>
              <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
                Let's Build Something <br /><span className="gradient-text">Great Together</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg sm:text-xl max-w-2xl mx-auto">
                Share your vision and we'll translate it into a reliable, production-ready solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:zorqent@gmail.com"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-transform hover:scale-105 shadow-2xl shadow-indigo-500/20"
                >
                  Email Us
                </a>
                <Link
                  to="/contact"
                  className="glass px-12 py-5 rounded-2xl font-bold text-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-transform hover:scale-105 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
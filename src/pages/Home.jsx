import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, useInView, useAnimation } from "framer-motion";

// Reusable scroll-reveal wrapper
function FadeInWhenVisible({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
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

// Staggered container
function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
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
    "React Native",
    "JavaScript",
    "Node.js",
    "Django",
    "Go",
    "Unity",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
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
        <title>
          Zorqent | Web, Mobile & Game Development Company in Kerala
        </title>

        <meta
          name="description"
          content="Zorqent is a Kerala-based development company building scalable web applications, mobile apps, and games with clean architecture and long-term maintainability."
        />

        <meta
          name="keywords"
          content="web development Kerala, mobile app development India, game development company, full stack developers Kerala, React development India"
        />

        <link rel="canonical" href="https://zorqent.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zorqent | Web & App Development Company" />
        <meta
          property="og:description"
          content="Engineering scalable digital products — web apps, mobile apps, and games."
        />
        <meta property="og:url" content="https://zorqent.com/" />
        <meta property="og:image" content="https://zorqent.com/logo.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zorqent | Web & App Development Company" />
        <meta
          name="twitter:description"
          content="Kerala-based team building scalable web, mobile, and game solutions."
        />
        <meta name="twitter:image" content="https://zorqent.com/logo.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Zorqent - Home",
            url: "https://zorqent.com/",
            description:
              "Kerala-based development company building scalable web apps, mobile apps, and games.",
            publisher: {
              "@type": "Organization",
              name: "Zorqent",
              logo: {
                "@type": "ImageObject",
                url: "https://zorqent.com/logo.jpg",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* ── Hero Section ── */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
          {/* Background blobs — subtle parallax-like pulse */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl"
              animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.22, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.2, 0.15] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>

          <div className="relative max-w-6xl mx-auto text-center">
            <div className="space-y-8 mb-12">
              {/* Headline */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="block text-white mb-4">Engineering Reliable</span>
                <span className="block gradient-text">Digital Products</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                We are a development team based in Kerala, India, building
                scalable web, mobile, and interactive applications with a strong
                focus on clean architecture and long-term maintainability.
              </motion.p>

              {/* Category tags */}
              <motion.div
                className="text-gray-400 text-sm tracking-wide"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Web Applications • Mobile Apps • Game Development
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-xl text-lg font-medium transition shadow-md w-full sm:w-auto block"
                >
                  Start a Project
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/portfolio"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-xl text-lg font-medium transition w-full sm:w-auto block"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                    whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-semibold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeInWhenVisible className="text-center mb-14">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose <span className="gradient-text">Zorqent</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We build structured, scalable systems that support long-term
                product growth.
              </p>
            </FadeInWhenVisible>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.08}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-white/5 border border-white/10 rounded-xl p-8 h-full"
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(99,102,241,0.4)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-white mb-4">
                Core Technologies
              </h2>
              <p className="text-gray-400 mb-10">Our primary development stack</p>
            </FadeInWhenVisible>

            <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.06}>
              {techStack.map((tech, index) => (
                <StaggerItem key={index} direction="up">
                  <motion.span
                    className="bg-black/40 border border-white/10 px-6 py-2 rounded-lg text-sm text-white block"
                    whileHover={{
                      scale: 1.08,
                      borderColor: "rgba(99,102,241,0.5)",
                      color: "#a5b4fc",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible direction="up">
              <motion.div
                className="text-center bg-white/5 border border-white/10 rounded-2xl p-12"
                whileHover={{ borderColor: "rgba(99,102,241,0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Let's Build Something Scalable
                </h2>

                <p className="text-gray-300 mb-8">
                  Share your idea with us and we'll help turn it into a reliable,
                  production-ready solution.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:zorqent@gmail.com"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition shadow-md"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Email Us
                  </motion.a>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/contact"
                      className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition block"
                    >
                      Contact Options
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import logo from "../assets/logo.jpg";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  /* ---------- Scroll Effect ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Close mobile menu on route change ---------- */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Navbar background — animated on scroll */}
      <motion.div
        className="absolute inset-0 border-b border-gray-200 dark:border-white/10 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ backgroundColor: theme === "dark" ? "rgba(0,0,0,0.88)" : "rgba(255,255,255,0.88)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow"
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 340, damping: 20 }}
            >
              <img
                src={logo}
                alt="Zorqent Logo"
                className="w-8 h-8 object-contain"
              />
            </motion.div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Zorqent</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Kerala, India</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
                >
                  {/* Active / hover pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-indigo-50 dark:bg-white/10 rounded-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTA & Theme Toggle ── */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.242 16.242l.707.707M7.758 7.758l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            <motion.a
              href="mailto:zorqent@gmail.com"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium block shadow-lg shadow-indigo-500/20"
              whileHover={{ scale: 1.05, backgroundColor: "#6366f1" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
            >
              Contact
            </motion.a>
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.242 16.242l.707.707M7.758 7.758l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white transition"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  className="absolute h-0.5 w-full bg-current rounded origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, top: "50%", translateY: "-50%" }
                      : { rotate: 0, top: "0%", translateY: "0%" }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ top: 0 }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-current rounded"
                  animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ top: "50%", translateY: "-50%" }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-current rounded origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, bottom: "50%", translateY: "50%" }
                      : { rotate: 0, bottom: "0%", translateY: "0%" }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ bottom: 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              className="px-4 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-100 dark:border-white/10"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <motion.div
                    key={link.path}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-white bg-indigo-600"
                          : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <a
                  href="mailto:zorqent@gmail.com"
                  className="block px-4 py-3 rounded-md text-sm font-medium text-white bg-indigo-600 text-center mt-2"
                >
                  Contact
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
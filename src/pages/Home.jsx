import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Subtle Background Blurs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="space-y-8 mb-12">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl font-bold leading-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="block text-white mb-4">
                Engineering Reliable
              </span>
              <span className="block gradient-text">Digital Products</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a development team based in Kerala, India, building
              scalable web, mobile, and interactive applications with a strong
              focus on clean architecture and long-term maintainability.
            </p>

            <div className="text-gray-400 text-sm tracking-wide">
              Web Applications • Mobile Apps • Game Development
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-xl text-lg font-medium transition shadow-md w-full sm:w-auto"
            >
              Start a Project
            </Link>

            <Link
              to="/portfolio"
              className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-xl text-lg font-medium transition w-full sm:w-auto"
            >
              View Portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="text-3xl font-semibold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Zorqent</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We build structured, scalable systems that support long-term
              product growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Core Technologies
          </h2>

          <p className="text-gray-400 mb-10">Our primary development stack</p>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-black/40 border border-white/10 px-6 py-2 rounded-lg text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let’s Build Something Scalable
          </h2>

          <p className="text-gray-300 mb-8">
            Share your idea with us and we’ll help turn it into a reliable,
            production-ready solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:zorqent@gmail.com"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition shadow-md"
            >
              Email Us
            </a>

            <Link
              to="/contact"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition"
            >
              Contact Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

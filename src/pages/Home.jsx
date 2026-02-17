import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Clients Served" },
    { number: "2+", label: "Years Experience" },
    { number: "Remote", label: "Collaboration" },
  ];

  const techStack = [
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Flutter",
    "Unity",
    "AWS",
    "Firebase",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="space-y-8 mb-12">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="block text-white mb-4">Building Reliable</span>
              <span className="block gradient-text">Digital Solutions</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a development team based in Kerala, India, helping
              businesses build scalable web, mobile, and game applications using
              modern technologies and clean engineering practices.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
              <span>Web • Mobile • Game Development</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl w-full sm:w-auto"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="glass px-10 py-4 rounded-2xl text-lg font-semibold w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Zorqent</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We focus on delivering practical, maintainable, and scalable
              software solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Structured Development",
                description:
                  "We follow organized workflows and best practices to ensure reliable and maintainable code.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                description:
                  "Clear scope and pricing suitable for startups and growing businesses.",
              },
              {
                icon: "🚀",
                title: "Modern Technologies",
                description:
                  "We use widely adopted and reliable tools to build scalable applications.",
              },
              {
                icon: "🌍",
                title: "Remote Collaboration",
                description:
                  "Based in Kerala and comfortable working with clients across different regions and time zones.",
              },
              {
                icon: "🛠️",
                title: "End-to-End Development",
                description:
                  "From planning and design to deployment and maintenance.",
              },
              {
                icon: "🤝",
                title: "Ongoing Support",
                description:
                  "Post-launch improvements and maintenance based on project needs.",
              },
            ].map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-8">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Technologies we regularly work with
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="glass px-6 py-3 rounded-xl text-white font-medium cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Let’s discuss your requirements and explore how we can help build
              a reliable solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:zorqent@gmail.com"
                className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl"
              >
                Email Us
              </a>
              <Link
                to="/contact"
                className="glass px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Contact Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

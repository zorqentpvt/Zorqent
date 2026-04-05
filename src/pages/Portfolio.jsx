export default function Portfolio() {
  const capabilities = [
    {
      title: "Scalable Commerce Systems",
      description:
        "High-performance online platforms engineered for growth. Secure payments, inventory logic, automation, and operational control — built without bottlenecks.",
      stack: [
        "Modern Frontend Architecture",
        "Secure Backend Systems",
        "Payment Integration",
        "Cloud Infrastructure"
      ],
      image: "/portfolio/commerce.png"
    },
    {
      title: "Cross-Platform Mobile Experiences",
      description:
        "Mobile applications built for speed, usability, and long-term retention. One codebase. Multiple platforms. Zero compromise on performance.",
      stack: [
        "iOS & Android",
        "Realtime Sync",
        "Cloud Services",
        "Analytics Integration"
      ],
      image: "/portfolio/mobile.png"
    },
    {
      title: "Interactive Game Development",
      description:
        "Immersive 2D and 3D experiences with multiplayer infrastructure, ranking systems, and optimized rendering pipelines.",
      stack: [
        "Game Engines",
        "Realtime Multiplayer",
        "Performance Optimization",
        "Cross-Device Support"
      ],
      image: "/portfolio/game.png"
    },
    {
      title: "Business Automation Platforms",
      description:
        "Internal systems that eliminate manual workflows. Dashboards, live reporting, automation logic, and real-time operational visibility.",
      stack: [
        "Realtime Systems",
        "Data Visualization",
        "Secure Architecture",
        "Workflow Automation"
      ],
      image: "/portfolio/automation.png"
    },
    {
      title: "Marketplace & Listing Platforms",
      description:
        "Search-optimized listing systems with advanced filtering, geo-based discovery, and scalable infrastructure.",
      stack: [
        "Advanced Search",
        "Map Integration",
        "SEO Optimization",
        "Scalable Databases"
      ],
      image: "/portfolio/marketplace.png"
    },
    {
      title: "Education & Engagement Platforms",
      description:
        "Gamified learning systems designed for retention. Streaming content, user progression, and engagement loops built for scale.",
      stack: [
        "Video Infrastructure",
        "Gamification Systems",
        "Progress Tracking",
        "Cloud Synchronization"
      ],
      image: "/portfolio/education.png"
    }
  ];

  return (
    <div className="page-container pt-32 pb-40 px-6">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-40">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-8">
          What We <span className="gradient-text">Engineer</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
          We build scalable digital systems designed for performance,
          longevity, and measurable business impact.
        </p>
      </section>

      {/* Capability Sections */}
      <section className="max-w-6xl mx-auto space-y-48">

        {capabilities.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {item.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {item.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </section>

      {/* Philosophy Section */}
      <section className="max-w-4xl mx-auto mt-48 text-center">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Built for Scale. Designed for Longevity.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Every system is engineered with clean architecture,
          performance-first principles, and future scalability in mind.
          No shortcuts. No bloated frameworks. Just structured,
          maintainable systems that grow with your business.
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-40">
        <div className="glass rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Something That Lasts?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
            If you're serious about building a scalable product,
            let's start the conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:zorqent@gmail.com"
              className="bg-indigo-600 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-xl hover:bg-indigo-500 transition"
            >
              Start a Conversation
            </a>

            <a
              href="tel:+917306684286"
              className="px-10 py-5 rounded-xl text-lg font-semibold border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition"
            >
              Call Directly
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
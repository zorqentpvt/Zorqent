export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured online shopping platform with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "🛒",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics. Features include goal setting, progress charts, and social sharing.",
      image: "💪",
      tags: ["Flutter", "Firebase", "Health APIs"],
      color: "from-green-600 to-teal-600"
    },
    {
      title: "2D Puzzle Game",
      category: "Game Development",
      description: "Engaging puzzle game with 100+ levels, power-ups, and leaderboard system. Available on iOS and Android with smooth performance.",
      image: "🎮",
      tags: ["Unity", "C#", "iOS", "Android"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Restaurant Management System",
      category: "Web Application",
      description: "Complete restaurant management solution with online ordering, table reservations, kitchen display system, and analytics dashboard.",
      image: "🍽️",
      tags: ["Next.js", "PostgreSQL", "WebSocket"],
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Real Estate Portal",
      category: "Web Development",
      description: "Property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent dashboard. SEO optimized for maximum visibility.",
      image: "🏠",
      tags: ["React", "Node.js", "Google Maps API"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "Educational Learning App",
      category: "Mobile App",
      description: "Interactive learning app for students with video lessons, quizzes, progress tracking, and gamification elements to boost engagement.",
      image: "📚",
      tags: ["React Native", "Firebase", "Video Streaming"],
      color: "from-yellow-600 to-orange-600"
    },
    {
      title: "Task Management Tool",
      category: "Web Application",
      description: "Collaborative project management platform with kanban boards, time tracking, team chat, and integrations with popular tools.",
      image: "✅",
      tags: ["React", "Node.js", "WebSocket", "AWS"],
      color: "from-teal-600 to-blue-600"
    },
    {
      title: "Meditation & Wellness App",
      category: "Mobile App",
      description: "Calming meditation app with guided sessions, sleep sounds, breathing exercises, and mood tracking. Beautiful, minimalist UI.",
      image: "🧘",
      tags: ["Flutter", "Audio Processing", "Analytics"],
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Multiplayer Racing Game",
      category: "Game Development",
      description: "Fast-paced multiplayer racing game with customizable vehicles, multiple tracks, and real-time competitions. Optimized for mobile and PC.",
      image: "🏎️",
      tags: ["Unity", "Photon", "3D Modeling"],
      color: "from-red-600 to-pink-600"
    }
  ];

  const categories = ["All", "Web Development", "Mobile App", "Game Development", "Web Application"];
  
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 animate-fadeInUp">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-2">
          Explore our recent projects and see how we've helped businesses transform their digital presence
        </p>
      </section>

      {/* Filter Categories - Future Enhancement */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="glass rounded-2xl p-2 inline-flex space-x-2 animate-fadeInUp stagger-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-hover glass rounded-3xl overflow-hidden group animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Image/Icon */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="text-8xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="glass px-3 py-1 rounded-full text-xs text-white font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/5 px-3 py-1 rounded-lg text-xs text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full btn-secondary glass px-4 py-3 rounded-xl font-medium hover:bg-white/10 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="glass rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp stagger-1">
              <div className="text-5xl font-black gradient-text mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="animate-fadeInUp stagger-2">
              <div className="text-5xl font-black gradient-text mb-2">30+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="animate-fadeInUp stagger-3">
              <div className="text-5xl font-black gradient-text mb-2">15+</div>
              <div className="text-gray-400">Industries Served</div>
            </div>
            <div className="animate-fadeInUp stagger-4">
              <div className="text-5xl font-black gradient-text mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp stagger-2">
            Don't just take our word for it – hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Rajesh Kumar",
              role: "Founder, TechStart India",
              content: "Zorqent delivered beyond our expectations. They transformed our idea into a functional MVP in record time. Their fresh perspective and technical skills are impressive!",
              rating: 5
            },
            {
              name: "Sarah Thompson",
              role: "CEO, Global Ventures",
              content: "Working with Zorqent was a breath of fresh air. They're responsive, talented, and genuinely care about the success of your project. Highly recommended!",
              rating: 5
            },
            {
              name: "Amit Patel",
              role: "Marketing Director",
              content: "The team at Zorqent is incredibly talented and dedicated. They brought modern solutions to our business and helped us stand out in a competitive market.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 hover-lift animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center hover-glow animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your <span className="gradient-text">Next Project</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:zorqent@gmail.com"
              className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/50"
            >
              Get Started
            </a>
            <a 
              href="tel:+917306684286"
              className="btn-secondary glass px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
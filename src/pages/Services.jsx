import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Full Stack Web Development",
      subtitle: "SEO Optimized & Scalable",
      description: "We build lightning-fast, responsive websites and web applications using modern frameworks like React, Next.js, and Node.js. Every project is optimized for search engines and designed to scale with your business.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "Performance optimization",
        "SEO best practices"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description: "Create stunning, high-performance mobile applications that users love. We develop cross-platform apps using Flutter and native apps for iOS and Android, ensuring smooth performance and beautiful user experiences.",
      features: [
        "Cross-platform development",
        "Native iOS & Android apps",
        "App Store optimization",
        "Push notifications",
        "Offline functionality",
        "In-app payments integration"
      ],
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: "🎮",
      title: "Game Development",
      subtitle: "2D & 3D Games",
      description: "Bring your game ideas to life with engaging, immersive gaming experiences. From casual mobile games to complex multiplayer games, we handle everything from concept to deployment.",
      features: [
        "2D & 3D game development",
        "Mobile & PC games",
        "Multiplayer functionality",
        "In-game monetization",
        "Game optimization",
        "Cross-platform deployment"
      ],
      technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender"],
      color: "from-red-600 to-orange-600"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      subtitle: "Beautiful & Intuitive",
      description: "Design is at the heart of every great digital product. We create user-centered designs that are not only visually stunning but also intuitive and accessible, ensuring the best user experience.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design",
        "Interaction design",
        "Usability testing",
        "Design systems"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator", "Photoshop"],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      subtitle: "Scalable & Secure",
      description: "Leverage the power of cloud computing to build scalable, reliable, and secure applications. We provide cloud infrastructure setup, migration services, and ongoing management.",
      features: [
        "Cloud infrastructure setup",
        "AWS & Google Cloud services",
        "Database management",
        "CI/CD pipeline setup",
        "Server monitoring",
        "Security implementation"
      ],
      technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: "🔧",
      title: "Custom Development",
      subtitle: "Tailored Solutions",
      description: "Have a unique requirement? We specialize in building custom solutions tailored to your specific needs. From automation tools to complex enterprise systems, we've got you covered.",
      features: [
        "Custom software development",
        "Business automation",
        "Third-party integrations",
        "Legacy system modernization",
        "Consultation & planning",
        "Technical support"
      ],
      technologies: ["Python", "Java", "PHP", "Ruby", "Go"],
      color: "from-yellow-600 to-red-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed discussions."
    },
    {
      step: "02",
      title: "Planning",
      description: "We create a comprehensive project plan, including timelines, milestones, and technical specifications."
    },
    {
      step: "03",
      title: "Design",
      description: "Our designers create beautiful, user-friendly interfaces that align with your brand and user needs."
    },
    {
      step: "04",
      title: "Development",
      description: "Our developers bring the designs to life using cutting-edge technologies and best coding practices."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing ensures your product is bug-free, performs well, and provides a great user experience."
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "We deploy your product and provide ongoing support and maintenance to ensure continued success."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 animate-fadeInUp">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-2">
          From concept to deployment, we offer comprehensive development services to bring your digital dreams to life
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-hover glass rounded-3xl p-8 animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`text-6xl bg-gradient-to-br ${service.color} p-4 rounded-2xl`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b {service.color} rounded-full mr-2"></span>
                  What We Offer
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/5 px-3 py-1 rounded-lg text-xs text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            Our <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp stagger-2">
            A transparent, collaborative approach to building exceptional products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((item, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 hover-lift animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-6xl font-black gradient-text mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center hover-glow animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Discuss Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Ready to get started? Contact us for a free consultation and let's turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:zorqent@gmail.com"
              className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/50"
            >
              Get Free Quote
            </a>
            <Link 
              to="/portfolio"
              className="btn-secondary glass px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
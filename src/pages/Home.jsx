import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Dedication" },
    { number: "24/7", label: "Support" }
  ];

  const techStack = [
    "React", "Node.js", "Python", "MongoDB", "PostgreSQL", 
    "Flutter", "Unity", "AWS", "Firebase", "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div className="space-y-8 mb-12">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="block text-white mb-4 text-shadow animate-fadeInUp">
                Building Digital
              </span>
              <span className="block gradient-text text-shadow animate-fadeInUp stagger-2">
                Products That Scale
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-3">
              We're a passionate team of young developers from Kerala, India, transforming ideas into powerful digital solutions for clients worldwide
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 animate-fadeInUp stagger-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for Projects</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Web • App • Game Development</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeInUp stagger-5">
            <Link 
              to="/contact" 
              className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/50 w-full sm:w-auto"
            >
              Start Your Project
            </Link>
            <Link 
              to="/portfolio" 
              className="btn-secondary glass px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fadeInUp stagger-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-6 hover-lift"
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fadeInUp">
              Why Choose <span className="gradient-text">Zorqent</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp stagger-2">
              We're not just developers – we're innovators, problem-solvers, and your dedicated tech partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast & Agile",
                description: "Quick turnaround times without compromising quality. We adapt to your needs and deliver results swiftly."
              },
              {
                icon: "💰",
                title: "Startup-Friendly Pricing",
                description: "Quality development at rates that make sense for startups and growing businesses. No hidden costs, just honest pricing."
              },
              {
                icon: "🚀",
                title: "Fresh Perspectives",
                description: "Young, energetic team bringing modern solutions and innovative approaches to every project."
              },
              {
                icon: "🌍",
                title: "Global Mindset",
                description: "Based in Kerala, serving the world. We understand diverse markets and cultural nuances."
              },
              {
                icon: "🛠️",
                title: "Modern Tech Stack",
                description: "We use cutting-edge technologies to build scalable, future-proof solutions."
              },
              {
                icon: "🤝",
                title: "Dedicated Support",
                description: "Your success is our success. We provide ongoing support and maintenance for all our projects."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="card-hover glass rounded-2xl p-8 animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeInUp">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 animate-fadeInUp stagger-2">
            Building with the latest and greatest tools
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="glass px-6 py-3 rounded-xl text-white font-medium hover-scale cursor-default animate-fadeInUp"
                style={{animationDelay: `${index * 0.05}s`}}
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
          <div className="glass rounded-3xl p-12 hover-glow animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Let's turn your vision into reality. Get in touch for a free consultation and let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:zorqent@gmail.com"
                className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/50"
              >
                Email Us Now
              </a>
              <Link 
                to="/contact"
                className="btn-secondary glass px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10"
              >
                View Contact Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
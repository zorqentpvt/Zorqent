import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: "💡",
      title: "Innovation First",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions that give you a competitive advantage."
    },
    {
      icon: "🎯",
      title: "Client Success",
      description: "Your success is our mission. We're not satisfied until your project exceeds expectations and achieves its goals."
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "Open communication, honest timelines, and clear pricing. No surprises, just straightforward collaboration."
    },
    {
      icon: "⚡",
      title: "Speed & Quality",
      description: "Fast doesn't mean sloppy. We deliver quickly without compromising on code quality, security, or user experience."
    },
    {
      icon: "🌱",
      title: "Continuous Learning",
      description: "The tech world evolves rapidly. We stay ahead by constantly learning and adapting to new trends and best practices."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "From Kerala to the world, we're building solutions that make a difference for businesses and users everywhere."
    }
  ];

  const team = [
    {
      role: "Full Stack Developers",
      count: "5+",
      description: "Skilled in React, Node.js, Python, and modern web technologies"
    },
    {
      role: "Mobile Developers",
      count: "3+",
      description: "Experts in Flutter, React Native, and native app development"
    },
    {
      role: "UI/UX Designers",
      count: "2+",
      description: "Creating beautiful, user-friendly interfaces that convert"
    },
    {
      role: "Game Developers",
      count: "2+",
      description: "Bringing game concepts to life with Unity and Unreal Engine"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Beginning",
      description: "Zorqent was born from a shared passion for technology and a desire to build something meaningful."
    },
    {
      year: "2024",
      title: "First Clients",
      description: "Delivered our first projects and received incredible feedback that fueled our growth."
    },
    {
      year: "2025",
      title: "Expanding Horizons",
      description: "Growing our team and taking on international projects, serving clients across multiple countries."
    },
    {
      year: "2026",
      title: "Building the Future",
      description: "Continuing to innovate, scale, and help businesses transform through technology."
    }
  ];

  return (
    <div className="page-container pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
          About <span className="gradient-text">Zorqent</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeInUp stagger-2">
          A young, ambitious team of developers from Kerala, India, on a mission to transform businesses through innovative digital solutions
        </p>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Zorqent started with a simple idea: what if a group of passionate, talented developers could offer world-class development services without the enterprise price tag?
              </p>
              <p>
                We're not a traditional company. We're a collective of fresh developers from Kerala, India, who believe that great software shouldn't be exclusive to big corporations with massive budgets. We're here to level the playing field.
              </p>
              <p>
                While we may be young, our skills are sharp, our hunger to learn is insatiable, and our dedication to our clients is unwavering. We bring fresh perspectives, modern solutions, and a genuine enthusiasm that larger, more established firms often lose.
              </p>
              <p>
                Every project we take on is an opportunity to prove ourselves, to learn, and to build something we're proud of. That's why we pour our hearts into every line of code, every design decision, and every client interaction.
              </p>
            </div>
          </div>

          <div className="relative animate-fadeInUp stagger-2">
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Based in Kerala</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Operating from God's Own Country, serving the world</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Fresh Developers</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Young, energetic team with modern skills and perspectives</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Global Reach</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Serving clients from India to international markets</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Startup Mindset</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Agile, innovative, and always ready to adapt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="glass rounded-3xl p-10 hover-lift animate-fadeInUp">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              To become a globally recognized technology partner, known for transforming innovative ideas into successful digital products that make a real impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where Zorqent is synonymous with quality, innovation, and accessible development services – helping startups and businesses of all sizes achieve their digital dreams.
            </p>
          </div>

          {/* Mission */}
          <div className="glass rounded-3xl p-10 hover-lift animate-fadeInUp stagger-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              To deliver exceptional digital solutions that combine cutting-edge technology with user-centric design, while maintaining transparent communication and startup-friendly pricing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We're committed to continuous learning, embracing new technologies, and providing personalized attention to every project – treating each client's success as our own.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeInUp">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp stagger-2">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 hover-lift animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeInUp">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp stagger-2">
            Talented individuals united by a passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 text-center hover-lift animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl font-black gradient-text mb-4">{member.count}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.role}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeInUp">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp stagger-2">
            From humble beginnings to building the future
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex gap-8 items-start animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{milestone.year}</span>
                </div>
              </div>
              <div className="glass rounded-2xl p-6 flex-1 hover-lift">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center hover-glow animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Us on Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            Whether you're a startup, entrepreneur, or established business, we're ready to help you build something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:zorqent@gmail.com"
              className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/50"
            >
              Start Your Project
            </a>
            <Link 
              to="/services"
              className="btn-secondary glass px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
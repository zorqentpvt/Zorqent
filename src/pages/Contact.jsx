import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:zorqent@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form and show success message
    setFormData({ name: "", email: "", phone: "", message: "" });
    setFormStatus({ submitted: true, error: false });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      value: "zorqent@gmail.com",
      link: "mailto:zorqent@gmail.com",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      value: "+91 73066 84286",
      subValues: ["+91 81294 64645", "+91 85905 94735"],
      link: "tel:+917306684286",
      color: "from-green-600 to-teal-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Kerala, India",
      link: null,
      color: "from-blue-600 to-cyan-600"
    }
  ];

  const faqs = [
    {
      question: "What are your rates?",
      answer: "Our pricing is startup-friendly and project-based. We offer competitive rates tailored to your budget and requirements. Contact us for a free quote!"
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-3 weeks, while a complex app could take 2-3 months. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! While we're based in Kerala, India, we serve clients globally. We're experienced in working across time zones and communicate effectively through email, calls, and video conferences."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer post-launch support and maintenance packages to ensure your project continues to run smoothly. Your success is our priority."
    }
  ];

  return (
    <div className="page-container pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-2">
          Have a project in mind? Let's discuss how we can help bring your vision to life
        </p>
      </section>

      {/* Contact Methods */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="card-hover glass rounded-3xl p-8 text-center animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{method.title}</h3>
              {method.link ? (
                <a 
                  href={method.link}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors text-lg font-medium block mb-2"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">{method.value}</p>
              )}
              {method.subValues && (
                <div className="mt-2 space-y-1">
                  {method.subValues.map((subValue, idx) => (
                    <a 
                      key={idx}
                      href={`tel:${subValue.replace(/\s/g, '')}`}
                      className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm block"
                    >
                      {subValue}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-fadeInUp">
            <div className="glass rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

              {formStatus.submitted && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-4 mb-6 animate-fadeIn">
                  <p className="text-green-400 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent! We'll contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Info & FAQs */}
          <div className="space-y-8 animate-fadeInUp stagger-2">
            {/* Why Contact Us */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Zorqent?</h3>
              <ul className="space-y-4">
                {[
                  "Free initial consultation",
                  "Transparent pricing, no hidden costs",
                  "Fast response time (within 24 hours)",
                  "Flexible engagement models",
                  "Dedicated project manager",
                  "Ongoing support & maintenance"
                ].map((item, idx) => (
                   <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Hours</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-gray-900 dark:text-white font-medium">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-gray-900 dark:text-white font-medium">10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-400 dark:text-gray-500">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                  <p className="text-sm text-gray-400">
                    📧 Email inquiries answered within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeInUp">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 hover-lift animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center hover-glow animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your <span className="gradient-text">Journey</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            Whether you have a detailed project plan or just an idea, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:zorqent@gmail.com"
              className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/50"
            >
              Email Us Now
            </a>
            <a 
              href="tel:+917306684286"
              className="btn-secondary glass px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


// SEO Component with comprehensive meta tags
function SEO({ title, description, keywords, ogImage }) {
  const siteUrl = "https://zorqent.com";
  const defaultImage = `${siteUrl}/og-image.jpg`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Zorqent" />
      <link rel="canonical" href={siteUrl} />
      
      {/* Geo Tags for Kerala, India */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kerala, India" />
      <meta name="geo.position" content="10.8505;76.2711" />
      <meta name="ICBM" content="10.8505, 76.2711" />
    </Helmet>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SEO 
                title="Zorqent - Web, App & Game Development | Kerala, India"
                description="Zorqent is a passionate team of young developers from Kerala, India, building scalable web applications, mobile apps, and games for clients worldwide. Affordable, quality-driven development solutions."
                keywords="web development Kerala, app development India, game development, startup developers Kerala, affordable web development, mobile app development India, full stack developers Kerala, UI/UX design India, SEO optimized websites, cloud solutions Kerala"
              />
              <Home />
            </>
          } />
          <Route path="/services" element={
            <>
              <SEO 
                title="Our Services - Web, App & Game Development | Zorqent"
                description="Explore Zorqent's development services: Full-stack web development, mobile apps, game development, UI/UX design, and cloud solutions. Quality development at startup-friendly rates from our Kerala-based team."
                keywords="web development services, mobile app development, game development, UI/UX design services, cloud solutions, affordable tech services, React development, Node.js development, custom software development"
              />
              <Services />
            </>
          } />
          <Route path="/about" element={
            <>
              <SEO 
                title="About Us - Young Developers Building the Future | Zorqent"
                description="Meet Zorqent: a passionate team of fresh developers from Kerala, India, ready to bring your digital dreams to life. Learn about our mission, vision, and commitment to excellence in software development."
                keywords="about zorqent, startup development team Kerala, young developers India, tech startup Kerala, development company India, fresh developers team"
              />
              <About />
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <SEO 
                title="Our Work - Portfolio & Projects | Zorqent"
                description="Explore Zorqent's portfolio of web applications, mobile apps, and digital solutions. See what our talented Kerala-based team can build for you."
                keywords="development portfolio, web projects, app projects, zorqent work, Kerala developers portfolio"
              />
              <Portfolio />
            </>
          } />
          <Route path="/contact" element={
            <>
              <SEO 
                title="Contact Us - Let's Build Together | Zorqent"
                description="Get in touch with Zorqent for your next digital project. Email us at zorqent@gmail.com or call our Kerala team. Free consultations for startups and entrepreneurs worldwide."
                keywords="contact zorqent, hire developers Kerala, development inquiry India, tech consultation, zorqent@gmail.com, Kerala development team contact"
              />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
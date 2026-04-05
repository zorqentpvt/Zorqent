import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

/* ---------- SEO Component ---------- */
function SEO({ title, description, keywords, ogImage }) {
  const location = useLocation();
  const siteUrl = "https://zorqent.com";
  const currentUrl = siteUrl + location.pathname;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* General SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zorqent" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kerala, India" />
    </Helmet>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <Router>
      <div className="page-container overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="Zorqent | Web, App & Software Development"
                  description="Zorqent is a development team based in Kerala, India, building web applications, mobile apps, and software solutions for businesses."
                  keywords="web development Kerala, mobile app development India, software development Kerala, React developers, Node.js developers"
                />
                <Home />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <SEO
                  title="Services | Zorqent"
                  description="We offer web development, mobile app development, and software solutions tailored to business needs."
                  keywords="web development services, mobile app development, custom software development, UI UX services"
                />
                <Services />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <SEO
                  title="About | Zorqent"
                  description="Learn about Zorqent, a Kerala-based development team focused on building practical and scalable software solutions."
                  keywords="about zorqent, development team Kerala, software company India"
                />
                <About />
              </>
            }
          />

          <Route
            path="/portfolio"
            element={
              <>
                <SEO
                  title="Portfolio | Zorqent"
                  description="Explore selected projects and software solutions developed by Zorqent."
                  keywords="development portfolio, web projects, app projects"
                />
                <Portfolio />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <SEO
                  title="Contact | Zorqent"
                  description="Get in touch with Zorqent to discuss your web or software development requirements."
                  keywords="contact zorqent, hire developers Kerala, software consultation"
                />
                <Contact />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

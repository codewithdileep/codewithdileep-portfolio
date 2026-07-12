import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="logo-white">Code</span>
        <span className="logo-blue">With</span>
        <span className="logo-white">Dileep</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="right-icons">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
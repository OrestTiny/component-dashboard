import React, { useState, useEffect } from 'react';
import './assets/styles.css';
import TableOfContents from './components/TableOfContents';
import ComponentSection from './components/ComponentSection';
import { componentData } from './data';

// Group components by category
const groupedComponents = componentData.reduce((acc, component) => {
  if (!acc[component.category]) {
    acc[component.category] = [];
  }
  acc[component.category].push(component);
  return acc;
}, {});

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState('light');
  const [isAutoTheme, setIsAutoTheme] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to determine theme based on time
  const getThemeByTime = () => {
    const hour = new Date().getHours();
    // Dark theme from 20:00 to 6:00
    return (hour >= 20 || hour < 6) ? 'dark' : 'light';
  };

  // Theme toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedAutoMode = localStorage.getItem('autoTheme');

    if (savedAutoMode === 'false') {
      // If automatic mode is off, use saved theme
      setIsAutoTheme(false);
      setTheme(savedTheme || 'light');
      document.documentElement.setAttribute('data-theme', savedTheme || 'light');
    } else {
      // Automatic mode - determine theme based on time
      setIsAutoTheme(true);
      const autoTheme = getThemeByTime();
      setTheme(autoTheme);
      document.documentElement.setAttribute('data-theme', autoTheme);
    }

    // Update theme every minute
    const interval = setInterval(() => {
      if (localStorage.getItem('autoTheme') !== 'false') {
        const newAutoTheme = getThemeByTime();
        setTheme(newAutoTheme);
        document.documentElement.setAttribute('data-theme', newAutoTheme);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    if (isAutoTheme) {
      // First click - disable automatic mode and switch theme
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setIsAutoTheme(false);
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      localStorage.setItem('autoTheme', 'false');
      document.documentElement.setAttribute('data-theme', newTheme);
    } else {
      // Further clicks - just switch theme
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  const enableAutoTheme = () => {
    setIsAutoTheme(true);
    localStorage.setItem('autoTheme', 'true');
    localStorage.removeItem('theme');
    const autoTheme = getThemeByTime();
    setTheme(autoTheme);
    document.documentElement.setAttribute('data-theme', autoTheme);
  };

  // Track active section on scroll and progress
  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Active section
      const sections = componentData.map(comp => document.getElementById(comp.id));
      const scrollPosition = window.scrollY + 150; // Increase offset for better tracking

      // Find current section
      let currentSection = '';

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // If scroll is within section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = componentData[i].id;
            break;
          }

          // If this is the last section and we scrolled below all
          if (i === sections.length - 1 && scrollPosition >= sectionTop) {
            currentSection = componentData[i].id;
          }
        }
      }

      // If no active section found but there are sections
      if (!currentSection && sections.length > 0) {
        // Find closest section above
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            currentSection = componentData[i].id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Call immediately to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-top">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className="app-header">
        <h1>Component Dashboard</h1>
        <div className="header-info">
          <span className="component-count">{componentData.length} components</span>
          <div className="theme-controls">
            {!isAutoTheme && (
              <button
                className="auto-theme-btn"
                onClick={enableAutoTheme}
                title="Enable automatic theme"
              >
                🕐
              </button>
            )}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={
                isAutoTheme
                  ? `Automatic theme (currently ${theme === 'light' ? 'light' : 'dark'})`
                  : (theme === 'light' ? 'Switch to dark' : 'Switch to light')
              }
            >
              {theme === 'light' ? (
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                </svg>
              )}
              {isAutoTheme && (
                <span className="auto-indicator">●</span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="app-content">
        <TableOfContents
          components={groupedComponents}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <main className="content-main">
          {componentData.map((component, index) => (
            <ComponentSection
              key={component.id}
              component={component}
              isLast={index === componentData.length - 1}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

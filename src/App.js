import React, { useState, useEffect } from 'react';
import './assets/styles.css';
import TableOfContents from './components/TableOfContents';
import ComponentSection from './components/ComponentSection';

// Додайте тут ваші компоненти - приклад з ColorInput
const componentData = [
  {
    id: 'colorinput',
    name: 'ColorInput',
    category: 'Form',
    description: 'Color input allows the user to select a color, either by using a visual color picker or by entering the HEX color code manually into the text field',
    image: `${process.env.PUBLIC_URL}/assets/images/colorinput-preview.png`,
    code: `import React, { useState } from 'react';

const ColorInput = ({ 
  size = 'medium', 
  value = '#3899EC', 
  onChange, 
  placeholder = 'Enter color...' 
}) => {
  const [color, setColor] = useState(value);
  
  const handleChange = (e) => {
    setColor(e.target.value);
    onChange?.(e.target.value);
  };
  
  return (
    <div className={\`color-input \${size}\`}>
      <input 
        type="color" 
        value={color} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        value={color} 
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ColorInput;`
  },
  // Додайте тут більше компонентів...
  {
    id: 'button',
    name: 'Button',
    category: 'Form',
    description: 'A versatile button component that supports different sizes, variants, and states',
    image: `${process.env.PUBLIC_URL}/assets/images/button-preview.png`,
    code: `import React from 'react';

const Button = ({ 
  children,
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;`
  }
];

// Групуємо компоненти за категоріями
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

  // Функція для визначення теми за часом
  const getThemeByTime = () => {
    const hour = new Date().getHours();
    // Темна тема з 20:00 до 6:00
    return (hour >= 20 || hour < 6) ? 'dark' : 'light';
  };

  // Theme toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedAutoMode = localStorage.getItem('autoTheme');

    if (savedAutoMode === 'false') {
      // Якщо автоматичний режим вимкнений, використовуємо збережену тему
      setIsAutoTheme(false);
      setTheme(savedTheme || 'light');
      document.documentElement.setAttribute('data-theme', savedTheme || 'light');
    } else {
      // Автоматичний режим - визначаємо тему за часом
      setIsAutoTheme(true);
      const autoTheme = getThemeByTime();
      setTheme(autoTheme);
      document.documentElement.setAttribute('data-theme', autoTheme);
    }

    // Оновлюємо тему кожну хвилину
    const interval = setInterval(() => {
      if (localStorage.getItem('autoTheme') !== 'false') {
        const newAutoTheme = getThemeByTime();
        setTheme(newAutoTheme);
        document.documentElement.setAttribute('data-theme', newAutoTheme);
      }
    }, 60000); // Перевіряємо кожну хвилину

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    if (isAutoTheme) {
      // Перший клік - вимикаємо автоматичний режим і переключаємо тему
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setIsAutoTheme(false);
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      localStorage.setItem('autoTheme', 'false');
      document.documentElement.setAttribute('data-theme', newTheme);
    } else {
      // Подальші кліки - просто переключаємо тему
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

  // Відстежуємо активну секцію при скролінгу та прогрес
  useEffect(() => {
    const handleScroll = () => {
      // Прогрес скролу
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Активна секція
      const sections = componentData.map(comp => document.getElementById(comp.id));
      const scrollPosition = window.scrollY + 150; // Збільшуємо offset для кращого відстеження

      // Знаходимо поточну секцію
      let currentSection = '';

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // Якщо скрол знаходиться в межах секції
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = componentData[i].id;
            break;
          }

          // Якщо це остання секція і ми прокрутили нижче всіх
          if (i === sections.length - 1 && scrollPosition >= sectionTop) {
            currentSection = componentData[i].id;
          }
        }
      }

      // Якщо не знайшли активну секцію, але є секції
      if (!currentSection && sections.length > 0) {
        // Знаходимо найближчу секцію зверху
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

    // Викликаємо одразу для встановлення початкового стану
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
          <span className="component-count">{componentData.length} компонентів</span>
          <span className="version">v1.0.0</span>
          <div className="theme-controls">
            {!isAutoTheme && (
              <button
                className="auto-theme-btn"
                onClick={enableAutoTheme}
                title="Увімкнути автоматичну тему"
              >
                🕐
              </button>
            )}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={
                isAutoTheme
                  ? `Автоматична тема (зараз ${theme === 'light' ? 'світла' : 'темна'})`
                  : (theme === 'light' ? 'Переключити на темну' : 'Переключити на світлу')
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
          <div className="intro-section">
            <h1>Бібліотека Компонентів</h1>
            <p>Повна документація та приклади використання React компонентів. Натисніть на назву компонента у меню для швидкого переходу.</p>
          </div>

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

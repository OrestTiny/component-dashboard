import React, { useState } from 'react';

const ComponentSection = ({ component, isLast }) => {
  const [tooltips, setTooltips] = useState({});

  const copyCode = async (sectionId, code) => {
    try {
      await navigator.clipboard.writeText(code);
      setTooltips(prev => ({ ...prev, [sectionId]: true }));
      setTimeout(() => {
        setTooltips(prev => ({ ...prev, [sectionId]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section id={component.id} className={`component-section ${isLast ? 'last' : ''}`}>
      {/* Component Header */}
      <div className="component-header">
        <h2 className="component-title">{component.name}</h2>
      </div>

      {/* Code and Image Sections */}
      {component.sections && component.sections.map((section, index) => (
        <div key={section.id} className="component-demo-section">
          {/* Section Header */}
          <div className="section-header">
            <h3 className="section-title">{section.title}</h3>
            <p className="section-description">{section.description}</p>
          </div>

          {/* Layout: code left, image right */}
          <div className="code-image-layout">
            {/* Code (50% left) */}
            <div className="code-section-half">
              <div className="code-header">
                <h4>Code</h4>
                <div className="copy-button-container">
                  <button
                    className="copy-button"
                    onClick={() => copyCode(section.id, section.code)}
                  >
                    Copy
                  </button>
                  {tooltips[section.id] && (
                    <div className="copy-tooltip">
                      ✓ Copied!
                    </div>
                  )}
                </div>
              </div>
              <div className="code-content">
                <pre>
                  <code>{section.code}</code>
                </pre>
              </div>
            </div>

            {/* Image (50% right) */}
            <div className="image-section-half">
              <div className="image-header">
                <h4>Preview</h4>
              </div>
              <div className="image-container">
                <img
                  src={section.image}
                  alt={`${component.name} - ${section.title}`}
                  className="component-image"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ComponentSection; 
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

  const copyParam = async (paramName) => {
    try {
      await navigator.clipboard.writeText(paramName);
      setTooltips(prev => ({ ...prev, [`param-${paramName}`]: true }));
      setTimeout(() => {
        setTooltips(prev => ({ ...prev, [`param-${paramName}`]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy parameter:', err);
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
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Parameters Table */}
      {component.parameters && component.parameters.length > 0 && (
        <div className="parameters-section">
          <div className="section-header">
            <h3 className="section-title">Parameters</h3>
          </div>
          <div className="parameters-table-container">
            <table className="parameters-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {component.parameters.map((param, index) => (
                  <tr key={index}>
                    <td>
                      <div className="param-name-container">
                        <span className="param-name">{param.name} {'=> ""'}</span>
                        <button
                          className="param-copy-btn"
                          onClick={() => copyParam(param.name + ' => ""')}
                          title="Copy parameter name"
                        >
                          📋
                        </button>
                        {tooltips[`param-${param.name}`] && (
                          <div className="param-tooltip">
                            ✓ Copied!
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="param-description">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default ComponentSection; 
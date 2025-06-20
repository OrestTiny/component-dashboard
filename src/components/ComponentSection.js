import React, { useState } from 'react';

const ComponentSection = ({ component, isLast }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(component.code);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section id={component.id} className={`component-section ${isLast ? 'last' : ''}`}>
      {/* Заголовок компонента */}
      <div className="component-header">
        <h2 className="component-title">{component.name}</h2>
        <p className="component-description">{component.description}</p>
      </div>

      {/* Картинка компонента */}
      {component.image && (
        <div className="image-section">
          <h3 className="section-title">Превью</h3>
          <div className="image-container">
            <img
              src={component.image}
              alt={`${component.name} component preview`}
              className="component-image"
            />
          </div>
        </div>
      )}

      {/* Код */}
      <div className="code-section">
        <div className="code-header">
          <h3>Код компонента</h3>
          <div className="copy-button-container">
            <button
              className="copy-button"
              onClick={copyCode}
            >
              Копіювати
            </button>
            {showTooltip && (
              <div className="copy-tooltip">
                ✓ Скопійовано!
              </div>
            )}
          </div>
        </div>
        <div className="code-content">
          <pre>
            <code>{component.code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default ComponentSection; 
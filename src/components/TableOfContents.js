import React from 'react';

const TableOfContents = ({ components, activeSection, onSectionClick }) => {
  return (
    <nav className="table-of-contents">
      <div className="toc-header">
        <h2>Компоненти</h2>
        <p className="toc-subtitle">Навігація по бібліотеці</p>
      </div>

      <div className="toc-content">
        {Object.entries(components).map(([category, categoryComponents]) => (
          <div key={category} className="toc-category">
            <h3 className="toc-category-title">{category}</h3>
            <ul className="toc-list">
              {categoryComponents.map((component) => (
                <li key={component.id} className="toc-item">
                  <button
                    className={`toc-link ${activeSection === component.id ? 'active' : ''}`}
                    onClick={() => onSectionClick(component.id)}
                  >
                    <span className="toc-link-name">{component.name}</span>
                    <span className="toc-link-description">{component.description.substring(0, 60)}...</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents; 
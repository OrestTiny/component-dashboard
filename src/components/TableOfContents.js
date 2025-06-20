import React, { useState } from 'react';

const TableOfContents = ({ components, activeSection, onSectionClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter components based on search term
  const filteredComponents = Object.entries(components).reduce((acc, [category, categoryComponents]) => {
    const filtered = categoryComponents.filter(component =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  return (
    <aside className="table-of-contents">
      <div className="toc-search">
        <input
          type="text"
          placeholder="Search components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="toc-content">
        {Object.entries(filteredComponents).map(([category, categoryComponents]) => (
          <div key={category} className="toc-category">
            <ul className="toc-list">
              {categoryComponents.map(component => (
                <li key={component.id} className="toc-item">
                  <button
                    className={`toc-link ${activeSection === component.id ? 'active' : ''}`}
                    onClick={() => onSectionClick(component.id)}
                  >
                    <span className="toc-link-name">{component.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {Object.keys(filteredComponents).length === 0 && searchTerm && (
          <div className="no-results">
            No components found for "{searchTerm}"
          </div>
        )}
      </div>
    </aside>
  );
};

export default TableOfContents; 
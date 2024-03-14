import React, { useState } from 'react';

const TabMenu = ({ resources }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="tabs">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {resource.category}
          </div>
        ))}
      </div>
      <div className="tab-content-container">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`tab-content ${activeTab === index ? 'show' : ''}`}
          >
            <h2 style={{ color: '#2A324B' }}>{resource.category}</h2>
            <p className="tab-text">{resource.text}</p>
            <ul>
              {resource.sources.map((source, idx) => (
                <li key={idx}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;

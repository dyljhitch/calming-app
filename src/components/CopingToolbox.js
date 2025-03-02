import React, { useState } from 'react';
import '../styles.css'; // Adjust path if needed

function CopingToolbox() {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      name: '5-4-3-2-1 Grounding',
      description: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.',
    },
    {
      name: 'Positive Affirmation',
      description: 'Repeat: "I am enough, and I am doing my best."',
    },
    {
      name: 'Body Scan',
      description: 'Close your eyes, focus on your breath, and notice tension from head to toe.',
    },
  ];

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="toolbox-container">
      <h2 className="toolbox-title">Coping Toolbox</h2>
      {!selectedTool ? (
        <ul className="toolbox-list">
          {tools.map((tool, index) => (
            <li key={index}>
              <button
                className="toolbox-button"
                onClick={() => handleToolClick(tool)}
              >
                {tool.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="tool-detail">
          <h3 className="tool-name">{selectedTool.name}</h3>
          <p className="tool-description">{selectedTool.description}</p>
          <button
            className="back-button"
            onClick={() => setSelectedTool(null)}
          >
            Back to Tools
          </button>
        </div>
      )}
    </div>
  );
}

export default CopingToolbox;
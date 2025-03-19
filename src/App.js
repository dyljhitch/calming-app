import React from 'react';
import SosButton from './components/SosButton';
import MoodTracker from './components/MoodTracker';
import CopingToolbox from './components/CopingToolbox';
import Journal from './components/Journal';



function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Calm Companion</h1>
      <div className="app-sections">
        <SosButton />
        <MoodTracker />
        <CopingToolbox />
        <Journal />
      </div>
    </div>
  );
}

export default App;

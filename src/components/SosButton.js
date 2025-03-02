import React, { useState, useEffect } from 'react';
import '../styles.css'; // Adjust path if needed

function SosButton() {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [breathText, setBreathText] = useState('');

  const startBreathing = () => {
    setIsActive(true);
    setCount(0);
  };

  useEffect(() => {
    if (!isActive) return;

    let step = 0;
    const steps = [
      { text: 'Inhale...', duration: 4 },
      { text: 'Hold...', duration: 7 },
      { text: 'Exhale...', duration: 8 },
    ];

    const cycle = () => {
      if (!isActive) return;
      if (step >= steps.length) {
        step = 0;
        setCount((prev) => prev + 1);
      }
      const { text, duration } = steps[step];
      setBreathText(text);
      setTimeout(cycle, duration * 1000);
      step++;
    };

    cycle();
    return () => clearTimeout(cycle);
  }, [isActive]);

  return (
    <div className="sos-container">
      {!isActive ? (
        <button className="sos-button" onClick={startBreathing}>
          Begin Breathing Excercises.
        </button>
      ) : (
        <div>
          <div className="breathing-text">{breathText}</div>
          <div className="breathing-circle"></div>
          <p className="cycle-count">Cycles: {count}</p>
          <button className="stop-button" onClick={() => setIsActive(false)}>
            Stop
          </button>
        </div>
      )}
    </div>
  );
}

export default SosButton;
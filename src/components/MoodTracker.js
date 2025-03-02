import React, { useState, useEffect } from 'react';
import '../styles.css'; // Adjust path if needed

function MoodTracker() {
  const [mood, setMood] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem('moodLogs')) || [];
    setLogs(savedLogs);
  }, []);

  const logMood = () => {
    if (!mood) return;
    const newLog = { mood, date: new Date().toLocaleString() };
    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem('moodLogs', JSON.stringify(updatedLogs));
    setMood('');
  };

  return (
    <div className="mood-tracker-container">
      <h2 className="mood-tracker-title">How are you feeling?</h2>
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="mood-select"
      >
        <option value="">Pick a feeling that you may be experiencing</option>
        <option value="Calm">Calmness</option>
        <option value="Anxious">Anxiousness</option>
        <option value="Low">feeling Low</option>
        <option value="Okay">okayish ?</option>
        <option value="Unexplainable">Unexplainable</option>
      </select>
      <button onClick={logMood} className="log-button">
        Log
      </button>
      <div className="mood-table-wrapper">
        <table className="mood-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Mood</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.date}</td>
                <td>{log.mood}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MoodTracker;
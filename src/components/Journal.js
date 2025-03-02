import React, { useState, useEffect } from 'react';
import '../styles.css'; // Adjust path if needed

function Journal() {
  const [entry, setEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setJournalEntries(savedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entry.trim()) return;

    const newEntry = {
      text: entry,
      timestamp: new Date().toLocaleString(), // Full date and time
    };
    const updatedEntries = [newEntry, ...journalEntries];
    setJournalEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setEntry(''); // Clear input
  };

  return (
    <div className="journal-container">
      <h2 className="journal-title">Your Journal</h2>
      <form onSubmit={handleSubmit} className="journal-form">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="journal-input"
          placeholder="Write your thoughts here..."
          rows="4"
        />
        <button type="submit" className="journal-submit-button">
          Save Entry
        </button>
      </form>
      <div className="journal-log">
        {journalEntries.map((entry, index) => (
          <div key={index} className="journal-entry">
            <span className="journal-timestamp">{entry.timestamp}</span>
            <p className="journal-text">{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal;
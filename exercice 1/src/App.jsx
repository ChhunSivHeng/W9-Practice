import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const handleScoreChange = (event) => {
    let value = Number(event.target.value);
    if (value < 0) value = 0;
    if (value > 10) value = 10;
    setScore(value);
  };

  const getScoreBarStyle = () => {
    // Compute width
    const scoreWidth = `${(score / 10) * 100}%`;

    // Compute color based on score
    let scoreColor = "#f3bc47"; // Default orange
    if (score >= 7) scoreColor = "#4caf50"; // Green for high score
    else if (score <= 3) scoreColor = "#f44336"; // Red for low score

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={handleScoreChange}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}

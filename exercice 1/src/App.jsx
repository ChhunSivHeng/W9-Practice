import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`;

    // 2- Compute color (optional)
    let scoreColor = `#e74c3c`; // Default Red
    if (score > 3) scoreColor = "#f3bc47"; // Orange
    if (score > 6) scoreColor = "#2ecc71"; // Green

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "20px",
      transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
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
          onChange={(e) => setScore(Math.min(10, Math.max(0, Number(e.target.value))))}
        />

        <div className="score-bar" style={{ border: "1px solid #000", width: "100%", height: "20px", marginTop: "10px" }}>
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}

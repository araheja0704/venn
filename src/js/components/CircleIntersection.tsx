import React, { useState, useEffect } from 'react';
import '../../css/CircleIntersection.css'; 

const CircleIntersection: React.FC = () => {
  const [leftCirclePosition, setLeftCirclePosition] = useState(0);
  const [rightCirclePosition, setRightCirclePosition] = useState(100);

  useEffect(() => {
    // Animate the circles when the component is mounted
    const interval = setInterval(() => {
      setLeftCirclePosition((prev) => (prev < 40 ? prev + 1 : prev)); // Moves right
      setRightCirclePosition((prev) => (prev > 60 ? prev - 1 : prev)); // Moves left
    }, 20);

    // Stop the interval once they intersect
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="circle-container">
      <div
        className="circle"
        style={{
          left: `${leftCirclePosition}%`,
        }}
      />
      <div
        className="circle"
        style={{
          left: `${rightCirclePosition}%`,
        }}
      />
    </div>
  );
};

export default CircleIntersection;

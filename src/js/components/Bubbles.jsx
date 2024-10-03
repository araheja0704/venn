import React, { useEffect } from 'react';
import '../../css/Bubbles.css'; 

const BubbleBackground = () => {
  useEffect(() => {
    createBubbles();
  }, []);

  const createBubbles = () => {
    const bubbleContainer = document.getElementById('bubble-container');
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      // Random size and position for the bubble
      const size = Math.random() * 100 + 20 + 'px';
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.animationDuration = Math.random() * 5 + 3 + 's';
      bubble.style.opacity = Math.random();

      bubbleContainer.appendChild(bubble);
    }
  };

  return <div id="bubble-container"></div>;
};

export default BubbleBackground;

import React, { useState, useEffect } from "react";
import '../../css/Popup.css'; 

const MessageBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="message-box">
        <div className="window-header">
          <span>(1) Welcome to Venn! </span>
          <button className="exit-button" onClick={handleClose}>
            ✖
          </button>
        </div>
        <div className="window-body">
          <p>Create a profile with 1-3 friends. Get matched with another group. We'll tell you when and where to meet them. 
          Bonus: Get discounts at your favorite Ann Arbor restaurants when you meet your match</p>
        </div>
        <button className="coral-button" onClick={handleClose}>
          I understand
        </button>
      </div>
    )
  );
};

export default MessageBox;


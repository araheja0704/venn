import React, { useState, useEffect } from 'react';
import './css/App.css';
import CircleIntersection from './js/components/CircleIntersection'; 


function App() {
    return (
      <>
        <main className="main-content">
          <img src="logo.png" alt="Venn Diagram" />
          <br />
          <br />
          <button
            className="primary-button"
            onClick={() => (window.location.href = 'https://tally.so/r/3lWGqV')}
          >
            Join our Waitlist
          </button>
        </main>
      </>
    );
  }
  
  export default App;


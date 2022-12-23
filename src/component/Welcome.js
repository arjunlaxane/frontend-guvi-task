import React from 'react';
import './Welcome.css';
import Header from './Header';
const Welcome = () => {
  return (
    <>
      <Header />
      <div className="welcome_container">
        <div className="welcome_content">
          <h2>Welcome to Guvi's Task</h2>
        </div>
      </div>
    </>
  );
};

export default Welcome;

// import React from 'react';
import './Button.css'; // Import the CSS file for styling

const Button = ({ text, onClick }) => {
  return (
    <button className="glow-on-hover" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

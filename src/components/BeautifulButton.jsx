import React from 'react';
import './BeautifulButton.css';

const BeautifulButton = ({ text, onClick }) => {
  return (
    <button className="beautiful-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default BeautifulButton;

import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Lets Meet</h1>
      <a href="http://localhost:5000/dashboard">
        <h1>Home</h1>
      </a>
    </div>
  );
}

import React from 'react';
import './App.css';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="body-content">
      <div className="landing-page">
        <div className="bg-image"></div>
        <div className="overlay"></div>
        <MainContent />
      </div>
    </div>
  );
}

export default App;

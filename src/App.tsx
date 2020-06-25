import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={'https://digirati.com/media/1002/digirati-logo-white-green.svg'}
          className="App-logo"
          alt="logo"
        />
        <p>Hello world.</p>
        <p>I am a basic snowpack app.</p>
        <a
          className="App-link"
          href="https://digirati.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Digirati
        </a>
      </header>
    </div>
  );
}

export default App;

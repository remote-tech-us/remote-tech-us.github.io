import NavBar from './components/NavBar';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/img/0.jpg')" }}>
      <NavBar />
      <div className="flex-1. flex-col items-center justify-center text-center px-6 -mt-17 animate-fade-in">
        {/*
        <video
          className="rounded-lg shadow-lg w-full max-w-xl"
          type="video/mp4"
          src="/img/globe.mp4"
          autoPlay
          muted
          loop
          playsInLine
        >
          <source src="/img/globe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  */}
        <a href="https://cal.com/remote-tech.us"
           className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
          <h5 className="text-1xl font-bold font-center">Schedule a Meeting</h5>
        </a>
        {/* 
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        */}
      </div>
      {/*<h1>Vite + React</h1> */}
      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </div>
  )
}

export default App

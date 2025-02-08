import { useState } from 'react'
import logo1 from './assets/logo1.png'
import bg from './assets/bg.jpg'
import logo from './assets/logo.png'
import './App.css'
import video from './assets/vid.mp4'


function App() {
  return (
    <>
      <div>
      <h1>Lambada presents $LBD </h1>
        <div>
          <img src={bg} alt="bg" />
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo1} className="logo react" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <video src={video} autoPlay loop muted playsInline></video>
      
      <div className="card">
        <button onClick={() => {}}>
          <a href="https://dexscreener.com/abstract/0x7887b47ec1c904d67891cdef23266380c38a46f1" target="_blank">TRADE NOW</a>
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

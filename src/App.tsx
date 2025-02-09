import logo1 from './assets/logo1.png'
import logo from './assets/logo.png'
import './App.css'
import video from './assets/vid.mp4'
import Carousel from './Slider'



function App() {
  return (
    <>
      <div className="container1">
        <div className="wrapper">
        <h1 className="text-center text-4xl font-bold title-main">The first community meme token <br/>created in an online live stream</h1>
      
      <h1 className="text-center text-4xl font-bold abstract">on Abstract</h1>
      <Carousel />
      <div className="card">
        <button className="bg-blue-500 hover:bg-blue-700 text-xl text-white px-4 py-4 rounded-md" onClick={() => {}}>
          <a href="https://dexscreener.com/abstract/0x7887b47ec1c904d67891cdef23266380c38a46f1" target="_blank">TRADE NOW</a>
        </button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App

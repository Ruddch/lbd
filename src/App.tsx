import './App.css'
import Carousel from './Slider'



function App() {
  return (
    <>
      <div className="container1">
        <div className="wrapper">
        <h1 className="text-center text-4xl font-bold title-main">The first community meme token <br/>created in an online live stream</h1>
      
      <h1 className="text-center text-4xl font-bold abstract">on Abstract</h1>
      <div className="px-30 w-[80%] mx-auto"><Carousel /></div>
      <div className="card">
        <button className="bg-blue-500 text-2xl font-bold font-size-2xl hover:bg-blue-700 text-xl text-white px-8 m--10 py-8 rounded-full" onClick={() => {}}>
          <a href="https://dexscreener.com/abstract/0x7887b47ec1c904d67891cdef23266380c38a46f1" target="_blank"><h1>BUY $LBD</h1></a>
        </button>
        <p className="text-center py-10 text-l text-white">Our goal is growth. Together. Be a part of history.</p>
      </div>
      </div>
      </div>
    </>
  )
}

export default App

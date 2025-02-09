import './App.css'
import Carousel from './Slider'



function App() {
  return (
    <>
      <div className="container1">
        <div className="wrapper">
          <div className="">
            <h1 className="text-center text-4xl font-bold title-main goldman-regular">The first token from the streamer launched</h1>
            <h1 className="text-center font-size-2xl text-4xl font-bold abstract goldman-bold">on Abstract</h1>
          </div>
          <div className="px-0 w-[100%] mx-auto"><Carousel /></div>
          <div className="card h-[25vh]">
          <a href="https://dexscreener.com/abstract/0x7887b47ec1c904d67891cdef23266380c38a46f1" target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white px-16 py-4 rounded-full btn" onClick={() => {}}>
              <h1 className="goldman-bold">BUY $LBD</h1>
              <p className="moonshot goldman-regular">on Moonshot</p>
            </button></a>
            <p className="text-center py-5 text-l text-white">Our goal is growth. Together. Be a part of history.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

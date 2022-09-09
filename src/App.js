function App() {
  return (
    <div 
      className="bg-background w-full h-screen grid content-center
                justify-center"
    >
      <div className="bg-bgCard px-10 py-5 text-white">
        <h1 className="font-bold font-robotoMono text-4xl mb-10
                      hover:text-buttons hover:scale-110
                      transition duration-500"
        >
          Text to speech
        </h1>
        <h2 className="font-robotoMono font-thin text-xs text-buttons mb-1">
          Texto:
        </h2>
        <textarea className="w-80" rows="" cols=""/>
        <div className="flex justify-between mt-5 font-robotoMono">
          <button
            type="button"
            className="border border-buttons rounded-md 
                      px-4 py-1 text-buttons hover:bg-opacity-10
                      hover:bg-buttons transition duration-200
                      ease-in-out"
          > 
            Convert
          </button>
          <button
            type="button"
            className="border border-buttons rounded-md 
                      px-4 py-1 text-buttons hover:bg-opacity-10
                      hover:bg-buttons transition duration-200
                      ease-in-out"  
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

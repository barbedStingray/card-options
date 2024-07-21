import './App.css';

function App() {
  const boxes = [
    {
      className: 'box-1',
      buttonText: 'dToons',
      buttonColor: '#00BF9C',
    },
    {
      className: 'box-2',
      buttonText: 'Collection',
      buttonColor: '#653EE6',
    },
    {
      className: 'box-3',
      buttonText: 'Store',
      buttonColor: '#008BFF',
    },
    {
      className: 'box-4',
      buttonText: 'Decks',
      buttonColor: '#FF6500',
    },
  ];

  return (
    <div className="App">
      <div className="container">
        {boxes.map((box, index) => (
          <div key={index} className={`box ${box.className}`}>
            <div className="cover">
              <div className='imageFace'></div>
              {/* <img src={box.image} alt="" /> */}
            </div>
            <button>
              <div>{box.buttonText}</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

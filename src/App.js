import './App.css';

function App() {
  return (
    <div className="App">
	  <title>Wied Enterprise</title>
    </div>

  );
}

function homebtn() {
  return ( 
  <div>
    <button OnClick ={() => window.location.href = 'https://wiedenterprise.com'}>Home</button>
    </div>
  )
}

export default App;

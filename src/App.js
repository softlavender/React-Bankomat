import './App.css';
import Header from './Header';
import Main from './Main';
import { useState } from 'react';

function App() {
  const [usingService, setUsingService] = useState(false)

  const updServiceStatus = _ => setUsingService(!usingService)

  return (
    <div className="App">
      <header id="App-header">
        <Header />
      </header>

      <main id="App-main">
        <Main usingService={usingService} updServiceStatus={updServiceStatus}/>
      </main>

      <footer id="App-footer">copyright brandworks</footer>
    </div>
  );
}

export default App;

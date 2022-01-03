import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header id="App-header">
        <Header />
      </header>

      <mian id="App-main">
        <Main />
      </mian>

      <footer id="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

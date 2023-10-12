import logo from './logo.svg';
import './App.css';
import OtherContent from './components/OtherContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         hello 
        </div>
      </header>
      <OtherContent className="content-parent"/>
      <footer className="App-footer">
        footer
        <p>puwigedukjnk3</p>wed
      </footer>
    </div>
  );
}

export default App;
import './App.css';
import { FaSpinner } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nathan James.</h1>
        <p>
          <FaSpinner icon="spinner" className="spinner" />
        </p>
        <p>
          Coming Soon...
        </p>
      </header>
    </div >
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [response,setResponse] = useState('previous')
  useEffect(()=>{
    fetch('/api').then(data=>data.text()).then(data=>setResponse(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {response}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;

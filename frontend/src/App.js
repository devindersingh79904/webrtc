import { useEffect } from 'react';
import './App.css';
import { connectWithWebSocket } from './utils/wssConnection';

function App() {

  useEffect(()=>{
    connectWithWebSocket()    
  },[])

  return (
    <div className="App">
      <h1>I am running from react app</h1>
    </div>
  );
}

export default App;

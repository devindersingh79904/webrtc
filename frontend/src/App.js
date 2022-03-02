import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { connectWithWebSocket } from './utils/wssConnection';

function App() {

  useEffect(()=>{
    connectWithWebSocket()    
  },[])

  return (
    <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;

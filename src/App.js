import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IntMark from './componets/IntMark';

function App() {
  return (
    <BrowserRouter>
    
  <Routes>

<Route path="/" element={<IntMark/>} />


  </Routes>
    
    </BrowserRouter>
  );
}

export default App;

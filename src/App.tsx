import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import { Route, Routes } from 'react-router';
import Index from '@/pages/Index';
import Login from '@/pages/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        {' '}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

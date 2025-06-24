import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Loader from './loader';
import Header from './components/Header';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

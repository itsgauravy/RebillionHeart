import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Poetry from './components/Poetry';
import Loader from './loader';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Gallary from './components/Gallary';
import Books from './components/Books';


function App() {
  console.log("This is the latest version!");

  const [loading, setLoading] = useState(true);


  return (

    <>
    
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="poetry" element={<Poetry />} />
            <Route path="soulprints" element={<Gallary />} />
            <Route path="books" element={<Books />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import './Home.css';
import { HomeComponents } from './components/HomeComponents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './components/Article';



function App() {
  return (
      <div >
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<HomeComponents />} />
            <Route path="/article" element={<Article/>}/>
          </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  BrowserRouter,
} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes/index';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </BrowserRouter>
  );
}

export default App;

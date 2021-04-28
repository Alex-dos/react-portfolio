import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Footer from './components/Footer/Footer';
import Content from './components/Content';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

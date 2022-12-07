import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
    
  function toggleDarkMode() {
      setDarkMode(prevDarkMode => prevDarkMode ? false : true)    
  }

  return (
    <div className="App">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>      
      <Home darkMode={darkMode}/>
      <Skills />
    </div>
  );
}

export default App;

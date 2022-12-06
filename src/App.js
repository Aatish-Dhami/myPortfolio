import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
    
  function toggleDarkMode() {
      setDarkMode(prevDarkMode => prevDarkMode ? false : true)    
  }

  return (
    <div className="App">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;

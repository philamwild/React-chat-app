import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
    <Contact 
    image = "https://randomuser.me/api/portraits/women/27.jpg"
    name = "Sophie Lane"
    online 
    />
    <Contact 
    image = "https://randomuser.me/api/portraits/men/50.jpg"
    name = "Tyler Mckinney"
    
    />
    <Contact 
    image = "https://randomuser.me/api/portraits/men/8.jpg"
    name = "Tyrone Gonzales"
    online 
    />
    </div>
  );
}

export default App;

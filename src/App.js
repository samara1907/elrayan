import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import AddToHomeScreen from '@ideasio/add-to-homescreen-react';



 

function App() {
 
  return (
    <div className="App">
    <AddToHomeScreen/>
    <Home/>
    </div>
  );
}


export default App;

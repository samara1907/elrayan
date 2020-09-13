import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import Particles from 'react-particles-js';

const ParticlesOptions = {
  particles: {
  "number":{
    "value":90,
     "density": {"enable":false,"value_area":150}
        }  
    }
  }
function App() {
  return (
    <div className="App">
    <Particles className='particles' params={ParticlesOptions} />
    <Home/>
    </div>
  );
}

export default App;

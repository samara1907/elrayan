import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import Particles from 'react-particles-js';
import AddToHomescreen from 'react-add-to-homescreen';

const ParticlesOptions = {
  particles: {
  "number":{
    "value":50,
     "density": {"enable":false,"value_area":90}
        }  
    }
  }

 

function App() {
  return (
    <div className="App">
    <AddToHomescreen/>
    <Particles className='particles' params={ParticlesOptions} />
    <Home/>
    </div>
  );
}

export default App;

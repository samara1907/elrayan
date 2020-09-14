import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import Particles from 'react-particles-js';
import { useReactPWAInstall } from "react-pwa-install";

const ParticlesOptions = {
  particles: {
  "number":{
    "value":50,
     "density": {"enable":false,"value_area":90}
        }  
    }
  }

 

function App() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
 
  return (
    <div className="App">
    <Particles className='particles' params={ParticlesOptions} />
    <Home/>
    </div>
  );
}


export default App;

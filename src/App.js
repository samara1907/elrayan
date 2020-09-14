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
  const handleClick = () => {
    pwaInstall({
      title: "Install Web App",
      features: (
        <ul>
          <li>Cool feature 1</li>
          <li>Cool feature 2</li>
          <li>Even cooler feature</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "This is how the install dialog looks like. Here you can describe your app briefly.",
    })
      .then(() => alert("App installed successfully or instructions for install shown"))
      .catch(() => alert("User opted out from installing"));
  };
  return (
    <div className="App">
      <div>
      {supported() && !isInstalled() && (
        <button type="button" onClick={handleClick}>
          Install App
        </button>
      )}
    </div>
    <Particles className='particles' params={ParticlesOptions} />
    <Home/>
    </div>
  );
}


export default App;

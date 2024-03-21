import React, {useCallback} from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';



const App =() =>{
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


const options = {
  // Define particle configuration here
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
  },
  particles: {
    number: {
      value: 80,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff",
      },
    },
    move: {
      direction: "none",
      outMode: "out",
    },
  },
};

  return (
    <div className="App">
      <Particles className= "particles" 
        id="tsparticles" 
        url="http://foo.bar/particles.json" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={options}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm  />

      {/*<FaceRecognition /> */}


    </div>
  );
}

export default App;

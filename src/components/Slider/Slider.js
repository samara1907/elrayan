import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './Slider.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);
 
const Slider =()=>{
	 return(
  <AutoplaySlider className="slid" cssModule={AwesomeSliderStyles} animation="cubeAnimation"
 		 play={true}
   	 cancelOnInteraction={false} // should stop playing on user interaction
   	 interval={4000}
    media={[
     
      {
        	source: require("./imgs/2.jpg"),
      },
      {
			source: require("./imgs/2.jpg"),  
     },
    ]}
    >
   </AutoplaySlider>
);
}

export default Slider;
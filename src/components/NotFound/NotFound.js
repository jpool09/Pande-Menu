import React from 'react';
import IconNewConfirmed from "@material-ui/icons/AddAlert";
import IconTotalConfirmed from "@material-ui/icons/AirlineSeatFlat";
import IconNewDeaths from "@material-ui/icons/NewReleases";
import IconTotalDeaths from "@material-ui/icons/MoodBad";
import IconNewRecovered from "@material-ui/icons/AccessibilityNew";
import IconTotalRecovered from "@material-ui/icons/EmojiEmotions";
import Particles from "react-particles-js";
import Image from 'material-ui-image'
import {
    Card,
    CardHeader,
    List,
    Avatar,
    ListItem,
    ListItemText,
	ListItemAvatar,
  } from "@material-ui/core";
    

  function NotFound(){

    const paramsParticles = {
        "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
    };

    return (
        <>
          <header className="app-header" >
          <h3>404 - Not Found</h3>
        </header>
		<Image href="./Images/404.png" />
		{/* <Image src="http://loremflickr.com/300/200" /> */}
        <Particles className="particles" params={paramsParticles} />
        </>
      );
  };


export default NotFound;
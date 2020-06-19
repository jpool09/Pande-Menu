import React, {useState, useEffect } from 'react';
import Info from "./../Info/Info"
import CountryInfo from "./../CountryInfo/CountryInfo"
import SearchInfo from "./../SearchInfo/SearchInfo"
import axios from 'axios';
import Particles from "react-particles-js";
import { Grid } from "@material-ui/core";

const InfoManager = () => {
    const [info, setInfo] = useState({});

    const getInfo = () => {
        axios.get("https://api.covid19api.com/summary")
        
        .then(({data})=>{
            setInfo(data);
        })
        
    };

    useEffect (() => {
        getInfo();
    }, []);

    const paramsParticles = {
        "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
    };

    return (
    <>
        {/* <h1>Covid-19</h1>
        {JSON.stringify(info)} */}
        <header className="app-header" >
          <h3>COVID Ubicador</h3>
        </header>
        <Grid container direction="row" justify="center" alignItems="center">
          <SearchInfo Countries={info.Countries} />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
            <Info
                date={info.Date}
                NewConfirmed={info.Global && info.Global.NewConfirmed}
                TotalConfirmed={info.Global && info.Global.TotalConfirmed}
                NewDeaths={info.Global && info.Global.NewDeaths}
                TotalDeaths={info.Global && info.Global.TotalDeaths}
                NewRecovered={info.Global && info.Global.NewRecovered}
                TotalRecovered={info.Global && info.Global.TotalRecovered}
            />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {/* <CountryInfo Countries={info.Countries} /> */}
        </Grid>
        <Particles className="particles" params={paramsParticles} />
    </>)
};

export default InfoManager;
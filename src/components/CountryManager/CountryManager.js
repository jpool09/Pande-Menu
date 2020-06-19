import React, {useState, useEffect } from 'react';
import CountryInfo from "./../CountryInfo/CountryInfo"
import axios from 'axios';
import Particles from "react-particles-js";
import { Grid } from "@material-ui/core";

const CountryManager = () => {
    const [country, setCountry] = useState({});

    const getInfo = () => {
        axios.get("https://api.covid19api.com/summary")
        
        .then(({data})=>{
            setCountry(data);
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
          <h3>Pande-Menu</h3>
        </header>
        <Grid container direction="row" justify="center" alignItems="center">
          {/* <SearchInfo Countries={country.Countries} /> */}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
            <CountryInfo
                date={country.Date}
                Countries={country.Countries}
                NewConfirmed={country.Global && country.Global.NewConfirmed}
                TotalConfirmed={country.Global && country.Global.TotalConfirmed}
                NewDeaths={country.Global && country.Global.NewDeaths}
                TotalDeaths={country.Global && country.Global.TotalDeaths}
                NewRecovered={country.Global && country.Global.NewRecovered}
                TotalRecovered={country.Global && country.Global.TotalRecovered}
            />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {/* <CountryInfo Countries={info.Countries} /> */}
        </Grid>
        <Particles className="particles" params={paramsParticles} />
    </>)
};

export default CountryManager;
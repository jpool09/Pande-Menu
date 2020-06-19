import React from 'react';
import IconNewConfirmed from "@material-ui/icons/AddAlert";
import IconTotalConfirmed from "@material-ui/icons/AirlineSeatFlat";
import IconNewDeaths from "@material-ui/icons/NewReleases";
import IconTotalDeaths from "@material-ui/icons/MoodBad";
import IconNewRecovered from "@material-ui/icons/AccessibilityNew";
import IconTotalRecovered from "@material-ui/icons/EmojiEmotions";
import {
    Card,
    CardHeader,
    List,
    Avatar,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Button
  } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer-container">
            <div>
                ©PandeMenu 2020
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import axios from 'axios';
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
  } from "@material-ui/core";

const Info = ({
    date,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
}) => {
    

    return (
      <>
        {/* Nuevos Confirmados */}
        <Card className="card-info">
          <CardHeader
            title="Nuevos confirmados"
          />
          <div className="card-row">
            <List>
            <ListItem>
                <ListItemAvatar>
                  <Avatar className="avatar1">
                    <IconNewConfirmed className="color1" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={NewConfirmed}
                />
              </ListItem>
            </List>
          </div>
        </Card>

        {/* Total Confirmados */}
        <Card className="card-info">
          <CardHeader
            title="Total de confirmados"
          />
          <div className="card-row">
            <List>
            <ListItem>
                <ListItemAvatar>
                  <Avatar className="avatar1">
                    <IconTotalConfirmed className="color1" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={TotalConfirmed}
                />
              </ListItem>
            </List>
          </div>
        </Card>

        {/* Nuevas muertes */}
        <Card className="card-info">
          <CardHeader
            title="Nuevas muertes"
          />
          <div className="card-row">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className="avatar1">
                    <IconNewDeaths className="color1" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={NewDeaths}
                />
              </ListItem>
            </List>
          </div>
        </Card>

        {/* Muertes totales */}
        <Card className="card-info">
          <CardHeader
            title="Muertes totales"
          />
          <div className="card-row">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className="avatar1">
                    <IconTotalDeaths className="color1" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={TotalDeaths}
                />
              </ListItem>
            </List>
          </div>
        </Card>

        {/* Nuevos Recuperados */}
        <Card className="card-info">
          <CardHeader
            title="Nuevos Recuperados"
          />
          <div className="card-row">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className="avatar1">
                    <IconNewRecovered className="color1" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={NewRecovered}
                />
              </ListItem>
            </List>
          </div>
        </Card>

        {/* Total de Recuperados */}
        <Card className="card-info">
          <CardHeader
            title="Total de Recuperados"
          />
          <div className="card-row">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className="avatar3">
                    <IconTotalRecovered className="color3" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={TotalRecovered}
                />
              </ListItem>
            </List>
          </div>
        </Card>
      </>
    );
};

export default Info;
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';

let user = {}
if ('USER' in localStorage) {
  user = JSON.parse(localStorage.getItem('USER'))
}

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      {`Hey ${user.name}!`}
    </ListSubheader>
    <ListItemButton href="http://localhost:3000/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton href="http://localhost:3000/reservations">
      <ListItemIcon>
        <RestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="Reservations" />
    </ListItemButton>
    <ListItemButton href="http://localhost:3000/bookreservations">
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary="Lunch Reservation" />
    </ListItemButton>
    <ListItemButton href="http://localhost:3000/adduser">
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Users" />
    </ListItemButton>
    <ListItemButton href="http://localhost:3000/viewuser">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="View Users" />
    </ListItemButton>
  </React.Fragment>
);

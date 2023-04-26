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
import { AppConfig } from '../config/Config';

let user = JSON.parse(localStorage.getItem('USER'))

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      {`Hey ${user?.name}!`}
    </ListSubheader>
    {user?.admin === 1 && 
    <ListItemButton href={AppConfig.DASHBOARD_URL}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    }
    <ListItemButton href={AppConfig.RESERVATIONS_URL}>
      <ListItemIcon>
        <RestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="Reservations" />
    </ListItemButton>
    <ListItemButton href={AppConfig.BOOK_RESERVATION_URL}>
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary="Lunch Reservation" />
    </ListItemButton>
    {user?.admin === 1 && 
    <ListItemButton href={AppConfig.ADD_USER_URL}>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Users" />
    </ListItemButton>
    }
    {user?.admin === 1 && 
    <ListItemButton href={AppConfig.VIEW_USER_URL}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="View Users" />
    </ListItemButton>
    }
  </React.Fragment>
);

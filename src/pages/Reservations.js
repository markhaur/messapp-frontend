import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Title from './Title';
import { mainListItems } from './listItems';
import Orders from './Orders';
import ReservationCount from './ReservationCount';
import { getReservationsByDate, getReservationsByID } from '../api/apis';


const options = { day: '2-digit', month: 'long', year: 'numeric' };
const user = JSON.parse(localStorage.getItem('USER'));

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
       Manager Rafiullah!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Generate Sales Data
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function ReservationContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  const handleLogout = () => {
    localStorage.clear();
    window.location = "http://localhost:3000/login";
  }

  const [reservations, setReservations] = React.useState([]);
  const [reservationStats, setReservationStats] = React.useState({});
  const [date, setDate] = React.useState()

  const handleDateChange = (event) => {
    setDate(event.target.value);
    async function fetchData() {
      let response = null
      if (user.admin === 1) {
        response = await getReservationsByDate(event.target.value);
      } else {
        response = await getReservationsByID(user.id)
      }
      if (response.isOk) {
        let temp = []
        let totalGuests = 0;
        for (let i = response.data.length - 1; i >= 0; i--) {
          let reservation = response.data[i]; 
          totalGuests = totalGuests + reservation.no_of_guests;
          temp.push({
            id: reservation.id, 
            date: event.target.value,
            name: reservation.name, 
            time: reservation.reservation_time, 
            guests: reservation.no_of_guests, 
            totalResr: reservation.no_of_guests + 1,
          }); 
        }
        setReservations(temp)
        setReservationStats({ totalReservations: temp.length, totalGuests, totalMeals: temp.length + totalGuests});
        setDate(event.target.value)
      }
    }
    fetchData();
  }

  React.useEffect(() => {
    let loggedInUser = localStorage.getItem('USER');
    if (!loggedInUser) {
      window.location = 'http://localhost:3000/login'
    }

    async function fetchData() {
      let today = new Date().toISOString().split('T')[0];
      let response = null;
      if (user.admin === 1) {
        response = await getReservationsByDate(today);
      } else {
        response = await getReservationsByID(user.id)
      }
      if (response.isOk) {
        let temp = [];
        let totalGuests = 0;
        for (let i = response.data.length - 1; i >= 0; i--) {
          let reservation = response.data[i];
          totalGuests = totalGuests + reservation.no_of_guests;
          temp.push({
            id: reservation.id, 
            date: reservation.reservation_time.split('T')[0], 
            name: reservation.name, 
            time: reservation.reservation_time, 
            guests: reservation.no_of_guests, 
            totalResr: reservation.no_of_guests + 1,
          });
        }
        setReservations(temp);
        setReservationStats({ totalReservations: temp.length, totalGuests, totalMeals: temp.length + totalGuests});
        setDate(new Date().toLocaleDateString('en-US', options))
      }
    }
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Reservations
            </Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              {user?.admin === 1 && 
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Title>Select Date</Title>
                  <input type="date" value={date} onChange={handleDateChange} />
                </Paper>
              </Grid>
              }
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ReservationCount 
                    title={"Total Reservations"}
                    count={reservationStats.totalReservations}
                    link={""}
                    linkDescription={""}
                    date={date}
                  />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ReservationCount 
                    title={"Total Guests"}
                    count={reservationStats.totalGuests}
                    link={""}
                    linkDescription={""}
                    date={date}
                  />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ReservationCount 
                    title={"Total Meals"}
                    count={reservationStats.totalMeals}
                    link={""}
                    linkDescription={""}
                    date={date}
                  />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxHeight: 350, overflow: 'auto' }}>
                  <Orders 
                    linkText={""}
                    reservations={reservations}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Reservations() {
  return <ReservationContent />;
}
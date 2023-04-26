import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { bookReservation } from '../api/apis';

const theme = createTheme();
const options = { day: '2-digit', month: 'long', year: 'numeric' };
const date = new Date().toLocaleDateString('en-US', options);
const normalDate = new Date();
const user = JSON.parse(localStorage.getItem('USER'))

export default function BookReservationForm() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let reservationRequest = {
      no_of_guests: data.get('guests') ? parseInt(data.get('guests')) : 0,
      reservation_time: normalDate,
      type: 2,
      user_id: user.id,
    }
    
    let result = await bookReservation(reservationRequest);
    
    if (result.isOk) {
      alert('reservation is successfully booked!')
      window.location = 'http://127.0.0.1:3000/reservations'
    } else {
      alert('There is problem while saving user!')
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FastfoodIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Lunch Reservation
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              disabled
              margin="normal"
              fullWidth
              // label="Date"
              defaultValue={date}
            />
            <TextField
              margin="normal"
              fullWidth
              id="guests"
              label="No of guests"
              name="guests"
              autoComplete="guests"
              type="number"
              defaultValue={0}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Book
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
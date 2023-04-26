import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addUser } from '../api/apis';

const theme = createTheme();

export default function AddUserForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let addUserRequest = {
      name: data.get('name'),
      employeeid: data.get('empid'),
      designation: data.get('designation'),
      admin: data.get('admin') ? 1 : 0,
      active: data.get('active') ? 1 : 0,
    }
    
    if (addUserRequest.name === "" || 
        addUserRequest.employeeid === "" || 
        addUserRequest.designation === "") {
      alert('Please provide required information!')
      return;
    }
    
    let result = await addUser(addUserRequest);
    
    if (result.isOk) {
      alert('User is successfully saved!')
      window.location = 'http://127.0.0.1:3000/viewuser'
    } else {
      alert('There is problem while saving user!')
    }
    console.log('response: ', result.data)
    // console.log({
    //   name: data.get('name'),
    //   empid: data.get('empid'),
    //   designation: data.get('designation'),
    //   admin: data.get('admin'),
    //   active: data.get('active')
    // });
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
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="empid"
              label="Employee ID"
              name="empid"
              autoComplete="empid"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="designation"
              label="Designation"
              id="designation"
              autoComplete="designation"
            />
            <FormControlLabel
              control={<Checkbox value={1} color="primary" />}
              label="Admin"
              name="admin"
            />
            <FormControlLabel
              control={<Checkbox value={1} color="primary" />}
              label="Active"
              name="active"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
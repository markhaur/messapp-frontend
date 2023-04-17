import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


export default function Orders(props) {
  return (
    <React.Fragment>
      <Title>Recent Reservations</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Reservation Time</TableCell>
            <TableCell>Guests</TableCell>
            <TableCell>Total Reservations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell>{reservation.date}</TableCell>
              <TableCell>{reservation.name}</TableCell>
              <TableCell>{reservation.time}</TableCell>
              <TableCell>{reservation.guests}</TableCell>
              <TableCell>{reservation.totalResr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="http://localhost:3000/reservations" sx={{ mt: 3 }}>
        {props.linkText}
      </Link>
    </React.Fragment>
  );
}
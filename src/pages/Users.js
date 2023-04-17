import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonIcon from '@mui/icons-material/Person';


export default function Users(props) {
  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.employeeID}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.designation}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
              <TableCell>{user.isDisable ? <PersonIcon /> : <PersonOffIcon />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="http://localhost:3000/users" sx={{ mt: 3 }}>
        {props.linkText}
      </Link>
    </React.Fragment>
  );
}
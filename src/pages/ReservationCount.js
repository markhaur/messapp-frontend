import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function ReservationCount(props) {
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">
        {props.count}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 05 April, 2023
      </Typography>
      <div>
        <Link color="primary" href={props.link}>
          {props.linkDescription}
        </Link>
      </div>
    </React.Fragment>
  );
}
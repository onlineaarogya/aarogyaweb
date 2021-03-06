import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const FamilyMembers = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [data, setData] = useState('');
  const fetchData = async () => {
    const req = await fetch(
      'https://randomuser.me/api/?gender=male&results=100',
    );
    const newData = await req.json();

    return setData(newData.results);
  };

  useEffect(() => {
    fetchData();
  }, [0]);

  const rows = [
    { id: 1,firstName: 'Jon' ,lastName: 'Seth', email:"seth@yahoo.com", state:"Bihar",city:"Patna",address:"Patna Sahib"},
    { id: 1,firstName: 'Jonis' ,lastName: 'Anam', email:"ana@gmail.com", state:"Gujrat",city:"Rajkot",address:"Outer Village"},
    { id: 1,firstName: 'Amber' ,lastName: 'Saxena', email:"sad12@gmail.com", state:"MP",city:"Indore",address:"Stadium Road"},
    { id: 1,firstName: 'Rabies' ,lastName: 'Kumar', email:"rabies@yahoo.com", state:"Bihar",city:"Patna",address:"Patna Sahib"},
    { id: 1,firstName: 'Dinesh' ,lastName: 'Singh', email:"ds23@yahoo.in", state:"Sikkim",city:"Gangtok",address:"Outer City"},
    { id: 1,firstName: 'Sahil' ,lastName: 'Saxena', email:"sad12@gmail.com", state:"MP",city:"Indore",address:"Stadium Road"},
  ];

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Family Members
            </Typography>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/add-family-member`}
            >
              <Button variant="outlined" color="primary">
                <AddIcon /> Add Family Member
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {/* {data
          ? data.map(user => {
              return (
                <div>
                  {user.email}
                  <img src={user.picture.medium} alt="" />
                </div>
              );
            })
          : null} */}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th">Image</TableCell>
                <TableCell component="th">First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell>email</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  
                  <TableCell> <Avatar variant="square" className={classes.square}>P</Avatar></TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell >{row.lastName}</TableCell>
                  <TableCell >{row.email}</TableCell>
                  <TableCell >{row.state}</TableCell>
                  <TableCell >{row.city}</TableCell>
                  <TableCell >{row.address}</TableCell>
                  {/* <TableCell >{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

FamilyMembers.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FamilyMembers;

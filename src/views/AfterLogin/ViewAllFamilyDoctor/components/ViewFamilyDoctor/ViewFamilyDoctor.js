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
import MetaTitle from 'components/helper/MetaTitle';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';

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

const ViewFamilyDoctor = props => {
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
    { id: 1,name: 'Dr.Anish' , mobile:8792020200, email:"seth@yahoo.com",specilist:"Dentist", state:"Bihar",city:"Patna",address:"Patna Sahib"},
    { id: 1,name: 'Dr.Krupa', mobile:7903992929, email:"ana@gmail.com",specilist:"Kedney", state:"Gujrat",city:"Rajkot",address:"Outer Village"},
    { id: 1,name: 'Dr.Rabies', mobile:7793939939, email:"sad12@gmail.com",specilist:"Surgon", state:"MP",city:"Indore",address:"Stadium Road"},
    { id: 1,name: 'Dr.Kamla', mobile:8803399392, email:"rabies@yahoo.com",specilist:"Artho", state:"Bihar",city:"Patna",address:"Patna Sahib"},
    { id: 1,name: 'Dr.Trmup', mobile:9039328833, email:"ds23@yahoo.in",specilist:"Medicine", state:"Sikkim",city:"Gangtok",address:"Outer City"},
   
  ];

  return (
    <div className={className} {...rest}>
      <MetaTitle title="View Family Doctor" metaKeyWord="" metaDescription="" />

      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Family Doctor
            </Typography>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/add-family-doctor`}
            >
              <Button variant="outlined" color="primary">
                <AddIcon /> Add Family Doctor
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
                <TableCell component="th">Name</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.specilist}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.address}</TableCell>

                  {/* <TableCell align="right">{row.carbs}</TableCell>
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

ViewFamilyDoctor.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ViewFamilyDoctor;

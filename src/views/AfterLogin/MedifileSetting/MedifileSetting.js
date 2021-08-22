import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid,Paper,TextField,Menu,MenuItem , Typography, Button,Box, FormControlLabel } from '@material-ui/core';
import MaterialTable from 'material-table';
import TableIcons from 'components/helper/TableIcons';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DateFnsUtils from '@date-io/date-fns';
import {checkToken} from '../../../components/helper/LoginCheck'
import {getFamilyDependentByUid} from '../../../components/helper/PatientApi'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SettingsIcon from '@material-ui/icons/Settings';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {Formik, Form, Field} from 'formik';
import {
Switch,
} from 'formik-material-ui';
import  Breadcrumb  from '../Reusable/MediBreadcrumb';


const useStyles = makeStyles(theme => ({
 
  tableWidth:
  {
    width:"1100px",
    padding:45,
  },
  
}));

const Data = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const columns = [
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "middle_name" },
    { title: "Gender", field: "gender" },
    { title: "Date of Birth", field: 'dob' },
    { title: "Address", field: 'address' }
  ]

  // Code for API Call in Table
  const [datas, setDatas] = useState([]);
  const getFamilyDoctor = async () =>
  {
    var doctorData = await getFamilyDependentByUid();
    console.log("Name:",doctorData);
     setDatas(doctorData.dependents);
  }

  useEffect(() => {
      const loginToken = checkToken();
      if(loginToken)
      {
        getFamilyDoctor();
      }
      else
      {
        Router.push('/signin', undefined, { shallow: true })
      }
  }, [])

  
  // Open Dialog Box on Otp click

  const [opens, setOpens] = React.useState(false);

  const handleClickOpens = () => {
    setOpens(true);
  };

  const handleCloses = () => {
    setOpens(false);
  };

  // 

  const [fileAcces, setFileAccess] = React.useState();

 //

  const otpCheck = () =>
  {
     setFileAccess(true);
     handleCloses();
     console.log("Hello");
     console.log("My file",fileAcces);
  }
  

  return (
  <div className="medifle-setting">
    <Breadcrumb url="Setting"/>
    <div className={classes.tableWidth} style={{ overflow:"hidden"}}>
      <Grid container>
        <Grid item md={11}>
         <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th" align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">DOB</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.first_name}</TableCell>
                  <TableCell align="center">{row.middle_name}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell align="center">{row.dob}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center"><Box margin={1}>
                  <Formik
                    initialValues={{
                      rememberMe: fileAcces,
                    }}
                    >
                      {({submitForm, isSubmitting,  values, setFieldValue,touched, errors}) => (
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <Form> 
                            <Box margin={1}>
                              <FormControlLabel
                                control={
                                  <Field 
                                  
                                    component={Switch} color="primary"  
                                    onChange={handleClickOpens}
                                     type="checkbox" name="rememberMe" />
                                }
                                label="File Access"
                              />
                            </Box>
                          </Form>
                        </MuiPickersUtilsProvider>
                      )}
                    </Formik>
                  </Box> </TableCell>
                
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        <Grid item md={1}></Grid>


       <Dialog open={opens} onClose={handleCloses} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Enter OTP for Verification"}</DialogTitle>
        <DialogContent>
             

          <DialogContentText id="alert-dialog-description">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Enter OTP" variant="outlined" />
          </form>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloses} >
            Close
          </Button>
          <Button onClick={otpCheck} >
            Submit 
          </Button>
         
        </DialogActions>
      </Dialog>
      </Grid>
    </div>
    </div>
  );
};

Data.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Data;

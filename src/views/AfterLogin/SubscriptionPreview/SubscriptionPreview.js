import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Box,
  Paper,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from 'next/link';
// import {checkToken} from '../../../components/helper/LoginCheck'
// import {getFamilyDoctorDetailByUid} from '../../../components/helper/PatientApi'
import Radio from '@material-ui/core/Radio';
import { BorderColor } from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/Check';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import  Breadcrumb  from '../Reusable/MediBreadcrumb';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  paperPadding:
  {
    padding:"10px",
    marginLeft:"20px",
    marginTop:"20px",
   
    // backgroundColor:"gray"
  },
  containerPadding:{
    padding:"20px"
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formControl:
  {
    width:"170px"
  },
  dependentStyle:
  {
    padding:"5px",
  },
  tableStyle:
  {
    borderTopWidth: 2,
     borderColor: '#e7e7e7',
     borderStyle: 'solid'
  },
  select:
  {
    borderColor: "red"
  },
  iconColor:
  {
    color:"#21e121",
    fontWeight:900
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  btnSize:{
    width:"120px",
    height:"50px"
  }
}));

const Subscriptions = props => {

  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className="subs-preview">
       <Breadcrumb url="Subscription Preview"/>
     <div className={classes.paperPadding} >
      <Paper elevation={0} >
       <div className={classes.containerPadding}>
        <Grid container >
          <Grid item xs={12} lg={6}>
              <Paper elevation={0} >
                <Grid container className={classes.dependentStyle}>
                    <Grid itme xs={12} lg={12}>
                      <Box p={2} color="white" style={{backgroundColor:"#1d70ec",borderRadius:"5px"}}>
                      <Grid container> 
                        <Grid itme xs={1}>
                          <Box mt={2}><input type="radio" value="female" style={{backgroundColor:"white",height:"25px",width:"25px"}} /></Box>
                        </Grid>  
                        <Grid itme xs={8}>
                          <Box ml={1}> <Typography variant="h6">Prime Cube</Typography> 
                          <Typography>On Call Suppor for Customer</Typography> </Box> 
                        </Grid>
                        <Grid itme xs={3}>
                            <Box mt={1}><Typography variant="h6" align="center">₹ 8,212</Typography></Box> 
                        </Grid>
                        </Grid>
                        </Box>   
                      </Grid>  
                    </Grid>
                  </Paper>  

              <Paper elevation={0} >
              <Grid container className={classes.dependentStyle}>
                  <Grid itme xs={12} lg={12}>
                    <Box p={2}  style={{backgroundColor:"#ececec",borderRadius:"5px"}}>
                    <Grid container> 
                      <Grid itme xs={1}>
                        <Box mt={2} mr={2}><input type="radio" value="female" style={{backgroundColor:"white",height:"25px",width:"25px"}} /></Box>
                      </Grid>  
                      <Grid itme xs={8}>
                        <Box ml={1}> <Typography variant="h6">Medium Cube</Typography> 
                        <Typography>Free Service + Membership</Typography> </Box> 
                      </Grid>
                      <Grid itme xs={3}>
                          <Box mt={1}><Typography variant="h6" align="center">₹ 5,902</Typography></Box> 
                      </Grid>
                      </Grid>
                      </Box>   
                  </Grid>  
              </Grid>
              </Paper>  

              <Paper elevation={0} >
                <Grid container className={classes.dependentStyle}>
                  <Grid itme xs={12} lg={12}>
                    <Box p={2}  style={{backgroundColor:"#ececec",borderRadius:"5px"}}>
                    <Grid container> 
                      <Grid itme xs={1}>
                        <Box mt={2}><input type="radio" value="female" style={{backgroundColor:"white",height:"25px",width:"25px"}} /></Box>
                      </Grid>  
                      <Grid itme xs={8}>
                        <Box ml={1}> <Typography variant="h6">Gold Cube</Typography> 
                        <Typography>24 Hours Support + Customer</Typography> </Box> 
                      </Grid>
                      <Grid itme xs={3}>
                          <Box mt={1}><Typography variant="h6" align="center">₹ 9,202</Typography></Box> 
                      </Grid>
                      </Grid>
                      </Box>   
                  </Grid>   
                </Grid>
              </Paper>  
              </Grid>   
              
              <Grid item xs={1}></Grid>

              <Grid item xs={8} lg={4}>
                <Paper elevation={4}>
                  <Box p={2}>
                    <Typography variant="h5" >Prime Cube</Typography>
                    <Typography color="secondary">Free Service + Membership</Typography>
                     <Box mt={2} display="flex"><CheckIcon className={classes.iconColor}/> <Typography>24*7 Service</Typography></Box>
                     <Box mt={2} display="flex"><CheckIcon className={classes.iconColor}/> <Typography >On Call Support Help</Typography></Box>
                     <Box mt={2} display="flex"><CheckIcon className={classes.iconColor}/> <Typography >No Extra Charge</Typography></Box>
                     <Box mt={4}>
                      <Grid container> 
                       <Grid item xs={7}>
                        <div>
                          <FormControl variant="outlined"  className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">Select Member</InputLabel>
                          <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" label="Select Member">
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Anthony</MenuItem>
                            <MenuItem value={20}>Sebestian</MenuItem>
                            <MenuItem value={30}>Arnold S</MenuItem>
                          </Select>
                         </FormControl>
                       </div>
                      </Grid>
                       <Grid item xs={5}>
                        <Box mt={1}  align="center"> <Button className={classes.btnSize} variant="contained" size="large"  color="primary">Submit</Button></Box>
                        </Grid> 
                       </Grid>   
                     </Box> 
                  </Box>    
                </Paper>
              </Grid>

            </Grid>
            </div>
          </Paper>  
       </div>    
     </div>
  )
}

Subscriptions.propTypes = {

}

export default Subscriptions

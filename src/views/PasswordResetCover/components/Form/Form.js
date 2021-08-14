import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import { getPatientLoginOtpVerification } from '../../../../components/helper/PatientApi';
import AlertMassage from '../../../../components/helper/AlertMessage';
import Router from 'next/router'
import Encodr from "encodr"
import Cookies from 'js-cookie'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));


const schema = {
  otp: {
    presence: { allowEmpty: false, message: 'is required' },
    // otp: true,
    length: {
      maximum: 6,
    },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const [mobile, setMobile] = React.useState()
  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));

    // for for mobile number
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('mob');
    setMobile(myParam)
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = async event => {

    event.preventDefault();
  

    if (formState.isValid) {
      var data = JSON.stringify({"mobile":mobile, "vtype":"login_otp", "otp":formState.values.otp});
     
      const res = await getPatientLoginOtpVerification(data);
      if(res.success){
       setStatusBase('')
      setStatusBase({
       key: 22,
       status: 'success',
       msg:
         'Check your mobile for the OTP',
     });
    //  Router.push(`/signin-otp?mob=${formState.values.mobile}`, undefined, { shallow: true })
    let d = {
      id: res.user.id,
      name: res.user.name,
      avatar: res.user.avatar,
  }

    const JSON = new Encodr("json"); 
    var enData = JSON.encode(res);
    // var enData = JSON.decode(enData);

     Cookies.set('token', enData)
     console.log('encodeData', enData);
   }else{
     setStatusBase('');
     setStatusBase({
       key: 22,
       status: 'error',
       msg:res.message,
     });           

   }
   console.log('res', res);
   setSubiting(false);
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

    const [subming, setSubiting] = React.useState(false);
    const [status, setStatusBase] = React.useState('');

  return (
    <div className={classes.root}>
    {status ? (
      <AlertMassage
        key={status.key}
        message={status.msg}
        status={status.status}
      />
    ) : null}
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="Enter Mobile OTP"
              label="OTP *"
              variant="outlined"
              size="medium"
              name="otp"
              fullWidth
              helperText={hasError('otp') ? formState.errors.otp[0] : null}
              error={hasError('otp')}
              onChange={handleChange}
              type="number"
              value={formState.values.otp || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Didn't  recieve code  ?  
              <LearnMoreLink title="Resent OTP" href="/signin-cover" />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;

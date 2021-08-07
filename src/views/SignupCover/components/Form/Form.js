import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem,
  LinearProgress,
} from '@material-ui/core';
import validate from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import Link from 'next/link';
import { getPatientRegister } from '../../../../components/helper/PatientApi';
import AlertMassage from '../../../../components/helper/AlertMessage';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  mobile: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 300,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  title: {
    presence: { allowEmpty: false, message: 'is required' },
    // length: {
    //   minimum: 8,
    // },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required', email: true },
    length: {
      maximum: 120,
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

  const [subming, setSubiting] = React.useState(false);
  const [status, setStatusBase] = React.useState('');

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
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
    setSubiting(true);
    if (formState.isValid) {
      
      // window.location.replace('/');

      var data = JSON.stringify({"title":formState.values.title,"first_name":formState.values.firstName,"middle_name":"","last_name":formState.values.lastName,"mobile":formState.values.mobile,"email":formState.values.email});
     
         const res = await getPatientRegister(data);
         if(res.success){
          setStatusBase('')
         setStatusBase({
          key: 22,
          status: 'success',
          msg:
            'Account has been created successfully.',
        });
        
      }else{
        // setStatusBase('');
        // // console.log('hello error else');
        // setStatusBase({
        //   key: 22,
        //   status: 'error',
        //   msg:res.message,
        // });

        setStatusBase('')
          setStatusBase({
            key: 22,
            status: 'error',
            msg: res.errors.email ? res.errors.email : '' + res.errors.mobile ? ' ' + res.errors.mobile:'',
       
        });
          
                  

      }
      // console.log('res', res);
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
  // console.log('api Url', process.env.NEXT_PUBLIC_PATIENT_API_URL);
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
          <Grid item xs={2}>
            <TextField
              // placeholder="Firs"
              label="Title *"
              variant="outlined"
              size="medium"
              name="title"
              fullWidth
              select
              helperText={hasError('title') ? formState.errors.title[0] : null}
              error={hasError('title')}
              onChange={handleChange}
              // type="title"
              value={formState.values.title || ''}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              {/* <MenuItem value="2">Enterprise</MenuItem> */}
            </TextField>
          </Grid>

          <Grid item xs={5}>
            <TextField
              placeholder="First name"
              label="First name *"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              helperText={
                hasError('firstName') ? formState.errors.firstName[0] : null
              }
              error={hasError('firstName')}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ''}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              placeholder="Last name"
              label="Last name *"
              variant="outlined"
              size="medium"
              name="lastName"
              fullWidth
              helperText={
                hasError('lastName') ? formState.errors.lastName[0] : null
              }
              error={hasError('lastName')}
              onChange={handleChange}
              type="lastName"
              value={formState.values.lastName || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Mobile"
              label="Mobile *"
              variant="outlined"
              size="medium"
              name="mobile"
              fullWidth
              helperText={
                hasError('mobile') ? formState.errors.mobile[0] : null
              }
              error={hasError('mobile')}
              onChange={handleChange}
              type="mobile"
              value={formState.values.mobile || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Email"
              label="Email *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
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
            {subming ? <LinearProgress /> : null}
            
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Already have an account?
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/signin`}>
                <LearnMoreLink title="Sign in" />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;

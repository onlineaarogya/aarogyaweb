import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';
import { CardBase } from 'components/organisms';
import SearchBox from '../../../IndexView/components/Hero';

const useStyles = makeStyles(theme => ({
  root: {
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      // margin: theme.spacing(5, 0),
    },
  },
  dividerBottom: {
    position: 'relative',
    left: '82px',
    width: '89%',
    top: '-17px',
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  webinarAvatar: {
    width: 200,
    height: 200,
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(2),
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
  filterBox: {
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 0px 4px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    padding: '15px 15px',
  },
}));

const Main = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // Checkbox Group
  const [flavors, setFlavors] = React.useState({
    chocolate: true,
    vanilla: false,
    strawberry: false,
  });

  const { chocolate, vanilla, strawberry } = flavors;

  const handleFlavorChange = event => {
    setFlavors({ ...flavors, [event.target.name]: event.target.checked });
  };

  // code for get current location for landing patient
  // const a = navigator.geolocation.getCurrentPosition(
  //   success => {
  //     console.log(success); // `have the lat and long`
  //   },
  //   failure => {
  //     //`enter code here if failed`
  //   },
  // );

  useEffect(() => {
    // if (navigator.geolocation) {
    //   alert('GeoLocation is Available!');
    // } else {
    //   alert('Sorry Not available!');
    // }
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <DescriptionCta
        title="UX /UI Designer"
        subtitle="San Francisco, CA · Full time"
        primaryCta={
          <Button variant="outlined" color="primary" size="large">
            Refer a friend
          </Button>
        }
        secondaryCta={
          <Button variant="contained" color="primary" size="large">
            Apply now
          </Button>
        }
        align={'left'}
        titleProps={{
          variant: 'h3',
          className: classes.title,
          color: 'textPrimary',
        }}
        subtitleProps={{
          color: 'textPrimary',
        }}
      /> */}

      <SearchBox />
      {/* <Divider className={classes.divider} /> */}
      <br></br>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Grid container direction="column">
            <Grid item xs={12} data-aos="fade-up">
              {/* <CardBase withShadow>
          
                <SectionHeader
                  title="Don't see a job for you?"
                  titleVariant="h6"
                  subtitle="Get free online programing tips and resources delivered directly to your inbox."
                  ctaGroup={[
                    <Button variant="contained" color="primary">
                      See other vacances
                    </Button>,
                  ]}
                  disableGutter
                  align="left"
                  subtitleProps={{
                    variant: 'body1',
                  }}
                />
              </CardBase> */}
              {/* checkbox filter */}
              <div className={classes.filterBox}>
                <Typography variant="h5" gutterBottom>
                  Filter Search Results
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={chocolate}
                        onChange={handleFlavorChange}
                        name="chocolate"
                      />
                    }
                    label="Chocolate"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={vanilla}
                        onChange={handleFlavorChange}
                        name="vanilla"
                      />
                    }
                    label="Vanilla"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                  <Divider className={classes.divider} />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                  <Divider className={classes.divider} />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={strawberry}
                        onChange={handleFlavorChange}
                        name="strawberry"
                      />
                    }
                    label="Strawberry"
                  />
                </FormGroup>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container justify="center">
            {data.map((item, index) => (
              <div>
                <Grid
                  key={index}
                  item
                  container
                  data-aos={'fade-up'}
                  justify="space-between"
                  spacing={isMd ? 4 : 2}
                  className={classes.listGrid}
                  direction="row-reverse"
                >
                  <Grid item xs={12} sm={12} md={8}>
                    <SectionHeader
                      // label={item.authorName}
                      titleVariant="h5"
                      title={item.authorName}
                      subtitle="1st floor , princess park , white house lane , bechar road , valsad, Valsad"
                      ctaGroup={[
                        <Button
                          variant="contained"
                          color="primary"
                          size={isMd ? 'large' : 'medium'}
                          fullWidth
                        >
                          Book now
                        </Button>,
                        <Button
                          variant="outlined"
                          color="primary"
                          size={isMd ? 'large' : 'medium'}
                          fullWidth
                        >
                          Learn More
                        </Button>,
                      ]}
                      align={isMd ? 'left' : 'center'}
                      disableGutter
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    sm={12}
                    md={4}
                    justify={isMd ? 'flex-end' : 'center'}
                    alignItems="center"
                  >
                    <Avatar
                      {...item.authorPhoto}
                      alt={item.authorName}
                      className={classes.webinarAvatar}
                    />
                  </Grid>
                </Grid>
                <Divider className={(classes.divider, classes.dividerBottom)} />
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;

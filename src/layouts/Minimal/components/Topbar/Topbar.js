import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    // position: 'relative',
    // top: '-29px',
    // height: '120px',
    // width: '160px',
    top: '-19px',
    width: '139px',
    height: '70px',
    position: 'relative',
  },
}));

const Topbar = ({ themeMode, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront">
          <Image
            className={classes.logoImage}
            src={
              themeMode === 'light'
                ? process.env.NEXT_PUBLIC_BASE_URL + '/assets/logo-blue.png'
                : process.env.NEXT_PUBLIC_BASE_URL + '/assets/logo-blue.png'
            }
            alt="Oaarogya Logo"
            lazy={false}
          />
        </a>
      </div>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;

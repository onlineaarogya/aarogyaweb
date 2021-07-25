import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: '#e4e6e6',
  },

  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    // width: 120,
    // height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    marginTop: '-18px',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    position: 'relative',
    top: '-26px',
    left: '6px',
    marginRight: theme.spacing(1),
    color: '#5e5e64',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },

  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: '#ec3832',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgb(78 77 84)',
  },
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  console.log(pages);

  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
        </div>
        <div>
          <MenuGroup item={company} />
          {/* <MenuGroup item={contact} /> */}
        </div>
        <div>
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="Oaarogya">
                    <Image
                      className={classes.logoImage}
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        '/assets/logo-blue.png'
                      }
                      alt="Oaarogya"
                      lazy={false}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item>
                <LandingPages />
              </Grid>
              <Grid item>
                <SupportedPages />
              </Grid>
              <Grid item>
                <List disablePadding className={classes.menuItem}>
                  <ListItem disableGutters className={classes.menuGroupItem}>
                    <Typography
                      variant="body2"
                      className={classes.menuGroupTitle}
                    >
                      Aarogya Consult Private Limited
                    </Typography>
                  </ListItem>
                  <Typography variant="body2" className={classes.menuGroupItem}>
                    802, Landmark Business Hub, Silvassa, <br></br>Dadra and
                    Nagar Haveli and Daman and Diu, 396230
                  </Typography>
                  <Typography variant="body2" className={classes.menuGroupItem}>
                    hr@oaarogya.com
                  </Typography>
                  <Typography variant="body2" className={classes.menuGroupItem}>
                    +91 8866126777
                  </Typography>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;

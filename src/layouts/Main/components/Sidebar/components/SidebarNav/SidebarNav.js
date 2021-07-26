/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
  ListItemText,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  console.log('pages', pages);
  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {/* {item.groupTitle} */}
            Title
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            {/* <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textPrimary"
              onClick={() => onClose()}
            >
              {page.title}
            </Typography> */}
            hello
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div className={classes.menuItem}>
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
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
          <MenuGroup item={company} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={contact} />
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
        <div className={classes.menuItem}>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem button>
        <Link href="/">
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link href="about-us">
          <ListItemText primary="About Us" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link href="career">
          <ListItemText primary="Career" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link href="contact-us">
          <ListItemText primary="Contact Us" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link href="our-leadership-team">
          <ListItemText primary="Leadership Team" />
        </Link>
      </ListItem>

      <Divider />
      <ListItem>
        <Typography
          variant="body2"
          color="primary"
          className={classes.menuGroupTitle}
        >
          Services
        </Typography>
      </ListItem>
      <ListItem button>
        <ListItemText primary="Quick Consultation" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Online Consultation" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="In Clinic Appointment" />
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;

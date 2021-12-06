import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Image, DarkModeToggler } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    fontWeight: 600,
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 200,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
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
    position: 'relative',
    height: 'auto',
    top: '-17px',
    width: '130px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
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
  pointer: {
    cursor: 'pointer',
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Link href={page.href}>
              <Typography
                variant="body1"
                component="a"
                href={page.href}
                className={clsx(
                  classes.navLink,
                  'submenu-item',
                  classes.pointer,
                )}
                color="textSecondary"
                onClick={handleClose}
              >
                {page.title}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web, career } = landings.children;
    return (
      <div className={classes.menu}>
        {/* <div className={classes.menuItem}>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div> */}
        <div className={classes.menuItem}>
          <MenuGroup item={web} />
          {/* <MenuGroup item={services} /> */}
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
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={company} />
          <MenuGroup item={contact} />
        </div>
        <div className={classes.menuItem}>
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
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signup} />
          <MenuGroup item={signin} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  const renderPages = id => {
    if (id === 'landing-pages') {
      return <LandingPages />;
    }
    if (id === 'supported-pages') {
      return <SupportedPages />;
    }
    if (id === 'account') {
      return <AccountPages />;
    }
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <Link href="/">
          <a title="OnlineAarogya">
            <Image
              className={classes.logoImage}
              src={
                themeMode === 'light'
                  ? process.env.NEXT_PUBLIC_BASE_URL + '/assets/logo-blue.png'
                  : process.env.NEXT_PUBLIC_BASE_URL + '/assets/logo-blue.png'
              }
              alt="OnlineAarogya"
              lazy={false}
            />
          </a>
        </Link>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          <Link
            href="/"
            color="textPrimary"
            variant="body1"
            className={clsx(classes.listItemText, 'menu-item')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(
                classes.listItemText,
                'menu-item',
                classes.pointer,
              )}
            >
              Home
            </Typography>
          </Link>

          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/about-us`}
            color="textPrimary"
            variant="body1"
            className={clsx(classes.listItemText, 'menu-item')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(
                classes.listItemText,
                'menu-item',
                classes.pointer,
                classes.navLink,
              )}
            >
              About Us
            </Typography>
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/career`}
            color="textPrimary"
            variant="body1"
            className={clsx(classes.listItemText, 'menu-item')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(
                classes.listItemText,
                'menu-item',
                classes.pointer,
                classes.navLink,
              )}
            >
              Career
            </Typography>
          </Link>

          {/* <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog`}
            color="textPrimary"
            variant="body1"
            className={clsx(classes.listItemText, 'menu-item')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(
                classes.listItemText,
                'menu-item',
                classes.pointer,
                classes.navLink,
              )}
            >
              Blog
            </Typography>
          </Link> */}

<Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`}
            color="textPrimary"
            variant="body1"
            className={clsx(classes.listItemText, 'menu-item')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(
                classes.listItemText,
                'menu-item',
                classes.pointer,
                classes.navLink,
              )}
            >
              Contact Us
            </Typography>
          </Link>

          {[landings].map((page, i) => (
            <div key={page.id}>
              <ListItem
                aria-describedby={page.id}
                onClick={e => handleClick(e, page.id)}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : '',
                )}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  {page.title}
                </Typography>

                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={
                      openedPopoverId === page.id ? classes.expandOpen : ''
                    }
                    fontSize="small"
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                elevation={1}
                id={page.id}
                open={openedPopoverId === page.id}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ paper: classes.popover }}
              >
                <div>{renderPages(page.id)}</div>
              </Popover>
            </div>
          ))}

          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <DarkModeToggler
              themeMode={themeMode}
              onClick={() => themeToggler()}
            />
          </ListItem>
          {/* <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <Button variant="outlined" component="a" href="/documentation">
              Documentation
            </Button>
          </ListItem> */}
          <ListItem
            style={{ width: '130px' }}
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            {/* <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/signin`}> */}
            <a>
              <Button
                style={{ width: '119px', padding: '0px 2px' }}
                variant="outlined"
                color="primary"
              >
                Doctor login
              </Button>
            </a>
            {/* </Link> */}
          </ListItem>
          <ListItem
            style={{ width: '130px' }}
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/signin`}>
              <a>
                <Button
                  style={{ width: '119px', padding: '0px 2px' }}
                  variant="outlined"
                  color="primary"
                >
                  Patient login
                </Button>
              </a>
            </Link>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;

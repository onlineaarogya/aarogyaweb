import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  List,
  ListItem,
  Button,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { Image, DarkModeToggler } from 'components/atoms';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  loginAvatar:{
    marginLeft: '9px',
    width: '30px',
    height: '30px',
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
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    paddingRight: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  iconButton: {
    paddingRight: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  themeToggler,
  themeMode,
  ...rest
  }) => {
  const classes = useStyles();



  // Code for Right Dropdown  Menu 
  
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
       })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
    ));

    const StyledMenuItem = withStyles((theme) => ({
      root: {
        '&:focus': {
          backgroundColor: theme.palette.secondary.main,
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
          },
        },
      },
    }))(MenuItem);
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Code for Right Dropdown menu ends 

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
      <Toolbar>
        <div className={classes.logoContainer}>
          <a href="/" title="OnlineAarogya">
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
        </div>

        <Box flexGrow={1} />
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <Hidden smDown>
          <List disablePadding className={classes.navigationContainer}>
            <ListItem
              className={clsx(classes.listItem, 'menu-item--no-dropdown')}
            >
              <Button
                className={classes.listItemText}
                component="a"
               
                variant="outlined"
                onClick={handleClick}
              >
               Rahul Yadav

                <Avatar variant="square" className={classes.loginAvatar} src="/broken-image.jpg" />
              </Button>
            </ListItem>
             <Box mt={2}>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <StyledMenuItem>
                <ListItemIcon>
                  <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </StyledMenuItem>
            </StyledMenu>
            </Box>

          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            className={classes.iconButton}
            disableRipple
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default TopBar;

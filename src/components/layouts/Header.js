import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import {makeStyles} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: " #F7F8FC",
   
  },
  text: {
    color: "#252733",
    fontSize: 14,
  },
  icon:{
    color: "#C5C7CD",
  }
}));  

const Header = (props) =>{
  const { onDrawerToggle } = props;
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                className={classes.icon}
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <SearchIcon className={classes.icon}/>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton className={classes.icon}>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Divider sx={{ ml: 2 }} />
            <Grid item className={classes.text}>
           
            Jones Ferdinand
          
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="../../assets/m header.png" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    
    </>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
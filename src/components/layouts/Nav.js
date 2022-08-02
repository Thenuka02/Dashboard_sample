import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { Link } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import {makeStyles} from "@material-ui/core";
//import { Link } from '@mui/material';
import imgA from "../../assets/Vector.png";
//import imgA from "../../assets/Ellipse.svg";


const menu = [
  
    { id: 'Overview', icon: <ArticleIcon />, path:"/"  },
    { id: 'Tickets', icon: <PermMediaOutlinedIcon /> , path:"/" },
    { id: 'Ideas', icon: <PublicIcon /> },
    { id: 'Contacts', icon: <SettingsEthernetIcon /> },
    { id: 'Agents', icon: <SettingsEthernetIcon /> },
    { id: 'Articles', icon: <ArticleIcon /> },

];

const menuList = [

  { id: 'Settings', icon: <SettingsEthernetIcon /> },
  { id: 'Subscription', icon: <SettingsEthernetIcon /> },
  
];

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    display: "flex", 
    fontSize: 16,
    color: " #A4A6B3",
  //   '&:hover, &:focus': {
  //     backgroundColor: "#9FA2B4" , 
  //     opacity: 0.08,
  //      color: " #A4A6B3",
  //  },
     
    ml: 3,
  } ,
  toolbar: {
    backgroundColor: "#363740",
    height: 60,
    [theme.breakpoints.up('sm')]: {
      height: 75,
    },
  },
  
}));  



const item = {
  py: '2px',
  px: 3,
  color: '#DDE2FF',
  '&:hover, &:focus': {
    //backgroundColor: "#9FA2B4" , 
    opacity: 0.08,
    //  color: " #A4A6B3",
  },
};

const itemCategory = {
  py: 1.5,
  px: 3,
};

const Nav = (props) =>{
  const { ...other } = props;
  const classes = useStyles();

return (
  <Drawer variant="permanent" {...other}>
    <List disablePadding>
      <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
      Dashboard Kit
      </ListItem>
     
          <Box  >
           
            {menu.map(({ id, icon, active ,path}) => (
              <ListItem disablePadding key={id} >
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  {/* <ListItemText>{childId}</ListItemText> */}
                    <ListItemText   className={classes.link}>
                    <Link  to="/"  
                className={classes.link }>
                {id}</Link>
                    </ListItemText>
                   
                  {/* <ListItemText >

                <Link  to="/"  
                className={classes.link }>
                {id}</Link>
         
              </ListItemText> */}
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
      <Box  >
           
            {menuList.map(({ id, icon, active ,path}) => (
              <ListItem disablePadding key={id}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  {/* <ListItemText>{childId}</ListItemText> */}
                   
                  <ListItemText sx={{ color: '#fff' }}>

                  <Link  to="/setting"  
                  className={classes.link}>
                  {id}</Link>
         
            </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

           
          </Box>
      
      
    </List>
  </Drawer>
);
}
export default Nav;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import { useSelector,useDispatch } from 'react-redux';
import {setLogout} from '../action/action';
export default function Header() {
  let history = useHistory();
  let userStats=useSelector((state)=> state.userStats)
  let dispatch=useDispatch();
  const logout = () => {
    dispatch(setLogout())
    sessionStorage.clear();
    history.push('/login');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Demo
          </Typography>
          {
            userStats ? <Button color="inherit">
              { userStats=='LOGIN' ? <Link onClick={logout} style={{'color':'white','textDecoration':'none'}}>Logout</Link> : 
              <GoogleLogout
                clientId="710587540007-1ar0upq19gfvt1o69kqkqj89jj47a97p.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
              >
              </GoogleLogout>
              }
            </Button> :
              <><Button color="inherit"><Link style={{ 'color': 'white', 'textDecoration': 'none' }} to={'/signup'} >Signup</Link></Button>
                <Button color="inherit"><Link style={{ 'color': 'white', 'textDecoration': 'none' }} to={'/login'} >Login</Link></Button></>
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}

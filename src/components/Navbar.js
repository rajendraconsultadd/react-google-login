import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Box } from '@mui/system';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItemButton } from '@mui/material';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
 const drawerWidth = 240;
 const [open, setOpen] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={'nav-menu active'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <h2 style={{"color":"white", "marginLeft":"20%"}}>Dashboard</h2>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      {/* <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
      <Drawer  variant="permanent" open={open} sx={{marginTop:'64px'}}>
        <List>
        <ListItemButton
              key={'home'}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Link href='/'>
              <div style={{display: "flex", minWidth: 3}}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
              <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={<a>Dashboard</a>} sx={{ opacity: open ? 1 : 0 }} />
              </div>
              </Link>
            </ListItemButton>
          {SidebarData.map((text, index) => (
            <ListItemButton
              key={text.title}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Link href={`/${text.path}`}>
              <div style={{display: "flex", minWidth: 3}}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={<a>{text.title.toUpperCase()} PAGE</a>} sx={{ opacity: open ? 1 : 0 }} />
              </div>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      
     </Box>
     <Box
        component="main"
        sx={{ flexGrow: 1, p: 3,marginLeft: '50px',overflowY:'auto',height: 'calc(100vh - 140px)',width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
    
     </Box> */}
    </>
  );
}

export default Navbar;

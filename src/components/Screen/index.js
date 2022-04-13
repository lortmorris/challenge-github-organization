import React, {
  useState,
} from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import { useNavigate, useLocation } from 'react-router-dom';

import Link from '../Link';
// Routes
import routes from './drawer.config';

import './styles.css';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: '#202126',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    background: '#202126',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function PersistentDrawerLeft({
  children,
  headerComponent,
  footerComponent,
  headerBackground = '#fcfcfc',
  showDrawer = true,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  /* eslint-disable react/no-unstable-nested-components */
  function HeaderComponent() {
    return (
      <div
        className="component-screen-header"
        style={{
          backgroundColor: headerBackground,
        }}
      >
        {headerComponent}
      </div>
    );
  }
  /* eslint-disable react/no-unstable-nested-components */
  function FooterComponent() {
    return (
      <div
        className="component-screen-footer"
        style={{
          backgroundColor: headerBackground,
        }}
      >
        {footerComponent}
      </div>
    );
  }

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#E1E0E6' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#302E37',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'space-between',
          }}
        >
          <List>
            {routes.map((route) => {
              const selected = route.path === pathname;
              return (
                <React.Fragment key={route.label}>
                  <ListItem
                    button
                    onClick={() => navigate(route.path, { replace: route.replace })}
                    selected={selected}
                    style={{
                      paddingBottom: 10,
                      paddingTop: 10,
                      paddingRight: 20,
                      paddingLeft: 20,
                      display: 'flex',
                      justifyContent: 'start',
                    }}
                  >
                    <Link to selected={selected}>{route.label}</Link>
                  </ListItem>
                  {route.divider && (<Divider />)}
                </React.Fragment>
              );
            })}
          </List>
        </List>
      </Drawer>
      <Main open={open}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 60,
          }}
          className="component-Screen"
        >
          {showDrawer && (<Drawer />)}
          {headerComponent && (
            <HeaderComponent />
          )}
          <div
            className="component-screen-children"
          >
            {children}
          </div>
          {footerComponent && (
            <FooterComponent />
          )}
        </div>
      </Main>
    </Box>
  );
}

export default PersistentDrawerLeft;

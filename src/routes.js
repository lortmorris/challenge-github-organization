import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import Container from '@mui/material/Container';

import AppProviderContext from './providers/AppProvider';

const ScreenHome = React.lazy(() => import('./screens/Home'));
const ScreenFavorites = React.lazy(() => import('./screens/Favorites'));
const ScreenOrganizationDetails = React.lazy(() => import('./screens/OrganizationDetails'));

function NoMatch() {
  return (
    <h1>404</h1>
  );
}

function Fallback() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

function ScreenContainer({ children }) {
  return (
    <div className="screenContainer">
      <div className="screenContainer-children">
        {children}
      </div>
    </div>
  );
}

function ScreenElement({ screenName = 'Home' }) {
  return (
    <React.Suspense fallback={<Fallback />}>
      <ScreenContainer>
        { screenName === 'Home' && <ScreenHome />}
        { screenName === 'Favorites' && <ScreenFavorites />}
        { screenName === 'OrganizationDetails' && <ScreenOrganizationDetails />}
      </ScreenContainer>
    </React.Suspense>
  );
}

function Routers() {
  return (
    <BrowserRouter>
      <AppProviderContext>
        <Routes>
          <Route path="/" element={<ScreenElement screenName="Home" />} />
          <Route path="/favorites" element={<ScreenElement screenName="Favorites" />} />
          <Route path="/organization/:login" element={<ScreenElement screenName="OrganizationDetails" />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AppProviderContext>
    </BrowserRouter>
  );
}

export default Routers;

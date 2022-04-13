import React, {
  useState,
} from 'react';

import { AppProvider } from './AppContext';

function AppProviderContext({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(item) {
    setFavorites([...favorites, item]);
  }

  function removeFavorite(item) {
    setFavorites(favorites.filter((i) => i.login !== item));
  }

  return (
    <AppProvider
      value={{
        favorites,
        addToFavorites,
        removeFavorite,
      }}
    >
      {children}
    </AppProvider>
  );
}

export default AppProviderContext;

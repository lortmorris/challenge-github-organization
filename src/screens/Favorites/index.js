import React, {
  useContext,
} from 'react';

import AppContext from '../../providers/AppContext';

import Header from '../../components/HeaderText';
import Screen from '../../components/Screen';
import Box from '../../components/Box';
import OrganizationItem from '../../components/OrganizationItem';

function Favorites() {
  const {
    favorites,
  } = useContext(AppContext);

  return (
    <Screen
      headerComponent={(
        <Header
          paths={[
            { label: 'Favorites', selected: false, link: '/favorites' },
          ]}
        />
      )}
    >
      <Box>
        {favorites.map((org) => (
          <OrganizationItem
            key={org.login}
            avatarUrl={org.avatarUrl}
            description={org.description}
            login={org.login}
          />
        ))}
      </Box>
    </Screen>
  );
}

export default Favorites;

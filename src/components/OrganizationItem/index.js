import React, {
  useContext,
  useCallback,
} from 'react';

import Text from '../Text';
import Row from '../Row';
import Box from '../Box';
import VStack from '../VStack';
import Link from '../Link';

import AppContext from '../../providers/AppContext';

import './styles.css';

function OrganizationItem({
  login,
  avatarUrl,
  description,
}) {
  const {
    addToFavorites,
    removeFavorite,
    favorites,
  } = useContext(AppContext);

  const isFavorite = useCallback(() => favorites.filter((i) => i.login === login).length > 0, [favorites, login]);

  return (
    <VStack paddingTop={5}>
      <Row padding={10}>
        <Row>
          <Link to={`/organization/${login}`}>
            <img className="organizationItemImg" src={avatarUrl} alt={login} width="128" height="128" />
            <Box>
              <Row paddingLeft={10}>
                <Text fontSize={18} fontWeight="bold" color="#ab2b2b">{login}</Text>
              </Row>
              <Row paddingLeft={10}>
                <Text fontSize={14}>{description}</Text>
              </Row>
            </Box>
          </Link>
        </Row>
      </Row>
      <button
        type="button"
        onClick={() => {
          if (isFavorite()) return removeFavorite(login);
          return addToFavorites({
            login,
            avatarUrl,
            description,
          });
        }}
      >
        {`${isFavorite() ? 'Remove from favorites' : 'Add to favorites'}`}
      </button>
    </VStack>
  );
}

export default OrganizationItem;

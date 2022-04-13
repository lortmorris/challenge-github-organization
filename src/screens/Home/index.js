import React, {
  useState,
  useEffect,
} from 'react';

import Text from '../../components/Text';
import Row from '../../components/Row';
import VStack from '../../components/VStack';
import Toast from '../../components/Toast';
import Box from '../../components/Box';
import Header from '../../components/HeaderText';
import Screen from '../../components/Screen';

import OrganizationItem from '../../components/OrganizationItem';

import {
  fetchOrganization,
} from '../../libs/github';

function Home() {
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState('');

  async function fetchOrganizationHandle() {
    try {
      const organizations = await fetchOrganization();
      setRows(organizations);
    } catch (err) {
      setError({
        message: 'Error loading organizations',
        severity: 'error',
      });
    }
  }

  function handleQuerySearch(evt) {
    evt.preventDefault();
  }

  useEffect(() => {
    if (query.length > 3 || query.length === 0) fetchOrganizationHandle();
  }, [query]);

  return (
    <Screen
      headerComponent={(
        <Header
          paths={[
            { label: 'Organizations', selected: true, link: '/' },
          ]}
        />
      )}
    >
      <Box>
        <VStack
          height="157px"
          bgColor="#fff"
        >
          <Row
            height={90}
            justifyContent="flex-start"
            columnGap="1em"
            alignItems="center"

          >
            <input
              placeholder="Search organization by name"
              width="360px"
              value={query}
              onChange={(evt) => {
                setQuery(evt.target.value);
                handleQuerySearch(evt);
              }}
            />
          </Row>
        </VStack>
        <ul>
          {rows.length > 0 && (
            rows.map((org) => (
              <OrganizationItem
                key={org.login}
                avatarUrl={org.avatar_url}
                description={org.description}
                login={org.login}
              />
            ))
          )}
        </ul>
        {rows.length === 0 && (
          <Box
            height={40}
            justifyContent="center"
            backgroundColor="#F4F4F6"
          >
            <Text
              marginLeft={10}
              fontWeight={300}
              fontSize="16px"
              color="#707070"
            >
              There is not organizations yet
            </Text>
          </Box>
        )}
        {error && (
          <Toast
            severity={error.severity}
            open={error}
            message={error.message}
            handleClose={() => setError()}
          >
            {error}
          </Toast>
        )}
      </Box>
    </Screen>
  );
}

export default Home;

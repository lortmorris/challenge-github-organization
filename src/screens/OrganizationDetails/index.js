import React, {
  useEffect,
  useState,
} from 'react';

import {
  useParams,
} from 'react-router-dom';

import moment from 'moment';

import Text from '../../components/Text';
import Row from '../../components/Row';
import Toast from '../../components/Toast';
import Box from '../../components/Box';
import Header from '../../components/HeaderText';
import Screen from '../../components/Screen';
import Divider from '../../components/Divider';

import ItemDetail from './components/ItemDetail';

import {
  fetchOrganizationDetails,
} from '../../libs/github';

function OrganizationDetails() {
  const { login } = useParams();
  const [error, setError] = useState();
  const [orgData, setOrgData] = useState([]);

  async function fetchOrganizationDetailsHandle() {
    try {
      const organizationDetails = await fetchOrganizationDetails(login);
      console.info('organizations details: ', organizationDetails);
      setOrgData(organizationDetails);
    } catch (err) {
      setError({
        message: 'Error loading organizations details',
        severity: 'error',
      });
    }
  }

  useEffect(() => {
    fetchOrganizationDetailsHandle();
  }, [login]);

  return (
    <Screen
      headerComponent={(
        <Header
          paths={[
            { label: 'Organizations', selected: false, link: '/' },
            { label: `Organization Details: ${login}`, selected: true, link: `/organization/${login}` },
          ]}
        />
      )}
    >
      {orgData && (
        <Box>
          <Row>
            <img src={orgData.avatar_url} alt={login} />
          </Row>
          <Divider />
          <ItemDetail
            data={[
              {
                label: 'Login',
                value: orgData.login,
              },
              {
                label: 'Name',
                value: orgData.name,
              },
              {
                label: 'Description',
                value: orgData.description,
              },
              {
                label: 'Company',
                value: orgData.company || '',
              },
              {
                label: 'Location',
                value: orgData.location || '',
              },
              {
                label: 'Twitter Username',
                value: orgData.twitter_username || '',
              },
              {
                label: 'Followers',
                value: orgData.followers || 0,
              },
              {
                label: 'Following',
                value: orgData.following || 0,
              },
              {
                label: 'Created',
                value: moment(new Date(orgData.created_at)).format('YYYY/mm/dd HH:mm:ss'),
              },
            ]}
          />
        </Box>
      )}
      {!orgData && (
        <Box>
          <Row>
            <Text>Organization Details not found</Text>
          </Row>
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
    </Screen>
  );
}

export default OrganizationDetails;

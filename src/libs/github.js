import api from './api';

export async function fetchOrganization() {
  try {
    const response = await api({
      url: '/organizations',
      method: 'get',
    });
    return response.data;
  } catch (err) {
    console.error('Error fetchOrganization: ', err);
    throw new Error('Error fetchOrganization');
  }
}

export async function fetchOrganizationDetails(login) {
  try {
    const response = await api({
      url: `/orgs/${login}`,
      method: 'get',
    });
    return response.data;
  } catch (err) {
    console.error('Error fetchOrganizationDetails: ', err);
    throw new Error(`Error fetchOrganizationDetails: ${login}`);
  }
}

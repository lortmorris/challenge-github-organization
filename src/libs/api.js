import axios from 'axios';

const config = {
  ENDPOINT_URL: 'https://api.github.com',
};

export default async function api(params) {
  const localParams = { ...params.query };
  const finalHeaders = {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };

  if (params.headers) {
    Object.keys(params.headers).forEach((k) => {
      (finalHeaders[k] = params.headers[k]);
      return true;
    });
  }

  const optionsAxios = {
    method: params.method.toLowerCase(),
    url: params.url,
    params: localParams,
    baseURL: config.ENDPOINT_URL,
    timeout: 1000,
    headers: { ...finalHeaders },
  };
  if (params.data && Object.keys(params.data).length > 0) optionsAxios.data = params.data;

  const instance = axios.create(optionsAxios);

  try {
    const response = await instance.request(optionsAxios);
    return response;
  } catch (err) {
    console.info('Error lib API: network error: ', err);
    throw new Error(err.response);
  }
}

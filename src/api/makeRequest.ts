import { url } from './baseUrl';
import { getTokenStatus } from './user/userCalls';

type RequestMethod = 'GET' | 'POST';

interface RequestOptions {
  method: RequestMethod;
  body?: string;
  token?: string;
}

const makeRequest = async <T>(
  endpoint: string,
  options: RequestOptions
): Promise<T> => {
  const { method, body, token } = options;

  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  if (token) {
    const isValid = await getTokenStatus(token);
    if (isValid) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  try {
    const response = await fetch(`${url}/${endpoint}`, {
      method,
      headers,
      body,
    });
    await fetchDelay(1000);

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const fetchDelay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default makeRequest;

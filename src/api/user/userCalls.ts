import { url } from '../baseUrl';
import { UserModel } from './models/UserModel';

export const registerUser = async (request: UserModel) => {
  try {
    const requestBody = JSON.stringify(request);
    console.log('request', requestBody);
    const response = await fetch(`${url}/user/signup`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: requestBody,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginUser = async (request: UserModel) => {
  try {
    const requestBody = JSON.stringify(request);
    const response = await fetch(`${url}/user/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: requestBody,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderHistory = async (token: string) => {
  try {
    const response = await fetch(`${url}/user/history`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTokenStatus = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch(`${url}/user/status`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    });

    const data = await response.json();
    if (data.error) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
};

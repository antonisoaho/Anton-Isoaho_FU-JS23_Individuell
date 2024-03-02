import { url } from '../baseUrl';
import { UserModel } from './models/UserModel';

export const registerUser = async (request: UserModel) => {
  try {
    const requestBody = JSON.stringify(request);
    console.log('request', request);
    const response = await fetch(`${url}/user/signup`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: requestBody,
    });

    const data = await response.json();
    console.log('data', data);
  } catch (error) {
    console.log('error', error);
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
    console.log('data', data);
  } catch (error) {
    console.log('error', error);
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
    console.log('data', data);
  } catch (error) {
    console.log('error', error);
  }
};

export const getTokenStatus = async (token: string) => {
  try {
    const response = await fetch(`${url}/user/status`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    });

    const data = await response.json();
    console.log('data', data);
  } catch (error) {
    console.log('error', error);
  }
};

import makeRequest from '../makeRequest';
import { url } from '../baseUrl';
import { LoginResponse } from './models/LoginResponse';
import { StatusResponse } from './models/StatusResponse';
import { UserHistoryResponse } from './models/UserHistoryResponse';
import { UserModel } from './models/UserModel';

export const registerUser = async (request: UserModel): Promise<boolean> => {
  try {
    const data = await makeRequest<StatusResponse>('user/signup', {
      method: 'POST',
      body: JSON.stringify(request),
    });

    return data.success;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginUser = async (request: UserModel): Promise<LoginResponse> => {
  try {
    const data = await makeRequest<LoginResponse>('user/login', {
      method: 'POST',
      body: JSON.stringify(request),
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderHistory = async (
  token: string
): Promise<UserHistoryResponse> => {
  try {
    const data = await makeRequest<UserHistoryResponse>('user/history', {
      method: 'GET',
      token,
    });
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

    const data: StatusResponse = await response.json();
    return data.success;
  } catch (error) {
    return Promise.reject(error);
  }
};

import { url } from '../baseUrl';
import { BeanModel } from './models/BeanModel';
import { BeanOrderRequest } from './models/BeanOrderRequest';
import { BeanOrderResponse } from './models/BeanOrderResponse';

export const getMenuList = async (): Promise<Array<BeanModel>> => {
  try {
    const response = await fetch(`${url}/beans`, {
      method: 'get',
    });
    const data = await response.json();
    return data.menu;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postNewOrder = async (
  request: BeanOrderRequest,
  token?: string
): Promise<BeanOrderResponse> => {
  const requestBody = JSON.stringify(request);
  try {
    let response;
    token
      ? (response = await fetch(`${url}/beans/order`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token && `Bearer ${token}`}`,
          },
          method: 'POST',
          body: requestBody,
        }))
      : (response = await fetch(`${url}/beans/order`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: requestBody,
        }));

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('error', error);
    return Promise.reject(error);
  }
};

export const getOrderEta = async (order: string, token: string) => {
  try {
    const response = await fetch(`${url}/beans/order/status/${order}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderEtaNoToken = async (order: string) => {
  try {
    const response = await fetch(`${url}/beans/order/status/${order}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'get',
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

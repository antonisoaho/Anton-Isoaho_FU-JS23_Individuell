import makeRequest from '../makeRequest';
import { BeanModel } from './models/BeanModel';
import { BeanOrderRequest } from './models/BeanOrderRequest';
import { BeanOrderResponse } from './models/BeanOrderResponse';
import { OrderEtaResponse } from './models/OrderEtaResponse';

export const getMenuList = async (): Promise<Array<BeanModel>> => {
  try {
    const data = await makeRequest<{ menu: [BeanModel] }>('beans', {
      method: 'GET',
    });
    return data.menu;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postNewOrder = async (
  request: BeanOrderRequest,
  token?: string
): Promise<BeanOrderResponse> => {
  try {
    const data = await makeRequest<BeanOrderResponse>('beans/order', {
      method: 'POST',
      body: JSON.stringify(request),
      token,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderEta = async (
  order: string,
  token?: string
): Promise<OrderEtaResponse> => {
  try {
    const data = await makeRequest<OrderEtaResponse>(
      `beans/order/status/${order}`,
      {
        method: 'GET',
        token,
      }
    );

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

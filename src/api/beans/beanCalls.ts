import { url } from '../baseUrl';
import { BeanModel } from './models/BeanModel';

export const getMenuList = async (): Promise<Array<BeanModel>> => {
  try {
    const response = await fetch(url + '/beans/');
    const data = await response.json();
    return data.menu;
  } catch (error) {
    return Promise.reject(error);
  }
};

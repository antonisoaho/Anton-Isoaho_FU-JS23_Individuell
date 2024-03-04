import { BeanOrderModel } from '../../../store/BeanStore';

export interface BeanOrderRequest {
  details: {
    order: Array<BeanOrderModel>;
  };
}

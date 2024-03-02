import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BeanOrderModel {
  name: string;
  price: number;
}

interface BeanStore {
  order: BeanOrderModel[];
  totalPrice: number;
  totalBeans: number;
  addToCart: (bean: BeanOrderModel) => void;
  removeFromCart: (name: string) => void;
}

export const useBeanStore = create<BeanStore>()(
  persist(
    (set) => ({
      order: [],
      totalPrice: 0,
      totalBeans: 0,
      addToCart: (bean) =>
        set((state) => ({
          ...state,
          totalPrice: state.totalPrice + bean.price,
          totalBeans: state.totalBeans + 1,
          order: [...state.order, bean],
        })),
      removeFromCart: (name) =>
        set((state) => {
          const itemToRemove = state.order.find((item) => item.name === name);
          if (!itemToRemove) return state;
          return {
            ...state,
            totalPrice: state.totalPrice - itemToRemove.price,
            totalBeans: state.totalBeans - 1,
            order: state.order.filter((item) => item.name !== name),
          };
        }),
    }),
    {
      name: 'bean-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

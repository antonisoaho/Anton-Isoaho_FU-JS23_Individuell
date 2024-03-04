import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BeanCartModel {
  name: string;
  price: number;
  quantity: number;
}

export interface BeanOrderModel {
  name: string;
  price: number;
}

interface BeanStore {
  order: Record<string, BeanCartModel>;
  totalPrice: number;
  totalBeans: number;
  lastOrder: string;
  addToCart: (bean: BeanOrderModel) => void;
  removeFromCart: (name: string) => void;
  formatOrderForSubmission: (order: Record<string, BeanCartModel>) => {
    details: { order: BeanOrderModel[] };
  };
  setLastOrder: (lastOrder: string) => void;
  clearStore: () => void;
}

export const useBeanStore = create<BeanStore>()(
  persist(
    (set) => ({
      order: {},
      totalPrice: 0,
      totalBeans: 0,
      lastOrder: '',
      addToCart: (bean) =>
        set((state) => {
          const updatedOrder = { ...state.order };
          const updatedPrice = state.totalPrice + bean.price;
          const updatedBeans = state.totalBeans + 1;

          if (updatedOrder[bean.name]) {
            updatedOrder[bean.name].quantity++;
          } else {
            updatedOrder[bean.name] = { ...bean, quantity: 1 };
          }

          return {
            ...state,
            totalPrice: updatedPrice,
            totalBeans: updatedBeans,
            order: updatedOrder,
          };
        }),
      removeFromCart: (name) =>
        set((state) => {
          const updatedOrder = { ...state.order };
          const itemToRemove = updatedOrder[name];

          if (itemToRemove) {
            const updatedPrice = state.totalPrice - itemToRemove.price;
            const updatedBeans = state.totalBeans - 1;

            if (itemToRemove.quantity > 1) {
              itemToRemove.quantity--;
            } else {
              delete updatedOrder[name];
            }

            return {
              ...state,
              totalPrice: updatedPrice,
              totalBeans: updatedBeans,
              order: updatedOrder,
            };
          }

          return state;
        }),
      setLastOrder: (lastOrder) => set({ lastOrder }),
      formatOrderForSubmission: (order) => ({
        details: {
          order: Object.values(order).flatMap((bean) =>
            Array.from({ length: bean.quantity }, () => ({
              name: bean.name,
              price: bean.price,
            }))
          ),
        },
      }),
      clearStore: () =>
        set((state) => ({
          ...state,
          order: {},
          totalBeans: 0,
          totalPrice: 0,
        })),
    }),
    {
      name: 'bean-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

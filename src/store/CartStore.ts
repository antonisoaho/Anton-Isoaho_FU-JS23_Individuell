import { create } from 'zustand';

interface CartStore {
  cartOpen: boolean;
  setCartOpen: (newState: boolean) => void;
}

export const useCartStore = create<CartStore>()((set) => ({
  cartOpen: false,
  setCartOpen: (newState) => set({ cartOpen: newState }),
}));

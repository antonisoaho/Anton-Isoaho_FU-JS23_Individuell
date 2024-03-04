import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserProps {
  username: string;
  email: string;
  token: string | null;
}

interface UserStore {
  user: UserProps;
  setUser: (user: UserProps) => void;
  validToken: boolean;
  setValidToken: (validToken: boolean) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        username: '',
        email: '',
        token: null,
      },
      validToken: false,
      setUser: (user) =>
        set((state) => ({
          ...state,
          user: {
            ...state.user,
            ...user,
          },
        })),
      setValidToken: (validToken) => set({ validToken }),
      clearUser: () =>
        set(() => ({
          user: {
            username: '',
            email: '',
            token: null,
          },
          validToken: false,
        })),
    }),
    {
      name: 'user-storage-token',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserStore;

import { create } from "zustand";
import { apiGetUserInformation, apiLogin } from "./service";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
  is_superadmin: boolean;
  count_login: number;
}

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface InitialState {
  user: IUser | null;
  is_logged: boolean;
  is_loading: boolean;
  access_token: string | null;
  login: (
    payload: ILoginRequest
  ) => Promise<{ success: boolean; message: string }>;
  getUserInformation: () => Promise<{ success: boolean; message: string }>;
}

export const useUserStore = create<
  InitialState,
  [["zustand/persist", { access_token: string | null; is_logged: boolean }]]
>(
  persist(
    (set) => ({
      user: null,
      is_logged: false,
      is_loading: false,
      access_token: null,
      login: async (payload: ILoginRequest) => {
        console.log(payload, ":123");
        try {
          set(() => ({ is_loading: true }));
          const {
            data: { access_token },
            status,
            message,
          } = await apiLogin<{
            access_token: string;
          }>(payload);
          if (status === 200) {
            set(() => ({ access_token, is_logged: true, is_loading: false }));
          }
          return { success: true, message };
        } catch (err) {
          console.log(err, "Err login");
          set(() => ({ is_loading: false }));
          return { success: false, message: "Có lỗi xảy ra" };
        }
      },
      getUserInformation: async () => {
        try {
          const {
            data: { user },
            status,
            message,
          } = await apiGetUserInformation<{ user: IUser }>();
          if (status === 200) {
            set(() => ({ user }));
          }
          return { success: true, message };
        } catch (err) {
          console.log(err, "Err get user information");
          return { success: false, message: "Có lỗi xảy ra" };
        }
      },
    }),
    {
      name: "auth_storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        access_token: state.access_token,
        is_logged: state.is_logged,
      }),
    }
  )
);

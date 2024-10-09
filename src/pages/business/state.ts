import { create } from "zustand";
import { IEnterprise, IEnterpriseRequest } from "./model";
import {
  apiCreateEnterprise,
  apiDelteEnterprise,
  apiGetDetailEnterprise,
  apiGetListEnterprise,
  apiUpdateEnterprise,
  IEnterpriseParams,
} from "./service";

export interface InitialState {
  is_loading: boolean;

  createEnterprise: (
    payload: IEnterpriseRequest
  ) => Promise<{ success: boolean; message: string }>;

  updateEnterprise: (
    id: string,
    payload: IEnterpriseRequest
  ) => Promise<{ success: boolean; message: string }>;

  getEnterpriseList: () => Promise<{
    success: boolean;
    message: string;
    data?: IEnterprise[];
  }>;

  getDetailEnterprise: (params?: IEnterpriseParams) => Promise<{
    success: boolean;
    message: string;
    data?: IEnterprise;
  }>;

  deleteEnterprise: (id: string) => Promise<{
    success: boolean;
    message: string;
  }>;
}

export const useEnterpriseStore = create<InitialState>((set) => ({
  is_loading: false,

  createEnterprise: async (payload: IEnterpriseRequest) => {
    try {
      set(() => ({ is_loading: true }));
      const { status, message } = await apiCreateEnterprise<{}>(payload);

      if (status === 200) {
        set(() => ({ is_loading: false }));
      }

      return { status, success: true, message };
    } catch (err) {
      console.log("🚀 ~ createEnterprise: ~ err:", err);
      set(() => ({ is_loading: false }));
      return { success: false, message: "Có lỗi xảy ra" };
    }
  },

  getEnterpriseList: async (params?: IEnterpriseParams) => {
    try {
      const {
        data: { enterprise },
        status,
        message,
      } = await apiGetListEnterprise<{ enterprise: IEnterprise[] }>(params);

      return { status, success: true, message, data: enterprise };
    } catch (err) {
      console.log("🚀 ~ getEnterpriseList: ~ err:", err);
      return { success: false, message: "Có lỗi xảy ra" };
    }
  },
  getDetailEnterprise: async (params?: IEnterpriseParams) => {
    try {
      const {
        data: { enterprise },
        status,
        message,
      } = await apiGetDetailEnterprise<{ enterprise: IEnterprise }>(params);

      return { status, success: true, message, data: enterprise };
    } catch (err) {
      console.log("🚀 ~ getDetailEnterprise: ~ err:", err);
      return { success: false, message: "Có lỗi xảy ra" };
    }
  },

  updateEnterprise: async (id: string, payload: IEnterpriseRequest) => {
    try {
      set(() => ({ is_loading: true }));
      const { status, message } = await apiUpdateEnterprise<{}>(id, payload);

      if (status === 200) {
        set(() => ({ is_loading: false }));
      }

      return { status, success: true, message };
    } catch (err) {
      console.log("🚀 ~ updateEnterprise: ~ err:", err);
      set(() => ({ is_loading: false }));
      return { success: false, message: "Có lỗi xảy ra" };
    }
  },

  deleteEnterprise: async (id: string) => {
    try {
      set(() => ({ is_loading: true }));
      const { status, message } = await apiDelteEnterprise<{}>(id);

      if (status === 200) {
        set(() => ({ is_loading: false }));
      }

      return { status, success: true, message };
    } catch (err) {
      console.log("🚀 ~ deleteEnterprise: ~ err:", err);
      set(() => ({ is_loading: false }));
      return { success: false, message: "Có lỗi xảy ra" };
    }
  },
}));

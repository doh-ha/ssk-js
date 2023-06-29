import { create } from "zustand";

export const useSignUpFormStore = create((set) => ({
  datas: [],
  addDatas: (data) => set((state) => ({ datas: [...state.datas, data] })),
  clearDatas: () => set({ datas: [] }),
}));
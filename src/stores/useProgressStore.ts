import { create } from "zustand";

type ProgressStore = {
  progress: number;
  updateProgress: (newProgress: number) => void;
  getProgress: () => number;
};

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progress: 100,
  updateProgress: (newProgress) => set({ progress: newProgress }),
  getProgress: () => get().progress,
}));

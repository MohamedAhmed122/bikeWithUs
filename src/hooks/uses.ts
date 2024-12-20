import { create } from 'zustand';
import { StoreSlice } from './useStore';

type Nut = { id: number; name: string };

export interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  nuts: Nut;
  updateNuts: (nut: Nut) => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  nuts: {
    id: 0,
    name: 'Mohamed',
  },
  updateNuts: (nut: Nut) => set({ nuts: nut }),
}));

export const createBearSlice: StoreSlice<BearState> = (set) => ({
  bears: 0,
  // increasePopulation: () => set((state) => set({ bears: state.bears + 1 })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

  removeAllBears: () => set({ bears: 0 }),
  nuts: {
    id: 0,
    name: 'Mohamed',
  },
  updateNuts: (nut: Nut) => set({ nuts: nut }),
});

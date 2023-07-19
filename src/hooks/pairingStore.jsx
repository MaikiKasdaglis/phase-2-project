import { create } from "zustand";

const pairingStore = create((set) => ({
  currentPairingIndex: 1,
  setCurrentPairingIndex: (pairingId) => {
    set((state) => ({ currentPairingIndex: pairingId }));
  },
}));

export default pairingStore;

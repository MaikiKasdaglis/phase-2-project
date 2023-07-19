import { create } from "zustand";

const monthStore = create((set) => ({
  currentMonthIndex: 1,
  setCurrentMonthIndex: (monthId) => {
    set((state) => ({ currentMonthIndex: monthId }));
  },
}));

export default monthStore;

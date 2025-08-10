import { create } from "zustand";

interface StoreState {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    openMenu: () => void;
}

const useStore = create<StoreState>((set, get) => ({
    isOpen: false,
    toggleMenu: () => {
        set((state) => ({ isOpen: !state.isOpen }));
        console.log('Menu toggled, new state:', get().isOpen);
    },
    closeMenu: () => {
        set({ isOpen: false });
        console.log('Menu closed');
    },
    openMenu: () => {
        set({ isOpen: true });
        console.log('Menu opened');
    },
}));

export default useStore;
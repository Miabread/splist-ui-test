import { create } from 'zustand';

interface State {
    tabs: string[];
    closeTab(index: number): void;
    duplicateTab(index: number): void;
    shiftTabUp(index: number): void;
    shiftTabDown(index: number): void;
    resetTabs(): void;
}

export const useStore = create<State>()((set) => ({
    tabs: [1, 2, 3, 4, 5].map((i) => `/${i}`),
    resetTabs: () => {
        set({
            tabs: [1, 2, 3, 4, 5].map((i) => `/${i}`),
        });
    },
    closeTab: (index) => {
        set((state) => ({
            tabs: state.tabs.toSpliced(index, 1),
        }));
    },
    duplicateTab: (index) => {
        set((state) => ({
            tabs: state.tabs.toSpliced(index, 0, state.tabs[index]),
        }));
    },
    shiftTabUp: (index) => {
        set((state) => {
            if (index === 0) return {};
            const tabs = state.tabs.slice();
            [tabs[index], tabs[index - 1]] = [tabs[index - 1], tabs[index]];
            return { tabs };
        });
    },
    shiftTabDown: (index) => {
        set((state) => {
            if (index === state.tabs.length - 1) return {};
            const tabs = state.tabs.slice();
            [tabs[index], tabs[index + 1]] = [tabs[index + 1], tabs[index]];
            return { tabs };
        });
    },
}));

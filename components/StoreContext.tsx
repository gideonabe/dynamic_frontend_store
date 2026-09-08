"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type StoreContextType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <StoreContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }

  return context;
}

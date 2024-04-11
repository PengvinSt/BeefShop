'use client'
import { ReactNode, createContext, useContext } from "react";
import AppStore from "../store/app";

interface AppContextType {
    store: AppStore;
}
  
const AppContext = createContext<AppContextType| null>(null);

const store = new AppStore();

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContextType;
};

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <AppContext.Provider value={{store}}>{children}</AppContext.Provider>
    );
  };

export default AppContext
'use client'
import { ReactNode, createContext, useContext } from "react";
import AppStore from "../store/app";
import AppApi from "../api/app";

interface AppContextType {
    store: AppStore;
    api: AppApi;
}
  
const AppContext = createContext<AppContextType| null>(null);

const store = new AppStore();

const api = new AppApi(store);

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContextType;
};

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <AppContext.Provider value={{store, api}}>{children}</AppContext.Provider>
    );
  };

export default AppContext
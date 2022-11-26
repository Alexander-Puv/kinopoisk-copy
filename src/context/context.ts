import { createContext } from "react";

interface AppContextElements {
  isAuth: boolean,
  setIsAuth: (isAuth: boolean) => void,
  isSubscribed: boolean,
  setIsSubscribed: (isAuth: boolean) => void,
}

export const AppContext = createContext<AppContextElements | null>(null);
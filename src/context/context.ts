import { createContext } from "react";

type setBool = (isAuth: boolean) => void

interface AppContextElements {
  isAuth: boolean,
  setIsAuth: setBool,
  isSubscribed: boolean,
  setIsSubscribed: setBool,
  isPromoBlock: boolean,
  setIsPromoBlock: setBool,
}

export const AppContext = createContext<AppContextElements | null>(null);
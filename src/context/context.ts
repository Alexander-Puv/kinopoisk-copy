import { createContext } from "react";

type setBool = (isTrue: boolean) => void

interface AppContextElements {
  isAuth: boolean,
  setIsAuth: setBool,
  isSubscribed: boolean,
  setIsSubscribed: setBool,
  isPromoBlock: boolean,
  setIsPromoBlock: setBool,
  itemSize: number,
}

export const AppContext = createContext<AppContextElements | null>(null);
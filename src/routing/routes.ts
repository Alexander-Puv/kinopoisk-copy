import { BuyRoute, ChannelsRoute, HistoryRoute, MainRoute, PersonalRoute, SportRoute } from './consts';
import { BuyPage, ChannelsPage, HistoryPage, MainPage, PersonalPage, SportPage } from '../pages';

interface IRoute {
  path: string,
  element: () => JSX.Element
}

export const publicRoutes: IRoute[] = [
  {
    path: MainRoute,
    element: MainPage
  },
  {
    path: BuyRoute,
    element: BuyPage
  },
  {
    path: PersonalRoute,
    element: PersonalPage
  },
  {
    path: HistoryRoute,
    element: HistoryPage
  },
  {
    path: ChannelsRoute,
    element: ChannelsPage
  },
  {
    path: SportRoute,
    element: SportPage
  },
]

/* export const privateRoutes = [
  {
    path: ,
  }
] */
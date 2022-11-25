import { Route, Routes } from 'react-router-dom';
import { BuyPage, ChannelsPage, HistoryPage, MainPage, PersonalPage, SportPage } from '../pages';
import { BuyRoute, ChannelsRoute, HistoryRoute, MainRoute, PersonalRoute, SportRoute } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={MainRoute} element={<MainPage />} />
      <Route path={BuyRoute} element={<BuyPage />} />
      <Route path={PersonalRoute} element={<PersonalPage />} />
      <Route path={ChannelsRoute} element={<ChannelsPage />} />
      <Route path={SportRoute} element={<SportPage />} />
      <Route path={HistoryRoute} element={<HistoryPage />} />
    </Routes>
  )
}

export default AppRouter
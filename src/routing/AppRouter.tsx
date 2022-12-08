import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({path, element: Component}) => (
        <Route path={path} element={<Component/>} key={path} />
      ))}
      {/* <Route path={MainRoute} element={<MainPage />} />
      <Route path={BuyRoute} element={<BuyPage />} />
      <Route path={PersonalRoute} element={<PersonalPage />} />
      <Route path={ChannelsRoute} element={<ChannelsPage />} />
      <Route path={SportRoute} element={<SportPage />} />
      <Route path={HistoryRoute} element={<HistoryPage />} /> */}
    </Routes>
  )
}

export default AppRouter
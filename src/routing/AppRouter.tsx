import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({path, element: Component}) => (
        <Route path={path} element={<Component/>} key={path} />
      ))}
    </Routes>
  )
}

export default AppRouter
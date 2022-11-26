import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { AppContext } from './context/context';
import AppRouter from './routing/AppRouter';
import './styles/App.scss';
import './styles/Pages.scss';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <AppContext.Provider value={{
      isAuth, setIsAuth,
      isSubscribed, setIsSubscribed
    }}>
      <BrowserRouter>
        <div className="App">
          <Header />
            <AppRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App

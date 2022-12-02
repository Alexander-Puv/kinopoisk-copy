import { useEffect, useState } from 'react';
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
  const [isPromoBlock, setIsPromoBlock] = useState(false);
  const [itemSize, setItemSize] = useState(3);

  const ChangeItemSize = () => {
    if (window.innerWidth <= 1240) {
      setItemSize(3)
    } else if (window.innerWidth > 1240 && window.innerWidth <= 1640) {
      setItemSize(4)
    } else if (window.innerWidth > 1640) {
      setItemSize(5)
    }
  }

  useEffect(() => {
    ChangeItemSize()

    addEventListener('resize', () => {
      ChangeItemSize()
    })
  }, [])

  return (
    <AppContext.Provider value={{
      isAuth, setIsAuth,
      isSubscribed, setIsSubscribed,
      isPromoBlock, setIsPromoBlock,
      itemSize,
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

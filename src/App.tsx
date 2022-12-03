import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet
          title='Кинопоиск HD'
          meta={[
            {'property': 'description', 'content': 'Всегда есть что посмотреть. Новые серии в день выхода и тысячи фильмов на вечер. Без рекламы, в хорошем качестве, с любимой озвучкой или в оригинале. Смотрите кино дома и в дороге, в телевизоре и на своём мобильном устройстве.'},
            {'property': 'og:title', 'content': 'Кинопоиск HD'},
            {'property': 'og:type', 'content': 'website'},
            {'property': 'og:url', 'content': 'https://hd.kinopoisk.ru/'},
            {'property': 'og:locale', 'content': 'ru_RU'},
            {'property': 'og:image', 'content': 'https://avatars.mds.yandex.net/get-ott/224348/2a0000017d0f0726bf3009914dac2b53a8e3/orig'},
            {'property': 'og:description', 'content': 'Всегда есть что посмотреть. Новые серии в день выхода и тысячи фильмов на вечер. Без рекламы, в хорошем качестве, с любимой озвучкой или в оригинале. Смотрите кино дома и в дороге, в телевизоре и на своём мобильном устройстве.'},
          ]}
        />
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

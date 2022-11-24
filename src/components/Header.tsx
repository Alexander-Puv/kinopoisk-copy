import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BuyRoute, ChannelsRoute, MainRoute, PersonalRoute, SportRoute } from '../routing/routes';
import cl from '../styles/componentStyles/Header.module.scss';

const Header = () => {
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  const changeActiveRoute = (path: string) => {
    setActiveRoute(path)
  }

  const [userPosition, setUserPosition] = useState(scrollY);
  const [oldUserPosition, setOldUserPosition] = useState(userPosition);
  window.addEventListener('scroll', () => setUserPosition(scrollY))

  useMemo(() => {
    setOldUserPosition(userPosition)
  }, [userPosition])
  const isHeaderVisible = useMemo(() => {
    return (oldUserPosition - userPosition > 0);
  }, [userPosition])
  const isHeaderOnTop = useMemo(() => {
    if (location.pathname === '/') {
      return userPosition === 0 ? cl.mainTop : ''
    }
    return userPosition === 0 ? cl.top : ''
  }, [location.pathname, userPosition])
  
  return (
    <header className={`${cl.header} ${isHeaderVisible ? cl.visible : ''} ${isHeaderOnTop}`}>
      <div className={cl.navigation_menu}>
        <nav>
          <div>
            <a href="https://www.kinopoisk.ru/" target='_blank'>
              <img src="https://avatars.mds.yandex.net/get-bunker/60661/19bb5cee89e9e8731400087ca81ef67f761a19b0/svg" alt="Главная" />
              <span>Главная</span>
            </a>
          </div>
          <div className={cl.active}>
            <a href="https://www.kinopoisk.ru" target='_blank'>
              <img src="https://avatars.mds.yandex.net/get-bunker/994123/21ebbf10ea4896695aeaf41d0cda6ba14309adb1/svg" alt="Главная" />
              <span>Онлайн-кинотеатр</span>
            </a>
          </div>
          <div>
            <a href="https://www.kinopoisk.ru/lists/categories/movies/1/" target='_blank'>
              <img src="https://avatars.mds.yandex.net/get-bunker/61205/4ca247c9044155261d3d6fd60008c3e7a9ed5bc5/svg" alt="Главная" />
              <span>Фильмы</span>
            </a>
          </div>
          <div>
            <a href="https://www.kinopoisk.ru/lists/categories/movies/3/" target='_blank'>
              <img src="https://avatars.mds.yandex.net/get-bunker/61205/f6cc158f1e16640d3fbaffbf9740a56d8be70c77/svg" alt="Главная" />
              <span>Сериалы</span>
            </a>
          </div>
          <div>
            <a href="https://www.kinopoisk.ru/afisha/new/city/1/" target='_blank'>
              <img src="https://avatars.mds.yandex.net/get-bunker/135516/99bddd81b738dd13bfbfc582668f824c38348de3/svg" alt="Главная" />
              <span>Билеты в кино</span>
            </a>
          </div>
          <div>
            <a href="https://www.kinopoisk.ru/media/" target='_blank'>
              <img src="https://avatars.mds.yandex.net/get-bunker/60661/1eced481dc70ee4316900cf5de0ed1a9c7dd666e/svg" alt="Главная" />
              <span>Медиа</span>
            </a>
          </div>
        </nav>
        <button className={cl.menu}>
          <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5h20v1.8H2V5Zm0 6h20v1.8H2V11Zm20 6H2v1.8h20V17Z" fill="#fff"></path>
          </svg>
        </button>
        <a href="https://www.kinopoisk.ru" target='_blank' className={cl.kinopoisk_link}>
            <svg width="16.4rem" height="3.6rem" viewBox="0 0 164 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M58.859 18c0-5.889 2.954-10.6 8.281-10.6 5.328 0 8.281 4.711 8.281 10.6 0 5.89-2.954 10.6-8.28 10.6-5.328 0-8.282-4.71-8.282-10.6Zm8.281 7.66c2.072 0 2.954-3.534 2.954-7.652 0-4.12-.889-7.652-2.954-7.652-2.065 0-2.954 3.533-2.954 7.652-.007 4.118.882 7.652 2.954 7.652ZM3.843 7.7v5.596h.294L7.98 7.7h5.32l-7.098 6.474.294.293L19.51 7.693v4.711L7.973 16.523v.292l11.537-1.028v4.419L7.973 19.178v.293l11.537 4.118v4.712L6.496 21.526l-.294.293 7.098 6.474H7.98l-3.843-5.596h-.294v5.596H0V7.686h3.843V7.7Zm19.23 0H28.1l-.294 12.363h.294L34.015 7.7h4.438v20.608h-5.026l.294-12.364h-.294L27.51 28.309h-4.438V7.7Zm23.955 0h-5.026v20.608h5.026v-9.13h4.137v9.13h5.026V7.7h-5.026v7.952h-4.137V7.7Zm45.25 0h-14.19v20.608h5.027V11.233h4.137v17.075h5.026V7.7Zm2.66 10.3c0-5.889 2.954-10.6 8.282-10.6 5.32 0 8.281 4.711 8.281 10.6 0 5.89-2.954 10.6-8.281 10.6-5.32 0-8.282-4.71-8.282-10.6Zm8.282 7.66c2.072 0 2.954-3.534 2.954-7.652 0-4.12-.889-7.652-2.954-7.652-2.072 0-2.954 3.533-2.954 7.652 0 4.118.882 7.652 2.954 7.652ZM119.187 7.7h-5.026v20.608h4.438l5.916-12.364h.294l-.294 12.364h5.026V7.7h-4.438l-5.916 12.363h-.294l.294-12.363Zm23.669 13.541 4.732.585c-.889 4.12-2.954 6.774-7.364 6.774-5.32 0-8.016-4.71-8.016-10.6 0-5.889 2.689-10.6 8.016-10.6 4.317 0 6.475 2.649 7.364 6.475l-4.732 1.177c-.294-2.063-1.155-4.71-2.632-4.71-1.771 0-2.689 3.533-2.689 7.651 0 4.09.918 7.652 2.689 7.652 1.449.015 2.33-2.341 2.632-4.404Zm11.83-13.54h-4.732v20.607h4.732v-9.13h.294l3.549 9.13H164l-5.177-10.6L163.849 7.7h-5.026l-3.843 9.13h-.294V7.7Z" fill="#fff" />
            </svg>
        </a>
      </div>

      <div className={cl.content_wrapper}>
        <nav>
          <Link 
            to={MainRoute}
            className={activeRoute === MainRoute ? cl.active : ''}
            onClick={() => changeActiveRoute(MainRoute)}
          >
            Главное
          </Link>
          <Link 
            to={BuyRoute}
            className={activeRoute === BuyRoute ? cl.active : ''}
            onClick={() => changeActiveRoute(BuyRoute)}
          >
            Магазин
          </Link>
          <Link
            to={PersonalRoute}
            className={activeRoute === PersonalRoute ? cl.active : ''}
            onClick={() => changeActiveRoute(PersonalRoute)}
          >
            Моё
          </Link>
          <Link
            to={ChannelsRoute}
            className={activeRoute === ChannelsRoute ? cl.active : ''}
            onClick={() => changeActiveRoute(ChannelsRoute)}
          >
            Телеканалы
          </Link>
          <Link
            to={SportRoute}
            className={activeRoute === SportRoute ? cl.active : ''}
            onClick={() => changeActiveRoute(SportRoute)}
          >
            Спорт
          </Link>
        </nav>
        <button>
          <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.6 10.5a6.1 6.1 0 1 1-12.2 0 6.1 6.1 0 0 1 12.2 0Zm-.998 6.8a8.5 8.5 0 1 1 1.697-1.697l5.55 5.548-1.698 1.698-5.549-5.55Z" fill="#fff" />
          </svg>
        </button>
      </div>

      <div className={cl.avatar_wrapper}>
        <a href="https://www.kinopoisk.ru/special/smarttv_instruction/" target='_blank' className={cl.img + ` ${cl.smart_tv}`}>
          <img src="https://avatars.mds.yandex.net/get-bunker/118781/1bed25da2e176ee99658eafff85ebe9a80ca0601/orig" alt="Установить на ТВ" />
          <span className={cl.big_scrren}>Установить на ТВ</span>
        </a>
        <div className={cl.img + ` ${cl.child}`}>
          <img src="https://avatars.mds.yandex.net/get-yapic/27232/zAvoq0n8YA6E0GCi62HfPRAo8I-1/60x60" alt="Дети" />
          <span className={cl.big_scrren}>Дети</span>
        </div>
        <div className={cl.user}>
          <div className={cl.user_wrap + ' ' + cl.plus_user}>
            <div className={cl.avatar}></div>
          </div>
          <div className={cl.points}>
            <svg width="1.6rem" height="1.6rem" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M10.5233 11.729L11.5353 6.899H15.9249C15.9744 7.25891 16 7.62647 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C8.85834 0 9.6851 0.135177 10.4602 0.385403L9.55725 4.599H5.11825L4.63525 6.899H9.07425L8.03925 11.729H10.5233ZM12.6872 1.5162L12.0413 4.599H15.2432C14.6637 3.36712 13.7793 2.30707 12.6872 1.5162Z" fill="white" />
            </svg>
            <span>0</span>
          </div>
          <div className={cl.user_menu}>
            <div className={cl.menu_section + ' ' + cl.user_section}>
              <div className={cl.user_items}>
                <span className={cl.user_name}>User</span>
                <span className={cl.email}>User@yandex.ru</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
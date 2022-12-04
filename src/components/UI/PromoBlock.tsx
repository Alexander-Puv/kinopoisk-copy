import React, { FC, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/context';
import cl from '../../styles/componentStyles/UI/PromoBlock.module.scss'
import IPromo from '../../types/IPromoBlock';

const PromoBlock: FC<IPromo> = ({img, logo, description, link}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const context = useContext(AppContext);

  useEffect(() => {
    isImgLoaded && context?.setIsPromoBlock(true)

    return () => {
      context?.setIsPromoBlock(false)
    }
  }, [isImgLoaded])

  const onLoad = () => {
    setIsImgLoaded(true)
  }

  return (
    <section className={cl.promo_block}>
      <img src={img} alt="" onLoad={onLoad} className={cl.img} loading='lazy' />
      <div className={cl.desc}>
        <div className={cl.desc__content}>
          <div className={cl.logo}>
            <img src={logo} alt="" onLoad={onLoad}/>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className={cl.btns_container}>
        <button className={cl.watch + ` ${cl.big_btns}`}>
          <svg width="1.8rem" height="1.8rem" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="none"><path d="M0 0h18v18H0z" /><path fill="#fff" d="M5 2v14l12-7z" /></g>
          </svg>
          <span>Смотреть фильм</span>
        </button>
        <button className={cl.about + ` ${cl.big_btns}`}>
          <svg fill="#fff" width="1.8rem" height="1.8rem" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM8 8C8 7.44772 8.44771 7 9 7C9.55229 7 10 7.44772 10 8V13C10 13.5523 9.55229 14 9 14C8.44771 14 8 13.5523 8 13V8ZM9 6C9.55229 6 10 5.55228 10 5C10 4.44772 9.55229 4 9 4C8.44771 4 8 4.44772 8 5C8 5.55228 8.44771 6 9 6Z" />
          </svg>
          <span>О фильме</span>
        </button>
        <button className={cl.bookmark + ` ${cl.small_btns}`}>
          <svg width="1.8rem" height="1.8rem" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h10v14l-5-3-5 3z" /></svg>
        </button>
        <button className={cl.not_interested + ` ${cl.small_btns}`}>
          <svg width="1.8rem" height="1.8rem" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M15.002 9a6 6 0 01-9.582 4.813l8.396-8.396c.745 1 1.186 2.24 1.186 3.583zM4.036 12.368l8.335-8.334a6 6 0 00-8.334 8.334zM17.002 9a8 8 0 11-16 0 8 8 0 0116 0z" />
          </svg>
        </button>
      </div>
      <a href="" className={cl.movie_link}></a>
    </section>
  )
}

export default PromoBlock
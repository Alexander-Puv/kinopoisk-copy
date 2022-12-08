import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { noImg } from '../assets/noImg'
import { HistoryRoute } from '../routing/consts'
import cl from '../styles/componentStyles/UserMenu.module.scss'
import UserItem from './UI/UserItem'

interface UserMenuProps {
  className?: string
}

const UserMenu: FC<UserMenuProps> = ({className}) => {
  
  return (
    <div className={cl.user_menu + ` ${className}`}>
      <section className={cl.menu_section + ' ' + cl.user_section}>
        <div className={cl.user_items}>
          <span className={cl.user_name}>User</span>
          <span className={cl.email}>User@yandex.ru</span>
        </div>
        <div className={cl.user_wrap + ' ' + cl.plus_user}>
          <div className={cl.avatar} style={{backgroundImage: `url(${noImg})`}}></div>
        </div>
      </section>

      <section className={cl.menu_section}>
        <div className={cl.item + ` ${cl.child_item}`}>
          <div className={cl.img}>
            <img src="https://avatars.mds.yandex.net/get-yapic/27232/zAvoq0n8YA6E0GCi62HfPRAo8I-1/60x60" alt="Дети" />
          </div>
          <div className={cl.child}>
            <span>Дети</span>
            <span>12+ и младше</span>
          </div>
        </div>
        <div className={cl.item}>
          <div className={cl.img}>
            <img src="https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/_next/static/media/edit.b9170a8c.svg" alt="Редактировать" />
          </div>
          <span>Редактировать</span>
        </div>
      </section>

      <section className={cl.menu_section}>
        <Link to={HistoryRoute} className={cl.item}><span>История просмотра</span></Link>
      </section>

      <section className={cl.menu_section}>
        <a href='https://www.kinopoisk.ru/' target='_blank' className={cl.item}><span>...</span></a>
        <a href='https://www.kinopoisk.ru/' target='_blank' className={cl.item}><span>Много неважного</span></a>
        <a href='https://www.kinopoisk.ru/' target='_blank' className={cl.item}><span>...</span></a>
      </section>

      <section className={cl.menu_section}>
        <div className={cl.item}><span>Выйти</span></div>
      </section>

      <section className={cl.menu_section + ` ${cl.users_section}`}>
        <h3 className={cl.other_users}>Другие пользователи</h3>
        <UserItem cl={cl} text={'User@yandex.ru'} link={'/'} />
        <UserItem
          cl={cl}
          text={'Добавить пользователя'}
          link={'/'}
          img={'https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/_next/static/media/add-account-old.7435cf78.svg'}
        />
      </section>
    </div>
  )
}

export default UserMenu
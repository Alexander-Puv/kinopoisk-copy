import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { noImg } from '../../assets/noImg'

interface UserItemProps {
  cl: CSSModuleClasses,
  link: string,
  text: string,
  img?: string,
}

const UserItem: FC<UserItemProps> = ({cl, link, text, img}) => {
  return (
    <Link to={link} className={cl.item}>
      <div className={cl.img}>
        <img src={img ? img : noImg} alt={text} style={!img ? {backgroundColor: 'hsla(0,0%,100%,0.2)'} : {}} />
      </div>
      <span>{text}</span>
    </Link>
  )
}

export default UserItem
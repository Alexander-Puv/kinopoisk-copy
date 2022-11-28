import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import cl from '../../styles/componentStyles/UI/Carousel.module.scss'

interface CarouselProps {
  children: React.ReactNode[],
  title: string,
  link: string
}

const Carousel: FC<CarouselProps> = ({children, title, link}) => {
  return (
    <section className={cl.main_container}>
      <Link to={link} className={cl.title}>
        <h3>{title}</h3>
        <svg width="2rem" height="2rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3 9.988 5.558 3.53l1.384-1.444 7.5 7.186.758.727-.763.722-7.5 7.091-1.374-1.453 6.737-6.37Z" />
        </svg>
      </Link>
      <div className={cl.window}>
        <ul className={cl.all_pages_container}>
          {children.map((child, i) =>
            <li className={cl.item} key={i}>
              {child}
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Carousel
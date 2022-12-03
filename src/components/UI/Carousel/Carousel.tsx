import React, { FC, ReactNode, useEffect, useState } from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import { Link } from 'react-router-dom'
import cl from '../../../styles/componentStyles/UI/Carousel/Carousel.module.scss'
import CarouselBtn from './CarouselBtn'

interface CarouselProps {
  children: React.ReactNode[],
  title: string,
  link: string,
}

const Carousel: FC<CarouselProps> = ({children, title, link}) => {
  const [pages, setPages] = useState<ReactNode[]>([]);

  useEffect(() => {
    setPages([...children])
  }, [])

  return (
    <section className={cl.main_container}>
      <Link to={link} className={cl.title}>
        <h3>{title}</h3>
        <svg width="2rem" height="2rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3 9.988 5.558 3.53l1.384-1.444 7.5 7.186.758.727-.763.722-7.5 7.091-1.374-1.453 6.737-6.37Z" />
        </svg>
      </Link>
      <div className={cl.scroll_container}>
        <ScrollMenu
          LeftArrow={<CarouselBtn />}
          RightArrow={<CarouselBtn direction='right' />}
          onScroll={e => console.log(e)}
        >
          {pages.map((page, i) =>
            <li className={cl.item} key={i}>
              {page}
            </li>
          )}
        </ScrollMenu>
      </div>
    </section>
  )
}

export default Carousel
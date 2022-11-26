import React, { FC } from 'react'
import cl from '../../styles/componentStyles/UI/Carousel.module.scss'

interface CarouselProps {
  children: React.ReactNode
}

const Carousel: FC<CarouselProps> = ({children}) => {
  return (
    <section className={cl.main_container}>
      {children}
    </section>
  )
}

export default Carousel
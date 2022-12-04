import { FC } from 'react'
import cl from '../../../styles/componentStyles/UI/Carousel/Carousel.module.scss'

interface CarouselItemProps {
  img?: string,
}

const CarouselItem: FC<CarouselItemProps> = ({img}) => {
  return (
    <div className={cl.carousel_item}>
      {img ?
        <div className={cl.img}>
          <img src={img} alt="" />
        </div>
      :
        <div className={cl.show_all_btn}>
          <span>
            <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="m13.848 2.65 8.5 8.5.85.85-.85.848-8.5 8.5-1.697-1.697 6.452-6.452H2.5v-2.4h16.103L12.15 4.348l1.697-1.697Z" />
            </svg>
          </span>
          <p>Показать всё</p>
        </div>
      }
    </div>
  )
}

export default CarouselItem
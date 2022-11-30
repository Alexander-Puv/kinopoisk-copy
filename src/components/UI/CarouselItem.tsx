import React, { FC } from 'react'

interface CarouselItemProps {
  img: string
}

const CarouselItem: FC<CarouselItemProps> = ({img}) => {
  return (
    <div><img src={img} alt="" /></div>
  )
}

export default CarouselItem
import { FC } from 'react'
import { Helmet } from 'react-helmet'

interface CarouselItemProps {
  img: string,
}

const CarouselItem: FC<CarouselItemProps> = ({img}) => {
  return (
    <div>
      <Helmet meta={[{'property': 'og:image', 'content': 'https://avatars.mds.yandex.net/get-ott/224348/2a0000017d0f0726bf3009914dac2b53a8e3/orig'}]} />
      <img src={img} alt="" />
    </div>
  )
}

export default CarouselItem
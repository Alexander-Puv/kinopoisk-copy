import { FC } from "react"
import cl from '../../../styles/componentStyles/UI/Carousel/CarouselBtn.module.scss'

interface CarouselButtonProps {
  direction?: 'left' | 'right',
  offset: number,
  setOffset: (num: number) => void,
  maxOffset?: number
}

const CarouselBtn: FC<CarouselButtonProps> = ({direction = 'left', offset, setOffset, maxOffset = 0}) => {
  const changeOffset = () => {
    direction === 'left' ?
      setOffset(offset !== 0 ? offset + 1 : offset)
    :
      setOffset(offset !== -1 ? offset - 1 : offset)
  }

  return (
    <button
      className={`${cl.carousel_btn} ${direction === 'left' ? cl.left : cl.right}`}
      style={direction === 'left' ? (offset === 0 ? {display: 'none'} : {}) : (offset === maxOffset * -1 ? {display: "none"} : {})}
      onClick={changeOffset}
    >
      <svg width="1.7rem" height="3.6rem" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z" fill="white" />
      </svg>
    </button>
  )
}

export default CarouselBtn;
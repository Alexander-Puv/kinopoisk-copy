import { FC, useContext, useState, useEffect } from "react"
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import cl from '../../../styles/componentStyles/UI/Carousel/CarouselBtn.module.scss'

interface CarouselButtonProps {
  direction?: 'left' | 'right',
}

const CarouselBtn: FC<CarouselButtonProps> = ({direction = 'left'}) => {
  const {isFirstItemVisible, scrollPrev, visibleElements, initComplete, isLastItemVisible, scrollNext,} = useContext(VisibilityContext);
  const [disabled, setDisabled] = useState(
    direction === 'left'! ? initComplete || (initComplete && isFirstItemVisible)
    : !visibleElements.length && isLastItemVisible
  );
  
  useEffect(() => {
    direction === 'left' &&
    visibleElements.length &&
    setDisabled(isFirstItemVisible);
  }, [isFirstItemVisible, visibleElements]);
  
  useEffect(() => {
    direction === 'right' &&
    visibleElements.length &&
    setDisabled(isLastItemVisible);
  }, [isLastItemVisible, visibleElements]);

  return (
    <button
      className={`${cl.carousel_btn} ${direction === 'left' ? cl.left : cl.right}`}
      style={disabled ? {opacity: 0} : {}}
      onClick={() => direction === 'left' ? scrollPrev() : scrollNext()}
    >
      <svg width="1.7rem" height="3.6rem" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z" fill="white" />
      </svg>
    </button>
  )
}

export default CarouselBtn;
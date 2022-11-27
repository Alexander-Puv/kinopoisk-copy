import Carousel from '../components/UI/Carousel'
import PromoBlock from '../components/UI/PromoBlock'
import mainPromo from '../assets/promo/mainPromo'

const MainPage = () => {
  return (
    <main className='page main_page'>
      <PromoBlock
        img={mainPromo.img}
        logo={mainPromo.logo}
        description={mainPromo.description}
        link={mainPromo.link}
      />
      <Carousel>

      </Carousel>
    </main>
  )
}

export default MainPage
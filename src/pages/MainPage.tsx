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
      <Carousel title='Рекомендуем сериалы' link='/'>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </Carousel>
    </main>
  )
}

export default MainPage
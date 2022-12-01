import Carousel from '../components/UI/Carousel/Carousel'
import PromoBlock from '../components/UI/PromoBlock'
import mainPromo from '../assets/promo/mainPromo'
import CarouselItem from '../components/UI/Carousel/CarouselItem'

const MainPage = () => {
  return (
    <main className='page main_page'>
      <PromoBlock
        img={mainPromo.img}
        logo={mainPromo.logo}
        description={mainPromo.description}
        link={mainPromo.link}
      />
      <Carousel title='Фильмы для вас' link='/'>
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
        <CarouselItem img='https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234' />
      </Carousel>
    </main>
  )
}

export default MainPage
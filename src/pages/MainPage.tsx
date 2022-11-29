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
      <Carousel title='Фильмы для вас' link='/'>
        <div><img src="https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234" alt="" /></div>
        <div><img src="https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234" alt="" /></div>
        <div><img src="https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234" alt="" /></div>
        <div><img src="https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234" alt="" /></div>
        <div><img src="https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234" alt="" /></div>
        <div><img src="https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef582738499de0b4659f68750eb/375x234" alt="" /></div>
      </Carousel>
    </main>
  )
}

export default MainPage
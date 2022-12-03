import Carousel from '../components/UI/Carousel/Carousel'
import PromoBlock from '../components/UI/PromoBlock'
import mainPromo from '../assets/promo/mainPromo'
import CarouselItem from '../components/UI/Carousel/CarouselItem'
import { Helmet } from 'react-helmet'
import { movies } from '../data/movies'

const MainPage = () => {
  return (
    <main className='page main_page'>
      <Helmet
        title='Фильмы и сериалы смотреть онлайн в хорошем качестве по подписке — Кинопоиск'
        meta={[{'property': 'og:title', 'content': 'Фильмы и сериалы смотреть онлайн в хорошем качестве по подписке — Кинопоиск'}]}
      />
      <PromoBlock
        img={mainPromo.img}
        logo={mainPromo.logo}
        description={mainPromo.description}
        link={mainPromo.link}
      />
      <Carousel title='Фильмы для вас' link='/'>
        {movies.map(movie =>
          <CarouselItem img={movie.img} key={movie.id} />
        )}
      </Carousel>
    </main>
  )
}

export default MainPage
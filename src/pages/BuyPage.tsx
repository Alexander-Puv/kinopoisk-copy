import React from 'react'
import { Helmet } from 'react-helmet'

const BuyPage = () => {
  return (
    <main className='page'>
      <Helmet
        title='Фильмы смотреть онлайн в хорошем качестве — Кинопоиск'
        meta={[{'property': 'og:title', 'content': 'Фильмы смотреть онлайн в хорошем качестве — Кинопоиск'}]}
      />
      
    </main>
  )
}

export default BuyPage
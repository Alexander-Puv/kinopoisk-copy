import React from 'react'
import { Helmet } from 'react-helmet'

const SportPage = () => {
  return (
    <main className='page'>
      <Helmet
        title='Спорт на Кинопоиске: футбол, хоккей, единоборства в прямом эфире'
        meta={[{'property': 'og:title', 'content': 'Спорт на Кинопоиске: футбол, хоккей, единоборства в прямом эфире'}]}
      />

    </main>
  )
}

export default SportPage
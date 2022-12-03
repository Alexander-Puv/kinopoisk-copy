import React from 'react'
import { Helmet } from 'react-helmet'

const ChannelsPage = () => {
  return (
    <main className='page'>
      <Helmet
        title='Смотреть каналы и ТВ программы онлайн на Кинопоиске'
        meta={[{'property': 'og:title', 'content': 'Смотреть каналы и ТВ программы онлайн на Кинопоиске'}]}
      />

    </main>
  )
}

export default ChannelsPage
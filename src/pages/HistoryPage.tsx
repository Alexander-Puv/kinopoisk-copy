import React from 'react'
import { Helmet } from 'react-helmet'

const HistoryPage = () => {
  return (
    <main className='page'>
      <Helmet
        title='История просмотра — Кинопоиск'
        meta={[{'property': 'og:title', 'content': 'История просмотра — Кинопоиск'}]}
      />
      
    </main>
  )
}

export default HistoryPage
import React from 'react'
import { Helmet } from 'react-helmet'

const PersonalPage = () => {
  return (
    <main className='page'>
      <Helmet
        title='Моё - Кинопоиск'
        meta={[{'property': 'og:title', 'content': 'Моё - Кинопоиск'}]}
      />
      
    </main>
  )
}

export default PersonalPage
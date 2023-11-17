import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data'

function App() {
  const cards = cardData.map((data) => {
    return (
      <Card 
        key={data.id} // Must have key to get rid of warning
        item={data}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
          {cards}
      </section>
    </div>
  )
}

export default App

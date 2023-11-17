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
        id={data.id}
        title={data.title}
        description={data.description}
        price={data.price}
        img={data.coverImg}
        stats={data.stats}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        openSpots={data.openSpots}
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

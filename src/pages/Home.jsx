import React from 'react'
import SectionHero from '../components/SectionHero'
import SectionCards from '../components/SectionCards'
import SectionCafeCards from '../components/SectionCafeCards'

const Home = () => {
  return (
    <div>
      <SectionHero/>
      <SectionCards/>
      <SectionCafeCards/>
    </div>
  )
}

export default Home
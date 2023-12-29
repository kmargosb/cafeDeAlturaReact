import React from 'react'
import SectionHero from '../components/SectionHero'
import SectionCards from '../components/SectionCards'
import SectionCafeCards from '../components/SectionCafeCards'
import SectionFaq from '../components/SectionFaq'

const Home = () => {
  return (
    <div>
      <SectionHero/>
      <SectionCards/>
      <SectionCafeCards/>
      <SectionFaq/>
    </div>
  )
}

export default Home
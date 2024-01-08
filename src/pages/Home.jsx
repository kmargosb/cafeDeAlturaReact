import React from 'react'
import SectionHero from '../components/SectionHero'
import SectionCards from '../components/SectionCards'
import SectionCafeCards from '../components/SectionCafeCards'
import SectionFaq from '../components/SectionFaq'
import SectionFeature from '../components/SectionFeature'
import SectionForm from '../components/SectionForm'
import SectionFooter from '../components/SectionFooter'


const Home = () => {
  return (
    <div>
      <SectionHero/>
      <SectionCards/>
      <SectionCafeCards/>
      <SectionFaq/>
      <SectionFeature/>
      <SectionForm/>
      <SectionFooter/>
    </div>
  )
}

export default Home
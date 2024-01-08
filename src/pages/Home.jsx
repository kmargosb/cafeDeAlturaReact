import React from 'react'
import SectionHero from '../components/SectionHero'
import SectionCards from '../components/SectionCards'
import SectionCafeCards from '../components/SectionCafeCards'
import SectionFaq from '../components/SectionFaq'
import SectionFeature from '../components/SectionFeature'
import SectionForm from '../components/SectionForm'
import SectionFooter from '../components/SectionFooter'
import FooterCopyRight from '../components/FooterCopyRight'

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
      <FooterCopyRight/>
    </div>
  )
}

export default Home
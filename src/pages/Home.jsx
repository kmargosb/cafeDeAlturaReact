import React from 'react'
import SectionHero from '../components/SectionHero'
import SectionCards from '../components/SectionCards'
import SectionCafeCards from '../components/SectionCafeCards'
import SectionFaq from '../components/SectionFaq'
import SectionFeature from '../components/SectionFeature'
import SectionForm from '../components/SectionForm'
import SectionFooter from '../components/SectionFooter'
import { Link } from 'react-router-dom'
import arrow from '../images/ArrowNarrowRight.png'


const Home = () => {
  return (
    <div>
      <SectionHero />
      <SectionCards />
      <SectionCafeCards
        textTittle='Novedades'
        cooffeToShow={4}
        
        style={`flex gap-6 w-[1200px]`}
        seeAll={
          <Link to="/shop"
            className='flex gap-4 items-center justify-center'>
            <p className='text-[14px] font-semibold underline'>Ver todos</p>
            <img src={arrow} alt="icon" />
          </Link>}
      />
      <SectionFaq />
      <SectionFeature />
      <SectionForm />
      <SectionFooter />
    </div>
  )
}

export default Home
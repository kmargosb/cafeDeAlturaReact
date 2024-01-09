import React from 'react'
import SectionCafeCards from '../components/SectionCafeCards'
import SectionCards from '../components/SectionCards'
import SectionFooter from '../components/SectionFooter'

const Shop = () => {
  return (

    <div className='font-outfit'>
      <SectionCafeCards
        style={`flex flex-wrap gap-6 w-[1200px]`}
        textTittle='Últimos orígenes'
        cooffeToShow={20}
      />
      <SectionCards />
      <SectionFooter/>
    </div>

  )
}

export default Shop
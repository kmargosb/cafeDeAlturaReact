import React from 'react'
import cafeteria from '../images/cafeteria.jpeg'
import { Link } from 'react-router-dom'
import arrow from '../images/ArrowNarrowRight.png'

const SectionHero = () => {
    return (
        <div className='font-outfit bg-OffWhite pt-[44.6px] pb-[45.4px] px-10 w-full flex justify-center'>
            <div className='flex justify-between items-center gap-6 w-full'>
                <div className='flex flex-col gap-4 w-[457px] justify-center items-start'>
                    <h3 className='text-[24px] text-GreenAll font-medium leading-7'>Pruébalo en nuestro coffee shop</h3>
                    <p className='text-[14px] text-BlackP leading-4'>
                        Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.
                    </p>
                    <Link to="/shop" className='flex gap-4 items-center justify-center'>
                        <p className='text-[14px] font-semibold'>Cómo llegar</p>
                        <img src={arrow} alt="icon" />
                    </Link>
                </div>
                <img src={cafeteria} alt="cafe" className='h-[390px] rounded-[20px] ' />
            </div>
        </div>
    )
}

export default SectionHero
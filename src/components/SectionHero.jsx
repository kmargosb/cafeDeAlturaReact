import React from 'react'
import Button from './Button'
import cafeHero from '../../src/images/cafehero.jpeg'

const SectionHero = () => {
    return (
        <div className='font-outfit py-12 px-10 w-screen flex gap-6'>
            <div className='flex flex-col gap-4 flex-1 justify-center'>
                <h3 className='text-lg font-semibold leading-6'>De la planta a tu taza</h3>
                <h1 className='text-[40px] font-semibold leading-[44px]'>El mejor café del mundo, ahora en tu casa.</h1>
                <p className='text-[14px] leading-4'>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                <div className='flex gap-4'>
                    <Button text='Descubrir orígenes' styles='py-3 px-6 bg-black text-white rounded' />
                    <Button text='Comprar café' styles='py-3 px-6 bg-green-500 text-white rounded ' />
                </div>
            </div>
            <img src={cafeHero} alt="cafe" className='h-[390px] rounded-[20px] flex-1'/>
        </div>
    )
}

export default SectionHero
import React from 'react'
import Button from './Button'

const SectionFeature = () => {
    return (
        <div className='font-outfit py-12 px-10 w-screen'>
            <div>
                <h3>De la planta a tu taza</h3>
                <h1>El mejor café del mundo, ahora en tu casa.</h1>
                <p></p>
                <div className='flex gap-4'>
                    <Button text='Descubrir orígenes' styles='py-3 px-6 bg-black text-white'/>
                    <Button text='Comprar café' styles='py-3 px-6 bg-green-500 text-white rounded' />
                </div>
            </div>
            <img src="" alt="" />
        </div>
    )
}

export default SectionFeature
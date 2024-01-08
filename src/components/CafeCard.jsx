import React from 'react'
import Button from './Button.jsx'

const CafeCard = ({price, name, img, id, available}) => {
    return (
        <div className='font-outfit flex flex-col w-full justify-center items-center p-6 gap-6 border rounded-lg hover:bg-OffWhite transition duration-200'>
            <img src={img} alt={name} />
            <div className='flex flex-col gap-3 justify-center items-center text-[14px] leading-[16px] '>
                <p className='font-semibold'>{name}</p>
                <p className='font-normal'>{price.toFixed(2)} €</p>
            </div>
            <Button text="Añadir" styles="flex p-2 bg-GreenA rounded text-white text-[14px] font-semibold leading-4 hover:bg-GreenAll transition duration-200"/>
        </div>
    )
}

export default CafeCard
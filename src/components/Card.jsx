import React from 'react'

const Card = ({ textH3, textP, imagenSvg }) => {
    return (
        <div className='font-outfit flex flex-col gap-4 justify-center items-center w-full bg-white p-6 rounded-lg'>
            <div className='bg-GreenAll p-3 rounded-[20px]'>
                <img src={imagenSvg} alt="icon" />
            </div>
            <h3 className='text-[18px] text-DarkGrey font-semibold leading-6 text-center'>{textH3}</h3>
            <p className='text-[14px] text-BlackP leading-4 text-center'>{textP}</p>
        </div>
    )
}

export default Card
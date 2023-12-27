import React from 'react'

const Card = ({ textH3, textP, imagenSvg }) => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center w-full bg-white p-6 rounded-lg'>
            <div className='bg-green-950 p-3 rounded-[20px]'>
                <img src={imagenSvg} alt="icon" />
            </div>
            <h3 className='text-[18px] font-semibold leading-6'>{textH3}</h3>
            <p className='text-[14px] leading-4'>{textP}</p>
        </div>
    )
}

export default Card